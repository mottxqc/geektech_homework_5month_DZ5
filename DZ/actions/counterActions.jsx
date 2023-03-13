export const ADD_NUMBER = "ADD_NUMBER";
export const SUBTRACT_NUMBER = "SUBTRACT_NUMBER";

export const addNumber = () => {
  return {
    type: ADD_NUMBER,
    payload: 5,
  };
};

export const subtractNumber = () => {
  return {
    type: SUBTRACT_NUMBER,
    payload: 5,
  };
};