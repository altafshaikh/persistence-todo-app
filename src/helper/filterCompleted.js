import { getStoredTodo } from "../taskData.js";
import { renderTodo } from "./renderTodo.js";

export const filterCompleted = () => {
  const todos = getStoredTodo();
  const completedTodos = todos.filter((todo) => {
    return todo.completed == true;
  });
  renderTodo(completedTodos);
};
