const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", (req, res) => {
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // });
  // server.listen(8000, () => {
  //   console.log("It's Listening....!");
  // });
  var stream = fs.createReadStream("test-file.txt");
  var wStream = fs.createWriteStream("test-file2.txt");
  stream.on("open", () => {
    console.log("Stream Opened");
  });
  stream.on("data", (data) => {
    res.write(data);
  });
  stream.on("end", () => {
    console.log("Successfully returned");
    res.end();
  });
  stream.on("error", (err) => {
    console.log(err);
  });
  //stream.pipe(res);
});
server.listen(8080);
