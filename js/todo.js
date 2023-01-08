const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //toDos라는 array를 만드는 것, const가 아닌let을 사용함으로써 업데이트 가능

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify은 string으로 만들어줌
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //console.log("event.target.parentElement.innerText");
  //path룰 이용해서 위치 확인 parentNode은 누가 button의 부모인가
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //내가 클릭한 li.id와 다른 toDo는 남겨두고 싶다.
  saveToDos();
}
//parseInt 문자열을 숫자로 바꿔줌
//console.log(typeof li.id) 는 string 근데 id는 number이므로
// toDo.id !== li.id 는 아무일이 일어나지 않음

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //li안에 id생성
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li안에 span 속성을 추가함
  li.appendChild(button); //li안에 button속성을 추가함
  // console.log(li);
  toDoList.appendChild(li); //html안에 넣어줌
}
// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   li.appendChild(span);
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input값을 새로운 변수에 저장,input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; //input값을 비워줌
  // console.log(newTodo, toDoInput.value); // toDoInpu값이 비워지더라도 nweTodo에는 영향을 끼치지 않음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); //newTodo값을 paintToDO함수에 사용, 화면에 todo를 보여줌
  saveToDos(); //localStorage에 집어넣는 것
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item)
// }
// if (saveToDos) {
//   const parsedToDos = JSON.parse(saveToDos); //여기서는 배열로 이루어져 있는 string
//   parsedToDos.forEach(sayHello);
// }

const savedToDos = localStorage.getItem(TODOS_KEY); //여기서는 그냥 string

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); //여기서는 배열로 이루어져 있는 string
  toDos = parsedToDos; //toDos array를 가지고 와서 toDos array에 복원
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
//JSON.parse -->js가 이해할수 있는 살아있는 array로만듦
//forEach는 item에 각각을 실행시킴 위에 function을 간단하게 작성할 수 있음
