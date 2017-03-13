function regularFn() {
  console.log("FN: 1st");
  console.log("FN: 2nd");
}

//TODO 1: create & run generator instance
//TODO 2: pause generator function execution

function* createMyGenerator() {
  console.log("GEN: 1st");
  console.log("GEN: 2nd");
}

export const example01 = () => {
  // regularFn();
  //TODO
  // console.log("Gen created, but NOT run: nothing logged");

  // TODO
  // console.log("before first next()");
  // console.log("before second next()");
  // console.log("before third next()");
  // console.log("before fourth next()");
};
