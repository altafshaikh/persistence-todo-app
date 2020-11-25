import { taskConstructor } from "./taskConstructor.js";
import { Task } from "../components/task.js";
import { TodoItems } from "../taskData.js";

export const addTodo = (text) => {
  //create task
  const taskObj = new taskConstructor(text);
  //get markup
  const taskMarkup = Task(taskObj);
  //store the task
  TodoItems.push(taskObj);
  console.log(
    "🚀 ~ file: addTodo.js ~ line 12 ~ addTodo ~ TodoItems",
    TodoItems
  );

  //render the task on html dom
  document.getElementById("todoList").appendChild(taskMarkup);
};
