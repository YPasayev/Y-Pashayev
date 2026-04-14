module.exports = (req, res) => {
  const path = req.url;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Menyu hissesi
  const menu = `
    <nav style="background: #333; padding: 15px; text-align: center;">
      <a href="/api" style="color: white; margin: 0 15px; text-decoration: none;">Ana Səhifə</a>
      <a href="/api?page=about" style="color: white; margin: 0 15px; text-decoration: none;">Mənim Haqqımda</a>
      <a href="/api?page=cars" style="color: white; margin: 0 15px; text-decoration: none;">Avtomobil Marağım</a>
    </nav>
  `;

  let content = "";

  // Sehifeler arasi kecid mentiqi
  if (path.includes("page=about")) {
    content = `<h1>Mənim Haqqımda</h1>
               <p>Mən Bakı Texniki Kollecinin 2-ci kurs tələbəsiyəm.</p>
               <p>İxtisasım: Proqram təminatı mühəndisliyi.</p>`;
  } else if (path.includes("page=cars")) {
    content = `<h1>Avtomobil Marağım</h1>
               <p>Çin avtomobilləri ilə maraqlanıram, xüsusən FAW Bestune B70 modelini bəyənirəm.</p>
               <img src="https://bestune.az/uploads/cars/b70/b70-main.png" width="300">`;
  } else {
    content = `<h1>Xoş Gəlmisiniz!</h1>
               <p>Bu, server tərəfindən idarə olunan (dynamic) kiçik bir saytdır.</p>
               <p>Yuxarıdakı menyudan istifadə edərək bölmələr arasında gəzə bilərsiniz.</p>`;
  }

  res.status(200).send(`
    <html>
      <head><title>Mənim Mini Saytım</title></head>
      <body style="font-family: Arial; margin: 0; background: #f0f0f0; text-align: center;">
        ${menu}
        <div style="padding: 50px; background: white; margin: 20px auto; width: 60%; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          ${content}
        </div>
      </body>
    </html>
  `);
};
