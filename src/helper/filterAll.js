import { getStoredTodo } from "../taskData.js";
import { renderTodo } from "./renderTodo.js";

export const filterAll = () => {
  const todos = getStoredTodo();

  document.getElementById("todo-list").textContent = "";
  todos.forEach((todo) => {
    renderTodo(todo);
  });
};
