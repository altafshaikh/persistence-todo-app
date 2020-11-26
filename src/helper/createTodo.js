import { taskConstructor } from "./taskConstructor.js";
import { storeTodo, getStoredTodo } from "../taskData.js";
import { inputValidation } from "./inputValidation.js";
import { renderTodo } from "./renderTodo.js";

export const createTodo = (text) => {
  //validation
  if (inputValidation(text)) {
    //create task
    const todoObj = new taskConstructor(text);
    renderTodo(todoObj);
    //store the task
    const StoredTodos = getStoredTodo();
    StoredTodos.push(todoObj);
    storeTodo(StoredTodos);
  }
};
