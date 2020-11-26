import { deleteTodoStorage } from "./deleteTodoStorage.js";

export const deleteCheck = (event) => {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    const id = todo.id;
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    deleteTodoStorage(id);
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};
