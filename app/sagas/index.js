function* helloSaga() {
  // console.log('Hello Sagas!');
}

const ALL_SAGAS = [
  helloSaga()
];

function* rootSaga() {
  yield ALL_SAGAS;
}

export default rootSaga;
