const net = require("net");

const client = net.createConnection({ port: 9898 }, () => {
  console.log("CLIENT: I connected to the server.");
  client.write("CLIENT: Hello this is client! Am I data?");
  client.write("am i data?");
});

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});

client.on("end", () => {
  console.log("CLIENT: I disconnected from the server");
});
