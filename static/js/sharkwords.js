const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const WORDS = [
  "strawberry",
  "orange",
  "apple",
  "banana",
  "pineapple",
  "kiwi",
  "peach",
  "pecan",
  "eggplant",
  "durian",
  "peanut",
  "chocolate",
];

const wordContainer = document.getElementById("word-container");
const letterButtons = document.getElementById("letter-buttons");

const numWrong = 0;

/**
 * Create a div for each letter in word.
 * Then, append each div to the wordContainer.
 */
const createDivsForChars = (word) => {
  let letterDivs = [];

  for (const letter of word) {
    const letterDiv = document.createElement("div");
    letterDiv.className = `letter-box ${letter}`;
    letterDivs.push(letterDiv);
  }

  for (const div of letterDivs) {
    wordContainer.append(div);
  }
};

/**
 * Generate a button for each letter in the alphabet
 * and append to the letterButtons section.
 */
const generateLetterButtons = () => {
  for (const letter of ALPHABET) {
    letterButtons.insertAdjacentHTML("beforeend", `<button>${letter}</button>`);
  }
};

/**
 * Set the `disabled` property of `buttonEl` to true.
 * @param {*} buttonEl is an `HTMLElement` object
 */
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

/**
 * This function should return `true` if `letter` is in the word
 */
const isLetterInWord = (letter, word) => {
  if (word.includes(letter)) {
    return true;
  }
  return false;
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = "husband";

  createDivsForChars(word);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
