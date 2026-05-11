const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Updated via CI/CD New Updated 🚀');
    res.end();
});

server.listen(8080);


