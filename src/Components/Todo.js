import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _F_addTodo } from "../redux/actions/todoAction";

const Todo = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { todoReducer } = useSelector((state) => state);
  return (
    <>
      <p
        className="text-center mt-4"
        style={{ fontSize: 22, color: "#46ed00" }}
      >
        You can add to-dos with "Enter" button on the keyboard
      </p>
      <div className="d-flex justify-content-center mt-2">
        <input
          ref={inputRef}
          placeholder="type todo"
          className="form-control col-5"
          onKeyDown={(e) =>
            e.key === "Enter"
              ? dispatch(_F_addTodo(todoReducer, inputRef.current.value))
              : ""
          }
        />
        <button
          onClick={() => {
            dispatch(_F_addTodo(todoReducer, inputRef.current.value));
          }}
          className="btn btn-danger"
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default Todo;
