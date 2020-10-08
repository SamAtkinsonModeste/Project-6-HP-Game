const qwerty = document.getElementById('qwerty');
const banner = document.querySelector('.header');
const phrase = document.getElementById('phrase');
const ul     = document.querySelector('ul');
const startBtn = document.querySelector('a');
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


const pets = [
  {
    hint: "dog",
    phares: "Michael",
  },

  {
    hint: "cat",
    phares: "Sue",
  },

  {
    hint: "horse",
    pharse: "Richard",
  },

];

//2. List of Functions to create
 //2A. Return a random pharse from the pharse array named: const getRandomPhraseArray
  const getRandomPhraseArray = (arr) => { 
    
    //The square brackets around the Math methods get the index of the array item
    let randomArrItem = arr[Math.floor(Math.random() * arr.length)];
    return randomArrItem;
  };

  // console.log(getRandomPhraseArray(Object.values(pets)));


  //2B. Add the letters to of a string to the display named: const addPhraseToDisplay
  const addPhraseToDisplay = (arr) => {
    
      const li = document.createElement('li');
      //create elements to nest in li
      function createElement( nameElement, property, value ) {
        const element = document.createElement(nameElement);
        element[property] = value;
        return element;
    }

    

       for (let i = 0; i <arr.length; i++) {
             let hintPharse = arr[i];
             
            banner.textContent = hintPharse.hint;
          
            li.textContent = hintPharse.pharse;
            
            
                        
          //     let secondPropertyVals =  Object.values(arr[i])
          // for (let j= 0; j< secondPropertyVals.length; j++) {
                   
          //         let liItem = secondPropertyVals[1][j];
          //         li.textContent = liItem;
          //      }
              

       }
    
      const spanBox = document.createElement('span');
      spanBox.className = "box";
      const spanFront = document.createElement('span');
      spanFront.className = "front";
  // spanFront.textContent = "F";
     const spanLetter = document.createElement('span');
      spanLetter.className = "letter";
  // spanLetter.textContent = "L";
     spanBox.appendChild(spanFront);
     spanBox.appendChild(spanLetter);
     li.appendChild(spanBox);
      ul.appendChild(li);

      return ul;
     
  }


 
console.log( addPhraseToDisplay(pets));
 




console.log(startBtn);

//Start Game Button Listener
startBtn.addEventListener('click', (evt) => {
  
  const overlay = document.getElementById('overlay');
    
   overlay.style.display = "none";
 

});





 //2C. Check if a letter is in the phrase named: const checkletter
 //2D. Check if the game has been won or lost
//2E. Attach an event listner to the START BUTTON which is startButton.addEventListener('click', () => {}); 
//2F. Listen for the onscreen keyboard to be clicked qwerty.addEventListener('click', () => {});