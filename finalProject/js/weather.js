const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&lat=37.8102&lon=-122.1996&units=imperial&appid=a8b173af1b1bae252cc423378ba8b20a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // const temp = jsObject.main.temp;
    // document.querySelector('#temp').textContent = temp;
  }
);