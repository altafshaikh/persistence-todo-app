// https://freshman.tech/todo-list/
// https://linguinecode.com/post/validate-sanitize-user-input-javascript

/* <script>alert(document.cookie)</script> */

import { formSubmission } from "./helper/formSubmission.js";
import { deleteCheck } from "./helper/deleteCheck.js";

window.onload = () => {
  document.forms.taskList.addEventListener("submit", formSubmission);
  document.getElementById("todo-list").addEventListener("click", deleteCheck);
};
