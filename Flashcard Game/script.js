let flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    showCard(currentIndex);
}

function showCard(index) {
    let content = document.getElementById("card-content");
    if (showingTerm) {
        content.textContent = flashcards[index].term;
    }
    else {
        content.textContent = flashcards[index].definition;
    }
}

let cardButton = document.getElementById("flashcard");
cardButton.addEventListener('click', function(){
    showCard(currentIndex);
    showingTerm = !showingTerm;
});

let nextButton = document.getElementById("next-btn");
nextButton.addEventListener('click', function(){
    if (currentIndex < flashcards.length - 1) 
        currentIndex = currentIndex + 1;
    else currentIndex = 0;
    showingTerm = true;
    showCard(currentIndex);
});

let prevButton = document.getElementById("prev-btn");
prevButton.addEventListener('click', function(){
    if (currentIndex > 0) {
        currentIndex--;
        showingTerm = true;
        showCard(currentIndex);
    }
});

let addButton = document.getElementById("add-card-btn");
addButton.addEventListener('click', function() {
    let cardterm = document.getElementById("new-term");
    let termtext = cardterm.value;
    let carddef = document.getElementById("new-definition");
    let deftext = carddef.value;
    if (termtext && deftext) {
        flashcards.push({term: termtext, definition: deftext});
        termtext = "";
        deftext = "";
    }
});


// This line will display the card when the page is refreshed
window.onload = function() {
    displayCard();
};