/*
    Using reduce() for promise chaining

*/

const functions = [
    async function() { return 1; },
    async function() { return 2; },
    async function() { return 3; }
  ];
  
  // Chain the function calls in order, starting with an empty promise.
  // In the end, `res` is equivalent to
  // `Promise.resolve().then(fn1).then(fn2).then(fn3)`
  const res = await functions.
    reduce((promise, fn) => promise.then(fn), Promise.resolve());
  res; // 3