const delay = 1600;

let counterValue = 997;

function fetchCounter() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(counterValue);
    }, delay);
  });
}

function saveCounter(value) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      counterValue = value;
      resolve({
        success: true,
        error: false,
        value: counterValue
      });
    }, delay);
  });
}

export {
  fetchCounter,
  saveCounter
}
