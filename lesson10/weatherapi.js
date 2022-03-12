const loctateURL = "http://api.openweathermap.org/geo/1.0/direct?q=Cottonwoodheights&appid=a8b173af1b1bae252cc423378ba8b20a";
fetch(loctateURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?&lat=40.6197&lon=-111.8102&units=imperial&appid=a8b173af1b1bae252cc423378ba8b20a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
});
