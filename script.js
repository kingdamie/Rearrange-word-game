 // List of valid words in lowercase
  var validWords = [
    "if",
    "in",
    "is",
    "id",
    "sir",
    "sin",
    "end",
    "fin",
    "die",
    "rid",
    "fid",
    "fie",
    "den",
    "send",
    "rend",
    "rids",
    "ride",
    "reds",
    "nerd",
    "side",
    "ends",
    "fins",
    "dies",
    "rise",
    "find",
    "fire",
    "sire",
    "dens",
    "ref",
    "rife",
  ];

  // Array to store correct words entered by the user for valid words
  var correctWordsEntered = [];

  // Bonus words array
  var bonus = [
    "de",
    "re",
    "ed",
    "es",
    "er",
    "en",
    "si",
    "sen",
    "efs",
    "dis",
    "rein",
    "dire",
    "ire",
    "ids",
    "defi",
    "firs",
    "ins",
    
  ];

  // Array to store correct words entered by the user for bonus words
  var correctBonusWordsEntered = [];

  function updateWordCount() {
    // Display the number of valid words and remaining count
    document.getElementById("wordCount").innerHTML =
      "Valid Words: " +
      validWords.length +
      " Remaining: " +
      (validWords.length - correctWordsEntered.length);

    // Display the number of bonus words and remaining count
    document.getElementById("bonusWordCount").innerHTML =
      "Bonus Words: " +
      bonus.length +
      " Remaining: " +
      (bonus.length - correctBonusWordsEntered.length);
  }

  function checkRearrangedWord() {
    // Get user input for the rearranged word and convert it to lowercase
    var rearrangedWord = document
      .getElementById("rearrangedWordInput")
      .value.toLowerCase();

    // Check if the user's input is in the list of valid words (case insensitive)
    if (validWords.includes(rearrangedWord.trim())) {
      if (correctWordsEntered.includes(rearrangedWord)) {
        // If the word has already been picked, display a message
        document.getElementById("result").innerHTML =
          "You have already picked this word!";
      } else {
        // Otherwise, it's correct
        document.getElementById("result").innerHTML = "Correct!";

        // Add the correct word to the list
        correctWordsEntered.push(rearrangedWord);

        // Update the list of correct words in the HTML
        var correctWordsList = document.getElementById("correctWordsList");
        var listItem = document.createElement("li");
        listItem.textContent = rearrangedWord;
        correctWordsList.appendChild(listItem);

        // Update the word count
        updateWordCount();

        // Check if all valid words have been entered
        if (correctWordsEntered.length === validWords.length) {
          alert("Congratulations! You have guessed all the valid words.");
        }
      }
    } else if (bonus.includes(rearrangedWord.trim())) {
      if (correctBonusWordsEntered.includes(rearrangedWord)) {
        // If the bonus word has already been picked, display a message
        document.getElementById("result").innerHTML =
          "You have already picked this bonus word!";
      } else {
        // Otherwise, it's correct for a bonus word
        document.getElementById("result").innerHTML = "Correct for Bonus!";

        // Add the correct bonus word to the list
        correctBonusWordsEntered.push(rearrangedWord);

        // Update the list of correct bonus words in the HTML
        var correctBonusWordsList = document.getElementById("correctBonusWordsList");
        var bonusListItem = document.createElement("li");
        bonusListItem.textContent = rearrangedWord;
        correctBonusWordsList.appendChild(bonusListItem);

        // Update the bonus word count
        updateWordCount();

        // Check if all bonus words have been entered
        if (correctBonusWordsEntered.length === bonus.length) {
          alert("Congratulations! You have guessed all the bonus words.");
        }
      }
    } else {
      document.getElementById("result").innerHTML = "Incorrect!";
    }
  }

  // Initialize the word count
  updateWordCount();