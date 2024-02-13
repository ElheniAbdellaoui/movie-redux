import { ADD, DELETE, EDIT, FILTER } from "./actionType";

export const deleteTask = (TaskID) => {
  return {
    type: DELETE,
    payload: TaskID,
  };
};
export const add = (newtexte) => {
  return {
    type: ADD,
    payload: newtexte,
  };
};
export const edit = (newedit) => {
  return {
    type: EDIT,
    payload: newedit,
  };
};
