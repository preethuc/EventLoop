const fs = require("fs");
import fs from 'fs'   //es6---import
const crypto = require("crypto");   //es5---require
start = Date.now();
setImmediate(() => console.log("Timer 1 set "));
setTimeout(() => console.log("Timer 1 finished"), 0);
setTimeout(() => console.log("Timer 2 finished"), 0);
//console.log("First Line");
fs.readFile("test-file.txt", () => {
  console.log("i/o finished");
  console.log("============");
  setTimeout(() => console.log("Timer 3 finished"), 0);
  setTimeout(() => console.log("Timer 4 finished"), 0);
  setImmediate(() => console.log("Timer 2 set "));
  process.nextTick(() => console.log("Process of nexttick"));
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted 1");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted 2");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted 3");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted 4");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted 5");
  });
});
console.log("First Line");
