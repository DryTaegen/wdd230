const requestURL = "https://drytaegen.github.io/wdd230/finalProject/data/temples.json";
const templeCarousel = document.querySelector("#templeCarousel")


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temples'];
    temple.forEach(addTemple)
    

    function addTemple(business) {
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
    
        for (let i =0; i < service.length; i++) {
            item = document.createElement(li);
            item.textContent = service[i];
            service.appendChild(item)
        }
        for (let i =0; i <  templeClosure.length; i++) {
            item = document.createElement(li);
            item.textContent = templeClosure[i];
            service.appendChild(item)
        }

        address.textContent = temple.address;
        history.textContent = temple.history;
        ordinanceSchedule = temple.history;
        link.setAttribute("href", temple.link);
        link.textContent = `Church of jesus Christ ${temple.name}`;
        phone.textContent = temple.phone;
        name.textContent = temple.name;
        image.setAttribute('src', temple.Image);
        image.setAttribute('alt',`photo of the ${temple.name}`);

        templeInfo.appendChild(service);
        templeInfo.appendChild(history);
        templeInfo.appendChild(ordinanceSchedule);
        templeInfo.appendChild(templeClosure);
        templeInfo.appendChild(link);
        templeInfo.appendChild(address);
        templeInfo.appendChild(phone);
        templeInfo.appendChild(website);
      
        carousel.appendChild(name);
        carousel.appendChild(image);
        carousel.appendChild(address);
        carousel.appendChild(phone);
        carousel.appendChild(website);
        carousel.setAttribute("templeCarousel");
      
        templeCarousel.appendChild(card);
    }

  
});
