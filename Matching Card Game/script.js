// These are all the symbols that the game is going to use
const symbols = ['🍎', '🍌', '🍇', '🍓', '🍍', '🍉', '🍒', '🥝'];
let cards = [];
let firstCard = null, secondCard = null;
let lockBoard = false;

/* 
    Initialize the game board by shuffling the cards, clearing the board, 
    and creating new card elements.
*/
function initGame() {
    // Duplicate the symbols array and shuffle it
    cards = [...symbols, ...symbols];
    shuffleArray(cards);

    // Clear the game board
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    // Create card elements for each symbol
    cards.forEach(symbol => {
        const cardElement = createCard(symbol);
        gameBoard.appendChild(cardElement);
    });

    // Reset the board state
    resetBoard();

    // Restart button functionality
    document.getElementById('restart-btn').addEventListener('click', initGame);
}

/*
    Create a card element with the specified symbol and add the event listener for flipping.
*/
function createCard(symbol) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-symbol', symbol);
    
    // Add click event listener to flip the card
    card.addEventListener('click', () => flipCard(card));

    return card;
}

/*
    Handle the logic for flipping a card and checking for a match.
*/
function flipCard(card) {
    if (lockBoard || card === firstCard) return;

    // Display the symbol and flip the card
    card.classList.add('flipped');
    card.textContent = card.getAttribute('data-symbol');

    if (!firstCard) {
        firstCard = card; // This is the first card picked
    } else {
        secondCard = card; // This is the second card picked
        checkForMatch(); // Check if the two cards match
    }
}

/*
    Check if the two flipped cards match or not.
*/
function checkForMatch() {
    const isMatch = firstCard.getAttribute('data-symbol') === secondCard.getAttribute('data-symbol');

    if (isMatch) {
        disableCards(); // If they match, disable further interaction
    } else {
        unflipCards(); // If they don't match, flip them back after a delay
    }
}

/* 
    Disable matched cards to prevent further interaction.
*/
function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

initGame();
