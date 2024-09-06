const http = require('http');
const fs = require('fs');

/*
const htmlHandler = require('./htmlResponses');
const textHandler = require('./textResponses');
const jsonHandler = require('./jsonResponses');
*/

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

console.log(index);

const onRequest = (request, response) => {
  switch (request.url) {
    case '/':
      console.log(request.url);
      response.writeHead(200, {
        'Content-Type': 'text/html',
      });
      response.write(index);
      response.end();
      break;
    default:
      console.log(request.url);
      response.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      response.write('Page not found!');
      response.end();
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
