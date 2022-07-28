const http = require("http");

const host = 'localhost';
const port = 8000;

//handles incoming http requests, returns http response

// req captures incoming http request data
// res will return http response for server
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
   };

//requesListener recieves the server's incoming http requests
const server = http.createServer(requestListener);
    //bind server to host:port
    server.listen(port, host, () => {
        //this callback executes once server starts listening
        console.log(`server running at http://${host}:${port}`)
    });