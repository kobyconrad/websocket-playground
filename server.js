const net = require("net"); // Node js "net" library

const server = net
  .createServer((socket) => {
    // triggers when client connects to server
    socket.on("data", (data) => {
      console.log(data.toString());
    });
    // server will log any data client sends to server ^^

    // after connection server sends string to the client
    socket.write("SERVER: Hello! This is the server speaking. \n");
    socket.end("SERVER: Closing connection now. \n");
  })
  .on("error", (err) => {
    console.error(err);
  });

server.listen(9898, () => {
  console.log("opened server on", server.address().port);
});
