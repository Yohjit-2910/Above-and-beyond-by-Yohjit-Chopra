const express = require('express');
const app = express();

const port = 3019;
const base = `${__dirname}/public`;

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(`${base}/index.html`);
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  app.get('/login', (req, res) => {
    res.sendFile(`${base}/index.html`);
  });
  
  app.get('/aboutus', (req, res) => {
    res.sendFile(`${base}/about_us.html`);
  });

  // app.get('/data', (req, res) => {
  //   res.sendFile(`${base}/data.html`);
  // });

  app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
  });
