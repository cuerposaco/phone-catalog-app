const fs = require('fs');
const path = require('path');
const url = require('url');
// eslint-disable-next-line
const request = require('request');
// eslint-disable-next-line
const cheerio = require('cheerio');


const promiseRequest = uri => new Promise((resolve, reject) => {
  request(uri, (err, response, body) => {
    if (err) return reject(err);
    return resolve(body);
  });
});
const getFileNameFromPath = pathFile => url.parse(pathFile).pathname.split('/').reverse()[0];
const downloadImage = (fileUrl, location) => {
  const filename = getFileNameFromPath(fileUrl);
  const fileLocation = path.resolve(location, filename);
  const writeStream = fs.createWriteStream(fileLocation);
  request(fileUrl).pipe(writeStream);
  return filename;
};

request('http://localhost:4001/_phones', (err, response, body) => {
  if (err) { console.log(err); return process.exit(1); }

  const data = JSON.parse(body);
  const getUID = () => Number(Math.random().toString().split('.')[1]).toString(16);

  const phonePromises = data.map(
    phone => promiseRequest(phone.description).then((resp) => {
      const $ = cheerio.load(resp);
      const imageHigh = phone.image.replace('200_176', '450_450');
      downloadImage(phone.image, path.resolve(__dirname, 'static', 'img'));
      downloadImage(imageHigh, path.resolve(__dirname, 'static', 'img'));
      return ({
        ...phone,
        id: getUID(),
        description: $('.modulo-introduccion #acordion_introduccion > div').text().replace(/(\n|\t)/g, ''),
        image: {
          low: `/img/${getFileNameFromPath(phone.image)}`,
          medium: `/img/${getFileNameFromPath(imageHigh)}`,
        },
      });
    }),
  );

  Promise.all(phonePromises).then(results => console.log(JSON.stringify(results)));

  // return process.exit(0);
});
