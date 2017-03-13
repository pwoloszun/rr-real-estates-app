function apiFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([123, 997]);
    }, 1200);
  });
}

function* fetchData() {
  let results = yield apiFetch();
  console.log("GEN fetched data:", results);
  return results;
}

function* runFetchData() {
  let generator = fetchData();
  let promise = generator.next().value;
  promise.then((data) => {
    generator.next(data);
  });
  yield* generator;
}

//TODO

export function example03() {
  let gen = runFetchData();
  console.log("qq", gen.next());
}
