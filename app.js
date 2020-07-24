//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event) {
  event.preventDefault();
  //To Do Div for the item and buttons
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //To Do Item
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  console.log(todoInput.value);
  todoDiv.appendChild(newTodo);
}