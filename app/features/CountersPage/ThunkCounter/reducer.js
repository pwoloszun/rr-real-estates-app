import {
  COUNTER_SUCCESSFULLY_DECREMENTED,
  COUNTER_SUCCESSFULLY_INCREMENTED,
  COUNTER_VALUE_SUCCESSFULLY_FETCHED,
  FETCH_COUNTER_VALUE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './actions';

const NAME = "thunkCounter";

const initialState = {
  isLoading: false,
  value: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTER_VALUE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case COUNTER_VALUE_SUCCESSFULLY_FETCHED: {
      return {
        isLoading: false,
        value: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;

export {
  NAME
}
