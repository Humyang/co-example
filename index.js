import co from 'co'

co(function *(){
  console.log('yield any promise')
  var result = yield Promise.resolve(true);
  console.log(result)
})

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log('resolve multiple promises in parallel')
  console.log(res);
  // => [1, 2, 3]
})

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error('errors can be try/catched');
    console.error(err.message); // "boom"
 }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}

co(function* () {
  var res = yield [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];
  console.log('Arrays')
  console.log(res); // => [1, 2, 3]
})

co(function* () {
  var res = yield {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  };
  console.log('Objects')
  console.log(res); // => { 1: 1, 2: 2 }
})


co(function* (){

})
