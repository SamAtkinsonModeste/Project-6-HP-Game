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
    
       
       let oopsWand = document.querySelectorAll('.tries img');
       console.log(oopsWand);
       
       console.log(missed);
       missed++;
       oopsWand[missed - 1].src = "images/broken-wand.png";
       console.log(oopsWand[missed - 1].src.indexOf('img'));

    

      }
      

  }
  
  checkWin();

});



//2D. Check if the game has been won or lost with function checkWin = () => {}
const checkWin = () => {
 
  const spanLetter = ul.getElementsByClassName('letter');
  const spanBox    = ul.getElementsByClassName('show');
  // console.log(spanLetter.length);
  // console.log(spanBox.length);

  if (spanBox.length === spanLetter.length) {
    

      let overlayWin = document.getElementById('overlay');
      overlayWin.className = "win";
      overlayWin.style.display = "flex";
      let winText = overlayWin.querySelector('.title');
      console.log(winText);
      winText.textContent = "You helped Harry WIN!!! Well Done :)";
      winText.className = "winLose";
      startBtn.className = "btn__resetRound";
      startBtn.textContent = "Go Again?";
      overlayWin.appendChild(startBtn);



  } 
  
  
    if (missed >= 5) {

    let overlayLose = document.getElementById('overlay');
    overlayLose.className = "lose";
    overlayLose.style.display = "flex";
    let loseText = overlayLose.querySelector('.title');
    loseText.textContent = "OH No!! Harry lost to Voldermort :(";
    loseText.className = "loseWin";
    startBtn.className = "btn__resetRound";
    startBtn.textContent = "Try Another?";
    overlayLose.appendChild(startBtn);
    

  }

  const gameReset = (()=> {
    
    missed = 0;
    
    let wands = document.querySelectorAll('.tries img');
      wands.forEach(img => {
        img.src = "images/wands.png";

      });
   
      let btns = document.querySelectorAll('.keyrow button');
         btns.forEach(btn => {
           btn.className = "";
           btn.disabled = false;
         });
    
        
        ul.innerHTML = "";

        
        
        let resetLoseText = document.querySelectorAll('h2')[0];
        resetLoseText.className = "title";
        resetLoseText.textContent = "";

        // let resetWinText = document.querySelector('.winLose');
        // resetWinText.className = "title";
        // resetWinText.textContent = "";
        
     
        
        

        //  if ( overlayLose.style.display === "flex") {

        //       overlayLose.style.display = "none;"
        //  } else if ( overlayWin.style.display === "flex") {
        //     overlayWin.style.display = "none;"
         
        //   } else {
            
        //        let overlay =  document.getElementById('overlay');
        //        overlay.className = "start";
        //   }
         
         
      

  });

  
  startBtn.addEventListener('click', (evt) => {
  
    gameReset();
    
    const overlay = document.getElementById('overlay');
    overlay.className = "start";
    overlay.style.display = "none";
    
    const addNewPhrase = getRandomPhraseArray(phrases);
    addPhraseToDisplay(addNewPhrase);

         

   

    
      
  
  });


}