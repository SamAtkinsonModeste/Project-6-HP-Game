const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn_reset = document.querySelector('.btn_reset');
let missed = 0;

//1.Create an array of pharses
const phrases = [
    
    {
        hint: "Which book is this?",
        pharse: ['H','a','r','r','y','','P','o','t','t','e','r','','a','n','d','','t','h','e','','C','h','a','m','b','e','r','','o','f','','S','e','c','r','e','t','s']
      },

      {
        hint: "Which character is this?",
        pharse: ['H','a','r','r','y','','P','o','t','t','e','r']
      },
      {
        hint: "Which book is this?",
        pharse: ['H','a','r','r','y','','P','o','t','t','e','r','','a','n','d','','t','h','e','','O','r','d','e','r','','o','f','','t','h','e','','P','h','o','e','n','i','x']
      },
      {
        hint: "Which character is this?",
        pharse: ['P','r','o','f','e','s','s','o','r','','S','e','v','e','r','u','s','','S','n','a','p','e']
      },
      {
        hint:  "Which book is this?",
        pharse: ['H','a','r','r','y','','P','o','t','t','e','r','','a','n','d','','t','h','e','','G','o','b','l','e','t','','o','f','','F','i','r','e']
      },
      {
        hint:"Which character is this?",
        pharse: ['H','e','r','m','i','o','n','e','','G','r','a','n','g','e','r']
      },
      {
        hint:  "Which character is this?",
        pharse: ['L','u','c','i','u','s','','M','a','l','f','o','y']
      },
];


//2. List of Functions to create
 //2A. Return a random pharse from the pharse array named: const getRandomPhraseArray
  const getRandomPhraseArray = (arr) => { 
    //The square brackets around the Math methods 
    let randomArrItem = arr[Math.floor(Math.random() * arr.length)];
    return randomArrItem;
  };

  // console.log(getRandomPhraseArray(phrases));

//2B. Add the letters to of a string to the display named: const addPhraseToDisplay
const addPhraseToDisplay = (letters) => {
  letters = getRandomPhraseArray(phrases);
   let hintsLetters = Object.values(letters);
   
   //  return hintsLetters; 
   for (let i = 0; i< hintsLetters.length; i++) {
     //This gets my hint text
        let hintText = hintsLetters[0];
        let hintQ = document.createElement('h2');
        hintQ.textContent = hintText;
        console.log(hintQ);
      //This gets the pharse letters
        let pharseWords = hintsLetters[1];
        console.log(pharseWords);
        
        
   }
   
   
   return letters;
};

console.log(addPhraseToDisplay());
 //2C. Check if a letter is in the phrase named: const checkletter
 //2D. Check if the game has been won or lost
//2E. Attach an event listner to the START BUTTON which is startButton.addEventListener('click', () => {}); 
//2F. Listen for the onscreen keyboard to be clicked qwerty.addEventListener('click', () => {});