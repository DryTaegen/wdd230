const requestURL2 = "https://drytaegen.github.io/wdd230/chamber/data/data.json";
const switcher = document.querySelector("#changer");
let switched = document.querySelector(".directoryDiv");


fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['companies'];
    businesses.forEach(displayBusinesses);
  
});

switcher.addEventListener("click",classChange)

function classChange() {
  if (switched.classList.contains("cardsDiv")) {
    switched.classList.add("listDiv") 
    switched.classList.remove("cardsDiv")
  }else if (switched.classList.contains("listDiv")) {
    switched.classList.add("cardsDiv") 
    switched.classList.remove("listDiv")
  }
}

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
  
    card.appendChild(name)
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.setAttribute("class","bCard")
  
    switched.appendChild(card);
}