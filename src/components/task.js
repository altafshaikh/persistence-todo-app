export const Task = (taskObj) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.id = taskObj.taskID;

  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.textContent = taskObj.description;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = "<i class='fa fa-check'></i>";

  const delBtn = document.createElement("button");
  delBtn.classList.add("trash-btn");
  delBtn.innerHTML = "<i class='fa fa-trash'></i>";

  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(delBtn);

  return div;
};
