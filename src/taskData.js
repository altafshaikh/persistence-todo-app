export const TodoItems = [];

//store in local storage
export const storeTodo = (itemsList) => {
  localStorage.setItem("todoItems", JSON.stringify(itemsList));
};
