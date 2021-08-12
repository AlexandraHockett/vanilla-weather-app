function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = days[date.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let hours = date.getHours();
  if (hours < 10) {
    minutes = "0" + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${weekDay}/${month} ${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("h2");
  let cityElement = document.querySelector("h1");
  let feelsLikeElement = Math.round(response.data.main.feels_like);
  let feelsElement = document.querySelector("#feelsLike");
  let descriptionElement = document.querySelector("#description");
  let currentMaxElement = document.querySelector("#currentMax");
  let currentMinElement = document.querySelector("#currentMin");
  let humidityElement = document.querySelector("#humidity");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  feelsElement.innerHTML = `${feelsLikeElement}º`;
  descriptionElement.innerHTML = response.data.weather[0].description;
  currentMaxElement.innerHTML = Math.round(response.data.main.temp_max);
  currentMinElement.innerHTML = Math.round(response.data.main.temp_min);
  humidityElement.innerHTML = response.data.main.humidity;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "06fbd7d55cead2045835eef5076a763f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
