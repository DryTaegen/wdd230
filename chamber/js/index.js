const currentDate = new Date();
document.querySelector("#headerDate").textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(currentDate);

document.querySelectorAll(".copyWright").textContent = currentDate.getFullYear();

document.getElementById("lastTouch").textContent = document.lastModified;




function toggleMenu(){
    document.getElementById("navbar").classList.toggle("extendedBar");
    document.getElementById("smallMenu").classList.toggle("extend");
}
const toggle = document.getElementById("smallMenu");


function setSmall(){
    document.getElementById("navbar").classList.remove("extendedBar");
    document.getElementById("smallMenu").classList.remove("extend");
}

function setWide(){
    document.getElementById("navbar").classList.add("extendedBar");
    document.getElementById("smallMenu").classList.add("extend");
}
toggle.onclick = toggleMenu;

window.onresize = () => {
    if (window.innerWidth > 760) setWide();
    else setSmall();
}

function displayBanner() {
    const banner= document.getElementById("datedBanner");
    banner.classList.remove("noDateBanner");
    banner.classList.add("dateBanner");
}

// days since last visit



today = currentDate.getDay();
console.log(today)
if(today == 1) {
    displayBanner();
}
else if(today == 2) {
    displayBanner();
}
else {
    const banner= document.getElementById("datedBanner");
    banner.classList.remove("dateBanner");
    banner.classList.add("noDateBanner");
}







const requestURL = "https://drytaegen.github.io/wdd230/chamber/data/data.json";
const spotlightDiv = document.querySelector("#spotlightCard")


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['companies'];
    let loop = true;
    
    // Referenced for help: https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json
    while (loop === true) {
        console.log("start loop")
        let random1 = businesses[Math.floor(Math.random() * businesses.length)];
        let random2 = businesses[Math.floor(Math.random() * businesses.length)];
        if (random1.membership !== "Bronze" && random2.membership !== "Bronze") {
            console.log("not bronze")
            if (random1 == random2) {
                console.log("are equal")
            } else if (random1 != random2){
                console.log(random1)
                displayBusinesses(random1);
                console.log(random2)
                displayBusinesses(random2);
                loop = false;
                console.log("happy path")
            }
        }
        else {
            console.log("unhappy path")
        }      
    }

  
});


function displayBusinesses(business) {
    let card = document.createElement("div");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let name = document.createElement("h2");
  
    address.textContent = business.address;
    phone.textContent = business.phone;
    name.textContent = business.name;

    website.setAttribute("href", business.website);
    website.textContent = (business.website);
    

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt',`Logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');


    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.setAttribute("class","spotlight")
  
    spotlightDiv.appendChild(card);
}






const days = document.querySelector("#daysPassed");
let todayDate = Number(Date.now())
let lastDate = Number(window.localStorage.getItem("visitStamp"));
console.log(todayDate)
console.log(lastDate)
let change = 0
if (lastDate == 0) {
    change = 0;
} else {
    change = Math.round((todayDate - lastDate) / (86400000)); //ms to days conversion
}
localStorage.setItem("visitStamp", todayDate);
days.textContent = (change);

document.querySelector("#todayDate").value = currentDate;


