
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello World'}));
});

const host = 'localhost';
const port = 8080;

server.listen(port, host, () => {
    console.log();
});