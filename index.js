module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; background: #f4f4f4; padding-top: 50px;">
        <h1 style="color: #2ecc71;">✅ Server Uğurla İşə Düşdü!</h1>
        <p style="font-size: 1.2em;">Bu, Vercel üzərində işləyən canlı <b>Node.js</b> serveridir.</p>
        <hr style="width: 50%; margin: 20px auto;">
        <p>Tələbə: Y. Pashayev</p>
        <p>İxtisas: Proqram təminatı mühəndisliyi (2-ci kurs)</p>
      </body>
    </html>
  `);
};
