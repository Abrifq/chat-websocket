const http = require("http");
const fs = require("fs");
const server = http.createServer((_incoming, outgoing) => {
    outgoing.writeHead(200, "OK", { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream("./page.html",
        { encoding: "utf8", mode: fs.constants.O_RDONLY, autoClose: true }
    ).pipe(outgoing);
});

server.listen(8080);
exports.server = server;