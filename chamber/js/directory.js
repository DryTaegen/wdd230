const requestURL = "https://drytaegen.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector('.cardsDiv');
const switcher = document.querySelector("#changer");
let switched = document.querySelector("#switched");


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['companies'];
    businesses.forEach(displayBusinesses);
  
});

switcher.addEventListener("click",classChange())

function classChange() {
    if (switched.classList.contains("cardsDiv")) {
      switcher.classList.add("listDiv") 
      switcher.classList.remove("cardsDiv")
    }else if (switched.classList.contains("listDiv")) {
      switcher.classList.add("cardsDiv") 
      switcher.classList.some("listDiv")
    }
  }



function displayBusinesses(business) {
    let card = document.createElement("div");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
  
    address.textContent = business.address;
    phone.textContent = business.phone;

    website.setAttribute("href", business.website);
    website.textContent = (business.website);
    

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt',`Logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');
  
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.setAttribute("class","bCard")
  
    cards.appendChild(card);
}