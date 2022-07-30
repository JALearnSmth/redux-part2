import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { Fincrease, Fdecrease } from "../redux/actions/counterAction";
const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(Fincrease())}>+</button>
      <button onClick={() => dispatch(Fdecrease())}>-</button>
    </div>
  );
};

export default Buttons;
