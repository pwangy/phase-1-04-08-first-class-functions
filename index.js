const receivesAFunction = fn => fn()
// function receivesAFunction (fn) {
//   fn()
// }

const returnsANamedFunction = ()=> {
  return function namedFunction() {
  }
}
// function returnsANamedFunction() {
//   return function namedFunction() {}
// }

const returnsAnAnonymousFunction = () => {
  return ()=> {}
}
// function returnsAnAnonymousFunction() {
//   return function () {}
// }
