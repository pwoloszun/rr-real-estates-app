function regularFn() {
  console.log("FN: 1st");
  console.log("FN: 2nd");
}

//TODO 1: create & run generator instance
//TODO 2: pause generator function execution

function* createMyGenerator() {
  yield;
  console.log("GEN: 1st");
  yield;
  console.log("GEN: 2nd");
}

export const example01 = () => {
  // regularFn();
  let generator = createMyGenerator();
  console.log("Gen created, but NOT run: nothing logged");

  console.log("before first next()");
  generator.next();
  console.log("before second next()");
  generator.next();
  console.log("before third next()");
  generator.next();
  console.log("before fourth next()");
  generator.next();
};
