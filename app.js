const express = require("express");
const QRcode = require("qrcode");
const app = express();

const port = 3000;

app.get("/qrcode", (req, res) => {
  const url = "https://www.youtube.com/watch?v=3D5KTqM-8VE";
  QRcode.toDataURL(url, (err, QRcodeurl) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.send(`<!DOCTYPE html>
<html>
<head>
   <title>QR Code Generator</title>
</head>
<body>
<h1>QR Code Generator</h1>
<img src="${QRcodeurl}" alt="QR Code">
<p>scan the qr code visit the website</p>
</body>
</html>`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
