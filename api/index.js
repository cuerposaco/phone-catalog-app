const restify = require('restify');
const phoneCatalog = require('./data');
const _phoneCatalog = require('./data/_index');

const server = restify.createServer();

const { queryParser, pre: { dedupeSlashes, sanitizePath} } = restify.plugins;
server.pre(dedupeSlashes());
server.pre(sanitizePath());
server.use(queryParser());
server.use(function crossOrigin(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  return next();
});

server.get('/', (req, res, next) => {
  res.send('Phone Catalog API');
  return next();
});

server.get('/phones', (req, res, next) => {
  setTimeout(() => res.send(phoneCatalog), 2000);
  return next();
});

// endpoint to Data mining
server.get('/_phones', (req, res, next) => {
  res.send(_phoneCatalog);
  return next();
});

server.listen(process.env.API_PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});