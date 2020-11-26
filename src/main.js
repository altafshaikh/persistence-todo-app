// https://freshman.tech/todo-list/
// https://linguinecode.com/post/validate-sanitize-user-input-javascript

/* <script>alert(document.cookie)</script> */

import { formSubmission } from "./helper/formSubmission.js";
import { deleteCheck } from "./helper/deleteCheck.js";
import { storeTodo, getStoredTodo } from "./taskData.js";
import { renderTodo } from "./helper/renderTodo.js";

window.onload = () => {
  document.forms.taskList.addEventListener("submit", formSubmission);
  document.getElementById("todo-list").addEventListener("click", deleteCheck);
};

document.addEventListener("DOMContentLoaded", () => {
  const todos = getStoredTodo();
  if (todos) {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  } else {
    storeTodo([]);
  }
});
