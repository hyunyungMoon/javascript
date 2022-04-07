const API_KEY = "8144c0630ef6dc168c692bb8e3b9ef09";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherContainer = document.querySelector("#weather");
      const weather = weatherContainer.querySelector("span:first-child");
      const city = weatherContainer.querySelector("span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;      
    });
}


function onGeoError(){
  alert("cant find u");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
//need two argument function. first one is callbacked when getCurrentPosition is succedded, second one is callbacked when failed.