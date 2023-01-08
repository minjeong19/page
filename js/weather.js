const API_KEY = "1e4d4ffbc82864a6da06988d98cfd270";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log("You live it", lat, lng);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
      // console.log(data.name, data.wather[0].main);
      console.log(data);
      console.log(data.name);
    }); //js가 대신 url 부름
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //성공함수, 실패함수

// 37.4827694 126.7496159
