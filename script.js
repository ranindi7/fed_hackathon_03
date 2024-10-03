let randomNumber = Math.floor(Math.random() * 1000) + 1;
let numberAbove = Math.min(randomNumber + Math.floor(Math.random() * 30) + 1, 1000);
let numberBelow = Math.max(randomNumber - Math.floor(Math.random() * 30) - 1, 1);

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);

  if (guess === randomNumber) {
    document.getElementById("result-message").innerHTML = "Correct!";
  } else {
    document.getElementById("result-message").innerHTML = "Wrong, it was " + randomNumber;
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 1000) + 1;
  numberAbove = Math.min(randomNumber + Math.floor(Math.random() * 30) + 1, 1000);
  numberBelow = Math.max(randomNumber - Math.floor(Math.random() * 30) - 1, 1);

  document.getElementById("numberBelow").textContent = numberBelow;
  document.getElementById("numberAbove").textContent = numberAbove;
  document.getElementById("result-message").innerHTML = "";
  document.getElementById("guessInput").value = "";

  // Update the hidden answer
  document.getElementById("answer").textContent = randomNumber;
}

// Initial hint display and answer
document.getElementById("numberBelow").textContent = numberBelow;
document.getElementById("numberAbove").textContent = numberAbove;
document.getElementById("answer").textContent = randomNumber;