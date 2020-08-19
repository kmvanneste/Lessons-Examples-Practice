const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(requestHandler);

server.listen(PORT, function () {
    console.log("Server IS listening on PORT 8080");
})
function requestHandler(req, res) {
        const path = req.url;

        switch(path) {
            case "/":
                fs.readFile(__dirname + "/index.html", "utf8", function(err, data) {
                    if (err) throw err;

                    res.writeHead(200, {"Content-Type": "text/html"})
                    res.end(data);
                });
            break;
            case "/food":
                fs.readFile(__dirname + "/food.html", "utf8", function(err, data) {
                    if (err) throw err;
                    
                    res.writeHead(200, {"Content-Type": "text/html"})
                    res.end(data);
                });
        }
}