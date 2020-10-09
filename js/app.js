const qwerty = document.getElementById('qwerty');
const banner = document.querySelector('.header');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('ul');
const startBtn = document.querySelector('a');
let missed = 0;


//1.Create an array of pharses
const phrases = [

  {
    hint: "Which book is this?",
    phrase: 'Harry Potter and the Chamber of Secrets'
  },

  {
    hint: "Which character is this?",
    phrase: 'Harry Potter',
  },
  {
    hint: "Which book is this?",
    phrase: 'Harry Potter and the Order of the Phoenix'
  },
  {
    hint: "Which character is this?",
    phrase: 'Professor Severus Snape'
  },
  {
    hint: "Which book is this?",
    phrase: 'Harry Potter and the Goblet of Fire'
  },
  {
    hint: "Which character is this?",
    phrase: 'Hermione Granger'
  },
  {
    hint: "Which character is this?",
    phrase: 'Lucius Malfoy'
  },
];


//2. List of Functions to create
//2A. Return a random pharse from the pharse array named: const getRandomPhraseArray
const getRandomPhraseArray = (arr) => {

  //The square brackets around the Math methods get the index of the array item
  let randomArrItem = arr[Math.floor(Math.random() * arr.length)];
  return randomArrItem;
};

let randomPhraseObject = getRandomPhraseArray(phrases);



  //2B. Add the letters to of a string to the display named: const addPhraseToDisplay
  const addPhraseToDisplay = (arr) => {
    let hint = arr.hint;
    let characters = arr.phrase.split('');
  
    
    //create elements to nest in li
    function createElement(nameElement, property, value) {
      const element = document.createElement(nameElement);
      element[property] = value;
      return element;
    }
    const question = banner;
      banner.textContent = hint;
    for (let i = 0; i < characters.length; i++) {
      
      if (characters[i] !== ' ') {
        const li = document.createElement('li');
        const spanBox = createElement('span', 'className', 'box');
        const spanFront = createElement('span', 'className', 'front');
        const spanLetter = createElement('span', 'className', 'letter');
        spanBox.appendChild(spanFront);
        spanBox.appendChild(spanLetter);
        li.appendChild(spanBox);
        spanLetter.textContent = characters[i];
        ul.appendChild(li);
  
        
      } else {
        const li = document.createElement('li');
        ul.appendChild(li); 
        li.className = 'space';
      }
  
    }
  
  
  
  };
  
  
  
  
 

 






//Start Game Button Listener
startBtn.addEventListener('click', (evt) => {
  
  const overlay = document.getElementById('overlay');
    
   overlay.style.display = "none";
   addPhraseToDisplay(randomPhraseObject);
    

});





 //2C. Check if a letter is in the phrase named: const checkletter
 //2D. Check if the game has been won or lost
//2E. Attach an event listner to the START BUTTON which is startButton.addEventListener('click', () => {}); 
//2F. Listen for the onscreen keyboard to be clicked qwerty.addEventListener('click', () => {});