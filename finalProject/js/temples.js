const requestURL = "https://drytaegen.github.io/wdd230/finalProject/data/temples.json";
const templeCarousel = document.querySelector("#templeCarousel")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temples'];
    temple.forEach(addTemple)
    

    function addTemple(temple) {
        let carousel = document.createElement("div");
        let templeInfo = document.createElement("div");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let service = document.createElement("ul");
        let history = document.createElement("p");
        let ordinanceSchedule = document.createElement("p");
        let link = document.createElement("a");
        let templeClosure = document.createElement("ul");
        let name = document.createElement("h2");  


        for(let i =0; i <  temple.services.length; ++i) {
            let item = document.createElement(li);
            item.textContent = temple.services[i];
            service.appendChild(item)
        }
        for (let i =0; i <  temple.templeClosure.length; ++i) {
            let item = document.createElement(li);
            item.textContent = temple.templeClosure[i];
            service.appendChild(item)
        }


        address.textContent = temple.address;
        history.textContent = temple.history;
        ordinanceSchedule.textContent = temple.ordinanceSchedule;
        link.setAttribute("href", temple.link);
        link.textContent = `» Website: Church of jesus Christ ${temple.Name}`;
        phone.textContent = temple.phone;
        name.textContent = temple.Name;
        image.setAttribute('src', temple.Image);
        image.setAttribute('alt',`photo of the ${temple.Name}`);


        templeInfo.appendChild(service);
        templeInfo.appendChild(history);
        templeInfo.appendChild(ordinanceSchedule);
        templeInfo.appendChild(templeClosure);
        templeInfo.appendChild(link);
        templeInfo.appendChild(address);
        templeInfo.appendChild(phone);
      
        carousel.appendChild(name);
        carousel.appendChild(image);
        carousel.appendChild(templeInfo);
        carousel.classList.add("carousel");
        carousel.classList.add("hidden");
        carousel.classList.add(`${temple.id}`);
        if (carousel.classList.contains("oakland")) {
          carousel.classList.remove("hidden");
        }
      
        templeCarousel.appendChild(carousel);
    }

  
});


button1.addEventListener("click", makeVisible1);
button2.addEventListener("click", makeVisible2);
button3.addEventListener("click", makeVisible3);
button4.addEventListener("click", makeVisible4);

function makeVisible1() {
  var toHide = document.querySelectorAll(".carousel");
  for(let i =0; i <  toHide.length; ++i){ 
    toHide[i].classList.add("hidden")
  }
  document.querySelector(".winterQuarters").classList.remove("hidden");
  
}

function makeVisible2() {
  var toHide = document.querySelectorAll(".carousel");
  for(let i =0; i <  toHide.length; ++i) {
    toHide[i].classList.add("hidden")
  }
    document.querySelector(".oakland").classList.remove("hidden");
  
}

function makeVisible3() {
  var toHide = document.querySelectorAll(".carousel");
  for(let i =0; i <  toHide.length; ++i){
    toHide[i].classList.add("hidden")
  }
  document.querySelector(".calgary").classList.remove("hidden");
  
}

function makeVisible4() {
  var toHide = document.querySelectorAll(".carousel");
  console.log(toHide)
  for(let i = 0; i <  toHide.length; ++i){
    console.log(toHide[i])
    toHide[i].classList.add("hidden")
  }
  document.querySelector(".nauvoo").classList.remove("hidden");
  
}