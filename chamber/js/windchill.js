const windChill = document.querySelector("#windChill")
var windPut = document.querySelector("#windPut")
const windspeed = document.querySelector("#windSpeed")
var tempPut = document.querySelector("#tempPut")
const submit = document.querySelector("#windSubmit")
const temperature = document.querySelector("#temp")


submit.onclick = windChange

function windChange(){
    speed = windPut.value
    temp = tempPut.value
    console.log(speed, temp)
    if (speed > 3 && temp <= 50) {
        farenheit = 35.74 +0.6215 / temp-35.75 / Math.pow(speed, 0.16)+0.4275 / temp / Math.pow(speed, 0.16)
        windChill.innerHTML = Math.round(farenheit)

    }
    temperature.innerHTML = temp
    windspeed.innerHTML = speed
}