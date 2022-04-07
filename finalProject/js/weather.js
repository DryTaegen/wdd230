const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?&lat=37.8102&lon=-122.1996&units=imperial&appid=a8b173af1b1bae252cc423378ba8b20a';
const alertApi= "https://api.weather.gov"

const onecallWeather = 'https://api.openweathermap.org/data/2.5/onecall?&lat=37.8102&lon=-122.1996&units=imperial&appid=a8b173af1b1bae252cc423378ba8b20a';

fetch(weatherApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.createElement("p");
    let condition = document.createElement("p");
    let humidity =document.createElement("p");
    let tempHead =document.createElement("h4")
    let humidHead =document.createElement("h4")
    let conditionHead =document.createElement("h4")
    tempHead.textContent = "Today's temperature";
    humidHead.textContent = "Today's humidity";
    conditionHead.textContent = "Today's condition";
    temp.textContent = jsObject.main.temp + " °F";
    condition.textContent = jsObject.weather[0].description;
    humidity.textContent = jsObject.main.humidity+ "%";
    console.log(temp.textContent, condition.textContent, humidity.textContent)
    document.querySelector("#todayData").appendChild(tempHead)
    document.querySelector("#todayData").appendChild(temp)
    document.querySelector("#todayData").appendChild(humidHead)
    document.querySelector("#todayData").appendChild(humidity)
    document.querySelector("#todayData").appendChild(conditionHead)
    document.querySelector("#todayData").appendChild(condition)
  }
);

fetch(onecallWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    let threeDay = document.createElement("div");
    for (let i =0; i <  3; ++i){
      let temp = document.createElement("p");
      let day = document.createElement("h4");
      let oneDay = document.createElement("div");
      console.log(jsObject.daily[i].temp.day);
      temp.textContent = jsObject.daily[i].temp.day + " °F";
      if (i == 0){
        day.textContent = "Tomorrow"
      }else if (i ==1){
        day.textContent = "day after"
      }else if (i == 2){
        day.textContent = "in three days"
      }

      oneDay.appendChild(day);
      oneDay.appendChild(temp);
      threeDay.appendChild(oneDay);
      document.querySelector("#forecast").appendChild(threeDay);
    }
    // const temp = jsObject.main.temp;
    // document.querySelector('#temp').textContent = temp;
  }
);

fetch(alertApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    if (jsObject.status != "OK") {
      document.querySelector("#weatherAlert").style.display = "block";
    }
  }
);