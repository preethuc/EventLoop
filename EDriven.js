const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("FanOn", () => {
  console.log("Feel the air");
});
myEmitter.on("FanOn", () => {
  console.log("Feels fresh");
});
myEmitter.emit("FanOn");
//Event Driven on server
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Get Lost");
});
server.on("request", () => {
  console.log("Request received😊");
});
server.on("close", () => {
  console.log("Server Closed Successfully!😁");
});
server.listen(8000, () => {
  console.log("Succesfully listened");
});
