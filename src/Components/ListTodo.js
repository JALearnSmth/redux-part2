import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { _F_deleteTodo } from "../redux/actions/todoAction";

const ListTodo = () => {
  const { todoReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const _li_Style = {
    fontSize: "24px",
    color: "#330330",
    listStyle: "none",
    marginRight: "20px",
  };
  const _ul_Style = {
    padding: 0,
    margin: 0,
  };
  return (
    <div className="mt-3">
      <h3 className="text-center">Your Todos is here . . .</h3>
      <hr className="col-5" />
      {todoReducer.map((todo) => (
        <div key={todo.id} className="w-100 mt-4 d-flex justify-content-center">
          <ul style={_ul_Style}>
            <div className="d-flex align-items-center">
              <li style={_li_Style}>{todo.todo}</li>
              <button
                onClick={() => dispatch(_F_deleteTodo(todo.id))}
                className="btn btn-warning "
              >
                X
              </button>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
