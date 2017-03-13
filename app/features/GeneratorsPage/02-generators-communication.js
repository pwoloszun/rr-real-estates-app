//TODO 1: pass data from generator fun to gen instance
//TODO 2: pass data from gen instance to generator fun

function* passDataToInstance() {
  console.log("passDataToInstance: BEFORE yield");
  let myData = 123;
  yield myData;
  console.log("passDataToInstance: AFTER yield");
}

const fromGenFunToInstanceTest = () => {
  let generator = passDataToInstance();
  let res = generator.next(); // run code until first yield & receive yield data
  console.log("data from gen fun", res);
};

function* receiveDataFromInstance() {
  console.log("receiveDataFromInstance: BEFORE yield");
  let receivedData = yield;
  console.log("receiveDataFromInstance: AFTER yield, received:", receivedData);
}

const fromInstanceToGenFunTest = () => {
  let generator = receiveDataFromInstance();
  generator.next(); // run code until first yield
  generator.next({name: "Bob!!!"}); // send data to first yield & resume gen fun
};

export const example02 = () => {
  fromGenFunToInstanceTest();
  fromInstanceToGenFunTest();
};



