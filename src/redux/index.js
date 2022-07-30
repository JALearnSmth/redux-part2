import { createStore, combineReducers } from "redux";
import CounterReducer from "./reducers/countReducer";
import todoReducer from "./reducers/todoReducer";
const reducers = combineReducers({
  counter: CounterReducer,
  todoReducer: todoReducer,
});
const store = createStore(reducers);
export default store;
