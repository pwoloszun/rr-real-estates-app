import { moduleType } from "../../../utils/moduleType";
import { NAME } from "./reducer";
import { fetchCounter, saveCounter } from '../counterApi';

const type = moduleType(NAME);

const FETCH_COUNTER_VALUE = type("FETCH_COUNTER_VALUE");
const COUNTER_VALUE_SUCCESSFULLY_FETCHED = type("COUNTER_VALUE_SUCCESSFULLY_FETCHED");

const INCREMENT_COUNTER = type("INCREMENT_COUNTER");
const COUNTER_SUCCESSFULLY_INCREMENTED = type("COUNTER_SUCCESSFULLY_INCREMENTED");

const DECREMENT_COUNTER = type("DECREMENT_COUNTER");
const COUNTER_SUCCESSFULLY_DECREMENTED = type("COUNTER_SUCCESSFULLY_DECREMENTED");

const fetchCounterValue = () => {
  return (dispatch) => {
    dispatch({type: FETCH_COUNTER_VALUE});
    fetchCounter().then((value) => {
      const action = counterValueSuccessfullyFetched(value);
      dispatch(action);
    });
  };
};

const counterValueSuccessfullyFetched = (value) => {
  return {type: COUNTER_VALUE_SUCCESSFULLY_FETCHED, payload: value};
};

const incrementCounter = () => {
  return (dispatch, getState) => {
    //TODO
  };
};

const counterSuccessfullyIncremented = (value) => {
  return {type: COUNTER_SUCCESSFULLY_INCREMENTED, payload: value};
};

const decrementCounter = () => {
  //TODO
};

const counterSuccessfullyDecremented = (value) => {
  //TODO
};

export {
  FETCH_COUNTER_VALUE,
  COUNTER_VALUE_SUCCESSFULLY_FETCHED,
  INCREMENT_COUNTER,
  COUNTER_SUCCESSFULLY_INCREMENTED,
  DECREMENT_COUNTER,
  COUNTER_SUCCESSFULLY_DECREMENTED,

  fetchCounterValue,
  incrementCounter,
  decrementCounter,
}
