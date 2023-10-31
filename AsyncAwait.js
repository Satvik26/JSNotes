console.log("I am in async await");

// if we add  async to a function then it will return a promise

// we can

async function func() {
  console.log("Inside function");
  const response = await fetch("https://api.github.com/users");

  console.log("before response");

  const users = await response.json();
  console.log("users resolved");
  return users;
}
console.log("before calling func");
let a = func();
console.log("after calling func");
console.log(a);
a.then((data) => console.log(data));
console.log("last line of this JS file");

//for normal function this is the flow for output
// I am in async await
// AsyncAwait.js:10 before calling func
// AsyncAwait.js:7 Inside function
// AsyncAwait.js:12 after calling func
// AsyncAwait.js:13 harry
// AsyncAwait.js:14 last line of this JS file

//after adding async :
// I am in async await
// AsyncAwait.js:10 before calling func
// AsyncAwait.js:7 Inside function
// AsyncAwait.js:12 after calling func
// AsyncAwait.js:13 Promise {<fulfilled>: "harry"}
// AsyncAwait.js:14 last line of this JS file

// AsyncAwait.js:1 I am in async await
// AsyncAwait.js:19 before calling func
// AsyncAwait.js:10 Inside function
// AsyncAwait.js:21 after calling func
// AsyncAwait.js:22 Promise {<pending>}
// AsyncAwait.js:24 last line of this JS file
// AsyncAwait.js:13 before response
// AsyncAwait.js:16 users resolved
// AsyncAwait.js:23 (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
