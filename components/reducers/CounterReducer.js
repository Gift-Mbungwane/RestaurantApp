import { DECREMENT, INCREMENT, RESET } from "../actions/CounterAction";

const initialState = {
  count: 0,
};

export default countReducer = (state = initialState, action) => {
  //console.log(action);
  //return state;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};