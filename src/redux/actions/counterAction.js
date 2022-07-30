import { DECREASE_COUNT, INCREASE_COUNT } from "../types";

export const Fincrease = () => {
  return {
    type: INCREASE_COUNT,
  };
};
export const Fdecrease = () => {
  return {
    type: DECREASE_COUNT,
  };
};
