const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const toDos = [];


function savetoDos(){
  localStorage.setItem("todos", toDos);
}


function handleDeleteBtnClick(event){
  const li = event.target.parentElement;
  li.remove();
}


function paintToDo(todoArg){
  const li = document.createElement("li"); 
  const span = document.createElement("span");
  span.innerText = todoArg;
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
  toDos.push(newTodo);
  paintToDo(newTodo);
  savetoDos();

}


toDoForm.addEventListener("submit", handleToDoSubmmit);