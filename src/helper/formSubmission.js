import { addTodo } from "./addTodo.js";
export const formSubmission = (event) => {
  //prevent form refresh
  event.preventDefault();
  addTodo(event.target.textInput.value);
  event.target.textInput.value = "";
};
