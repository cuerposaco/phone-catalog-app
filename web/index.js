const express = require('express');
const nunjucks = require('nunjucks');

const port = process.env.SERVER_PORT || 3000;
const env = process.env.APP_ENV || 'development';

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: env === 'development',
  cache: env !== 'development',
});

if (env === 'production') {
  app.use('/dist', express.static('dist'));
}

app.use(express.static('static'));

const templateEnvs = {
  distURL: process.env.DIST_URL || 'http://localhost:8001/dist',
  API_URL: process.env.API_URL || 'http://localhost:3000',
};

app.get('/', (req, res) => {
  res.render('index.html', templateEnvs);
});

app.get('*', (req, res) => {
  res.render('index.html', templateEnvs);
});

// Start server
app.listen(port, () => {
  console.log(`Phone Catalog server listening on port ${port}`);
});
