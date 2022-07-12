 // //async/await
// async function performRequests() {
//   const res = await fetch(".....");
//   const headers = req.headers;
//   const body = await req.json();
//   return body.item;
// }
// //promises
// performRequests(() => {
//   let headers;
//   return fetch("....")
//     .then((res) => {
//       headers = res.headers;
//       return res.json();
//     })
//     .then((body) => {
//       return body.item;
//     });
// });
async function myfun() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(1);
      //reject("Failure");
    }, 2000)
  );
}
// async function awaitFun() {
//   const output = await myfun();
//   console.log(output);
// }
// awaitFun().catch((message) => {
//   console.log(message);
// });

//promise chaining
// async function awaitFun() {
//   myfun()
//     .then((res) => incrementOne(res))
//     .then((res) => incrementOne(res))
//     .then((res) => incrementOne(res))
//     .then(console.log);
// }
//Await
async function awaitFun() {
  const v1 = await myfun();
  const v2 = await incrementOne(v1);
  const v3 = await incrementOne(v2);
  const v4 = await incrementOne(v3);
  console.log(v4);
}
async function incrementOne(res) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(res + 1), 1000;
    })
  );
}
awaitFun();
