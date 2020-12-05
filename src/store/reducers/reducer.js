import {ADD_COUNTER, DECREASE_COUNTER} from '../constants/actionTypes';

const initialState = {
  count: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_COUNTER:
      return {
        count: state.count + 1,
      };
    case DECREASE_COUNTER:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
