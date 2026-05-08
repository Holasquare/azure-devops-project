const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Updated for CI/CD 🚀');
    res.end();
});

server.listen(80);
