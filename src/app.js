function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("h2");
  let cityElement = document.querySelector("h1");
  let feelsLikeElement = Math.round(response.data.main.feels_like);
  let feelsElement = document.querySelector("#feelsLike");
  let descriptionElement = document.querySelector("#description");
  let currentMaxElement = document.querySelector("#currentMax");
  let currentMinElement = document.querySelector("#currentMin");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  feelsElement.innerHTML = `${feelsLikeElement}º`;
  descriptionElement.innerHTML = response.data.weather[0].description;
  currentMaxElement.innerHTML = Math.round(response.data.main.temp_max);
  currentMinElement.innerHTML = Math.round(response.data.main.temp_min);
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "06fbd7d55cead2045835eef5076a763f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
