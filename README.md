# Websocket Chat Test

Just a small test thing to experiment with websocket.

## How to test for yourself

Alrighty then! Follow these steps:

1. Run `npm install` to install dependencies.
2. Run the project with `npm start`.
3. Open [localhost:8080](http://localhost:8080) in your browser
4. Enter a name and then send some messages!
5. Open the page in another tab to watch the message come to there as well!

### For ones who want to tinker

- You can use `npx nodemon` instead of `npm start`, however this means changing websocket code will restart the server and drop the connections.
  That will be difficult to catch on so I don't recommend `nodemon`ing this.
- You can use the enviroment variable `PORT` to change the default port `8080`.
- On client side, try reading [Websocket class documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).
  On server side, try reading [ws.js' documentation](https://github.com/websockets/ws/blob/master/doc/ws.md). Typescript types also helps but those are the last resorts.
