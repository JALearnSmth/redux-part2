import React from "react";
import { useSelector } from "react-redux/es/exports";

const Count = () => {
  const { counter } = useSelector((state) => state);
  return <div>{counter}</div>;
};

export default Count;
