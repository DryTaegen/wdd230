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
        let upperInfo = document.createElement("div");
        let lowerInfo = document.createElement("div");
        let serviceHead = document.createElement("h3");
        let closureHead = document.createElement("h3");
        let serviceDiv = document.createElement("div");
        let closureDiv = document.createElement("div");
        let likeDiv = document.createElement("div");
        let likeTrue = document.createElement("img");
        let likeFalse = document.createElement("img");  
        // console.log(temple)
        // console.log(temple.services)

        for(let i =0; i <  temple.services.length; ++i) {
            let item = document.createElement("li");
            item.textContent = temple.services[i];
            service.appendChild(item)
        }
        for (let i =0; i <  temple.templeClosure.length; ++i) {
            let item = document.createElement("li");
            item.textContent = temple.templeClosure[i];
            templeClosure.appendChild(item)
        }

        likeDiv.setAttribute("id", "likeDiv");

 
        likeDiv.addEventListener("click", toggleLike);

        let liked = localStorage.getItem(`liked+${temple.id}`);
        if(liked === null || liked === "false") {
          likeTrue.setAttribute("src", "images/likeTrue.jpg");
          likeTrue.setAttribute("alt","You liked this image");
          likeTrue.setAttribute("class", "hiddenLike");

          likeFalse.setAttribute("src", "images/likeFalse.jpg");
          likeFalse.setAttribute("alt","You have not liked this image");
          likeFalse.setAttribute("class", "displayLike");
        } else if (liked === "true") {
          likeTrue.setAttribute("src", "images/likeTrue.jpg");
          likeTrue.setAttribute("alt","You liked this image");
          likeTrue.setAttribute("class", "displayLike");

          likeFalse.setAttribute("src", "images/likeFalse.jpg");
          likeFalse.setAttribute("alt","You have not liked this image");
          likeFalse.setAttribute("class", "hiddenLike");
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
        image.setAttribute("class","carouselImg")
        closureHead.textContent = "Temple closures this year:"
        serviceHead.textContent = "Services offered for this temple:"


        upperInfo.appendChild(history);
        upperInfo.appendChild(ordinanceSchedule);
        upperInfo.appendChild(link);
        templeInfo.appendChild(upperInfo);
        serviceDiv.appendChild(serviceHead);
        serviceDiv.appendChild(service);
        closureDiv.appendChild(closureHead);
        closureDiv.appendChild(templeClosure);
        templeInfo.appendChild(serviceDiv);
        templeInfo.appendChild(closureDiv);
        
        lowerInfo.appendChild(address);
        lowerInfo.appendChild(phone);
        templeInfo.appendChild(lowerInfo);
        templeInfo.classList.add("templeInfo");
      
        carousel.appendChild(name);
        carousel.appendChild(image);
        likeDiv.appendChild(likeTrue);
        likeDiv.appendChild(likeFalse);
        carousel.appendChild(likeDiv);
        carousel.appendChild(templeInfo);
        carousel.classList.add("carousel");
        carousel.classList.add("hidden");
        carousel.classList.add(`${temple.id}`);

        carousel.id = temple.id;

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


function toggleLike(event) {
  let id = event.target.closest(".carousel").id;

  let toHide = document.querySelector("div.carousel:not(.hidden) .displayLike");
  let toShow = document.querySelector("div.carousel:not(.hidden) .hiddenLike");

  toShow.classList.remove("hiddenLike");
  toShow.classList.add("displayLike");
  toHide.classList.add("hiddenLike");
  toHide.classList.remove("displayLike");

  let liked = localStorage.getItem(`liked+${id}`);
  if(liked === null || liked === "false") {
    localStorage.setItem(`liked+${id}`, "true")
  } else if (liked === "true") {
    localStorage.setItem(`liked+${id}`, "false")
  }
}
