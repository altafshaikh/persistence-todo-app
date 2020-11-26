import { taskConstructor } from "./taskConstructor.js";
import { Task } from "../components/task.js";
import { TodoItems } from "../taskData.js";
import { inputValidation } from "./inputValidation.js";

export const addTodo = (text) => {
  //validation
  if (inputValidation(text)) {
    //create task
    const taskObj = new taskConstructor(text);
    //get markup
    const taskMarkup = Task(taskObj);
    //store the task
    TodoItems.push(taskObj);
    //render the task on html dom
    document.getElementById("todo-list").appendChild(taskMarkup);
  }
};
