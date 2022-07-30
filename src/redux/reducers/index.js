import { DECREASE_COUNT, INCREASE_COUNT } from "../types";

const initial_state = 0;
const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return state + 1;
    case DECREASE_COUNT:
      return state - 1;
    default:
      return state;
  }
};
export default reducer;
