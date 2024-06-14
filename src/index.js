function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "54a0b1t705328c1ff5aabef7485od2a3";
  let apiurl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}&units=metric";
  axios.get(apiurl).then(refreshWeather);
}
//made api call and update interface above
//apiurl will search for a city

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
//h1 name will change, no api yet
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
