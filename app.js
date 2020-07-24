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
  todoDiv.appendChild(newTodo);

  //Completed Task Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-button');
  todoDiv.appendChild(completedButton);

  //Delete Task Button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  deleteButton.classList.add('delete-button');
  todoDiv.appendChild(deleteButton);
}