import { moduleType } from "../../../utils/moduleType";
import { NAME } from "./reducer";

const type = moduleType(NAME);

const INCREMENT_COUNTER = type("INCREMENT_COUNTER");

const incrementCounter = () => {
  return {type: INCREMENT_COUNTER};
};

export {
  INCREMENT_COUNTER,

  incrementCounter,
}
