let counter = 0; 

function increment() {
    counter += 1;
    updateScreen();
}

function updateScreen() {
    let h2Count = document.getElementById('count');
    h2Count.innerText = "Current count: " + counter;
}

let incrementButton = document.getElementById("increement button")