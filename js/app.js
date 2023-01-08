// const loginFrom = document.getElementById("login-form");
// const loginInput = loginFrom.querySelector("input");
// const loginButton = loginFrom.querySelector("button");
//밑에는 위에랑 같은거
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
//밑에 조건문은 html에서 할 수 있으므로 html활용하는 게 좋음
// function handleLoginBtnClick() {
//   // console.log(loginInput.value);
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name");
//   } else if (username.length > 15) {
//     alert("Your name is too long");
//   }
// }
// loginButton.addEventListener("click", handleLoginBtnClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // console.log(username);
  // greeting.innerText = "Hello" + username;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  // greeting.innerText = `Hello ${username}`; //끝에 백틱 `` string합칠때
  //greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //끝에 백틱 `` string합칠때
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}

//지금 막 벌어진 일들에 정보

//preventDefault 설명을 하기 위한 a
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   console.dir(event);
// }

// link.addEventListener("click", handleLinkClick);
