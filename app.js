const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from Azure VM 🚀');
    res.end();
});

server.listen(80);
