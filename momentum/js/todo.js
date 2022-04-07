const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function savetoDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function handleDeleteBtnClick(event){
  const li = event.target.parentElement;  
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savetoDos();  
}


function paintToDo(todoArg){
  const li = document.createElement("li");
  li.id = todoArg.id; 
  const span = document.createElement("span");
  span.innerText = todoArg.text;
  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", handleDeleteBtnClick);
  
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savetoDos();
}


toDoForm.addEventListener("submit", handleToDoSubmmit);


const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
  const parseTodos = JSON.parse(savedToDos);
  toDos = parseTodos;  
  parseTodos.forEach(paintToDo);    
}

