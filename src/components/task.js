export const Task = (taskObj) => {
  const li = document.createElement("li");
  li.id = taskObj.taskID;
  li.textContent = taskObj.description;

  return li;
};
