
// const loctateURL = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={a8b173af1b1bae252cc423378ba8b20a}";
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&lat=40.6197&lon=-111.8102&units=imperial&appid=a8b173af1b1bae252cc423378ba8b20a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temp = jsObject.main.temp;
    document.querySelector('#temp').textContent = temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#figcaption').textContent = desc;

    const speed = jsObject.wind.speed;
    document.querySelector("#windSpeed").textContent = speed;

    console.log(speed, temp)
    if (speed > 3 && temp <= 50) {
        farenheit = 35.74 +0.6215 * temp - 35.75 * Math.pow(speed, 0.16)+0.4275 * temp * Math.pow(speed, 0.16)
        windChill.innerHTML = Math.round(farenheit)

    }

});