import { TodoItems, storeTodo } from "../taskData.js";

export const deleteTodoStorage = (id) => {
  const updatedTodoList = TodoItems.splice(
    TodoItems.findIndex((todo) => {
      return todo.taskID == id;
    }),
    1
  );
  storeTodo(updatedTodoList);
};
