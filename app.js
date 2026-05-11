const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Updated via CI/CD New 🚀');
    res.end();
});

<<<<<<< HEAD
server.listen(80);
=======
server.listen(8080);

>>>>>>> f357a90 (updated)
