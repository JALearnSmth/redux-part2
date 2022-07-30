import { ADD_TODO, DELETE_TODO } from "../types";

export const _F_addTodo = (list, todo) => {
  return {
    type: ADD_TODO,
    id: list.length,
    todo: todo,
  };
};
export const _F_deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};
