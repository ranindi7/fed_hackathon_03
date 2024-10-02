let randomNumber = Math.floor(Math.random() * 20) + 1;

    function checkGuess() {
      let guess = parseInt(document.getElementById("guessInput").value);

      if (guess === randomNumber) {
        document.getElementById("result-message").innerHTML = "Correct!";
      } else {
        document.getElementById("result-message").innerHTML = "Wrong, it was " + randomNumber;
      }
    }