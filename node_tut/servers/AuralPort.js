const http = require("http");

const host = 'localhost';
const port = 8000;

const reqListen = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);

};

const server = http.createServer(reqListen);

server.listen(port, host, () => {
    console.log(`server running: http://${host}:${port}`);
})