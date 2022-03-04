const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    prophets.forEach(displayProphets);
  
});



function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement("div");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    birth.textContent = `Date of birth: ${prophet.birthdate}`;
    bPlace.textContent = `Place of birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt',``);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(bPlace);
    card.appendChild(portrait);
    card.appendChild(term);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}