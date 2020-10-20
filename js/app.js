const banner = document.querySelector('.header');
const phrase = document.getElementById('phrase');
const ul =  phrase.querySelector('ul');
const qwerty = document.getElementById('qwerty');
const startBtn = document.querySelector('a');
const letterSpan = document.getElementsByClassName('letter');
const scoreboard = document.getElementById('scoreboard');
let missed = 0;



//1.Create an array of pharses
const phrases = [

  {
    hint: "Which book is this? Harry Potter and.....?",
    phrase: 'The Chamber of Secrets'
  },

  {
    hint: "Which young male wizard is this?",
    phrase: 'Harry Potter',
  },
  {
    hint: "Which book is this? Harry Potter and .....?",
    phrase: 'The Order of the Phoenix'
  },
  {
    hint: "Which Professor is this?",
    phrase: 'Severus Snape'
  },
  {
    hint: "Which book is this? Harry Potter and.....?",
    phrase: 'The Goblet of Fire'
  },
  {
    hint: "Which young female wizard is this?",
    phrase: 'Hermione Granger'
  },
  {
    hint: "Which young wizard's father is this?",
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
  
  
  
  
 

 





//2E. Attach an event listner to the START BUTTON which is startButton.addEventListener('click', () => {}); 
//Start Game Button Listener
startBtn.addEventListener('click', (evt) => {
  
  const overlay = document.getElementById('overlay');
    
   overlay.style.display = "none";
   addPhraseToDisplay(randomPhraseObject);
    

});





 //2C. Check if a letter is in the phrase named: const checkLetter
 const checkLetter = button => {
   
  //Reference to my span container of my letter
    let spanShow = document.querySelectorAll('.box');
    let match = null;


    for (let i = 0; i <letterSpan.length; i++) {
        spanShow = letterSpan[i].parentNode;
        let letter = letterSpan[i].textContent;
       
        if (button === letter.toLowerCase()) {

            letter = spanShow.classList.add('show');
            match = true;
        }
        
    }  
    
    return match;

 };



//2F. Listen for the onscreen keyboard to be clicked qwerty.addEventListener('click', () => {});
qwerty.addEventListener('click', (evt) => {
  //  let letterFound;
   
  if (evt.target.tagName === 'BUTTON') {
    const btn = evt.target;
    btn.className = "chosen";
    btn.disabled = true;
    const check = checkLetter(evt.target.textContent.toLowerCase());
    // letterFound = check;
 

  if(!check) {
    
    // function swapImgs(element, propClass, propSrc, value) {
       

    // }
      let wand = document.querySelectorAll('.tries');
      console.log(wand);
      let oopsWand = document.querySelectorAll('.tries img');
     
      
     
       wand[0].className = "";

      oopsWand[0].src = "images/broken-wand.png";
     
      // console.log(oppsWand);
      
      
      if ( missed === missed + 1) {
       missed = oopsWand;
    
     

    //  console.log(missed);

      }
      // 
      

     
}


   
      
  
    
      
    
    // } 

  }
  

});

//2D. Check if the game has been won or lost