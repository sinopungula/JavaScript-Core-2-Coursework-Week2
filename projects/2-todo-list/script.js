// Each item in the list should have 2 buttons:

// - One to click when the ToDo has been completed - it will apply a line-through style to the text of the ToDo.
// - A second to delete the ToDo. This could be used to delete completed ToDos from the list, or remove ToDos that we are no longer interested in doing.

// We also want to be able to add ToDos to the list using an input field and a button. When ToDos are created this way they should be added to the list with the 2 above buttons.

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
 

 
}

// const listItem = document.getElementsByTagName('li');
// console.log('list item', listItem);
//     listItem.strikeThrough;
//     console.log('strike', listItem);
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Cook dinner"}, 
  { task: "Do the laundry"}

];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
