import { ADD_TODO, DELETE_TODO } from "../types";

const initial_state = [];
const todoReducer = (state = initial_state, payload) => {
  switch (payload.type) {
    case ADD_TODO:
      const { id, todo } = payload;
      return [...state, { id, todo }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);
    default:
      return state;
  }
};
export default todoReducer;
