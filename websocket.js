const websocketServer = require("websocket").server;
const httpServer = require("./http").server;
const ws = new websocketServer({ httpServer });
/**@type {Set<import('websocket').connection>} */
const connections = new Set();
ws.on("request", req => req.accept());
ws.on("connect", connection => {
    connections.add(connection);
    connection.on("message", msg => {
        connections.forEach(conn => conn.sendUTF(msg.utf8Data));
    });
});
ws.on("close", (conn) => { connections.delete(conn); });
