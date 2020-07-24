//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', completeTodo);
filterOption.addEventListener('click', filterTodo);


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
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add('delete-button');
  todoDiv.appendChild(deleteButton);

  //Append To Do Div to To Do List
  todoList.appendChild(todoDiv);

  //Clear To Do Input Value
  todoInput.value = "";
};


function deleteTodo(event) {
  const item = event.target;
  if (item.classList[0] === 'delete-button') {
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  };
};


function completeTodo(event) {
  const item = event.target;
  if (item.classList[0] === 'complete-button') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  };
};


function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        break;
    };
  });
};