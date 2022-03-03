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
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let term = document.createElement("p");
    let birth = document.createElement("p");
    let bPlace = document.createElement("P");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.textContent = `Date of birth: ${prophet.birthdate}`;
    bPlace.textContent = `Place of birth: ${prophet.birthplace}`;
    if (prophet.death == null) {
        term.textContent = `Is currently serving and has served for ${prophet.length} years.`

    }else {
    term.textContent = `Served for ${prophet.length} year(s) until their death: ${prophet.death}.`
    }
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt',`Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
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