/* Date */
function dateFormat(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
    return `${day} ${hours}:${minutes}`;
  }
  
  let showDate = document.querySelector("#date");
  let time = new Date();
  showDate.innerHTML = dateFormat(time);
  
  /* City change */
  function search(event) {
    event.preventDefault();
    let cityType = document.querySelector(".city");
    let cityInput = document.querySelector("#cityinput");
    cityType.innerHTML = cityInput.value;
  }
  
  let searchCity = document.querySelector("#form");
  searchCity.addEventListener("submit", search);
  
  /*  Geolocation */
  function showPosition(response) {
    let h3 = document.querySelector(".temp");
    let temperature = Math.round(response.data.main.temp);
    h3.innerHTML = `${temperature}`;
    let h1 = document.querySelector("h1");
    console.log(response.data);
    h1.innerHTML = `${response.data.name}`;
  }
  
  function retrievePosition(position) {
    let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showPosition);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }
  
  let button = document.querySelector("button");
  button.addEventListener("click", getCurrentPosition);
  