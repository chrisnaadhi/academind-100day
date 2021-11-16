const userName = 'chrisnaadhi';
const upper = userName.slice(0, 3);

const http = require('http');

const handleRequest = (request, response) => {
  if (request.url === '/currenttime') {
    response.statusCode = 200;
    response.end(`<h1>${new Date().toLocaleDateString()}</h1>`)
  } else {
    response.statusCode = 200;
    response.end('<h1> Hello World! </h1><p>this is my first time using node</p>');
  }
}

const server = http.createServer(handleRequest)

server.listen(3000);

// 