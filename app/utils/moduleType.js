let typeCache = {};

function type(label = '') {
  if (typeCache[label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }
  typeCache[label] = true;
  return label;
}

const defaultModuleName = "real-estates-app";

export function moduleType(reducerName, moduleName = defaultModuleName) {
  if (!reducerName) {
    throw new Error(`reducerName must be defined`);
  }
  return function (actionType) {
    return type(`${moduleName}/${reducerName}/${actionType}`);
  };
}
