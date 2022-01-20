let cardArray = [{ color: 'yellow' },
     { color: 'Green' },
      
     { color: 'Blue' }, 
     
     { color: 'pink' },
     
     { color: 'orange' },
     
     { color: 'blue' }, 
     
     { color: 'brown' },
     
     { color: 'purple' },
     
     { color: 'white' },
      
     { color: 'grey' }];



class CardGame{
    
    constructor(){
        let gameContainer = document.querySelector(".game-container");
        this.cards = [];
        for(let rowIndex = 0; rowIndex < 4; rowIndex++){
            let row = document.createElement('div');
            row.className = "row";
            gameContainer.appendChild(row);
            this.cards.push([]);
            
            for(let colIndex = 0; colIndex < 5; colIndex++){
               let col = document.createElement('div');
               col.className = 'col';
               col.innerHTML= 'col';
               row.appendChild(col);
                this.cards[rowIndex] = {color: unknown};
                 this.cards.map(prop =>{
                    for(propIndex = 0; propIndex<20; propIndex++){
                        let propIndex = cardArray[color];
                        this.prop = this.cards[rowIndex] + propIndex;
                        this.cards.push([]);
                        return prop;
                    } 
                 }) 
               
            }

        }
        

    } 
    getCards(){
        
        this.cards.className.setAttribute("style", i);
        
        this.cards.forEach(card =>{
            for(i = 0; i<20; i++){
              let sytle = card.classList.color;
                console.log(card);
            }
            
        })
       

    } 
    shuffle(){
        this.cards.forEach(card =>{
            const randomNumber = Math.floor(Math.random()*this.cards.length)+1;

                card.classList.remove('colors');

                setTimeout(() => {
                    card.style.order = `${randomNumber}`;
                }, 400);
                })
        } checkCards(){
            if(this.cards.every()){

            }
        }
        
    }

    let game = new (CardGame);
    
/*    
document.addEventListener('DOMContentLoaded', () => {
    let cardArray = [{ color: 'yellow' },
     { color: 'Green' },
      
     { color: 'Blue' }, 
     
     { color: 'pink' },
     
     { color: 'orange' },
     
     { color: 'blue' }, 
     
     { color: 'brown' },
     
     { color: 'purple' },
     
     { color: 'white' },
      
     { color: 'grey' }];
    cardArray.sort(() => 0.5 - Math.floor(Math.random))

    let cardsChosen = [];
    let cardChosenId = [];
    let cardsWon = [];
    let resultDisplay = document.querySelector('result');
    let col = document.querySelectorAll("div.game-container");
  
       () => { for (let i = 0; i < cards.length; i++) {
            
            col.setAttribute('style', 'color:red');
            col.setAttribute('data-id', i);
            col.addEventListener('click', flipCard);
            col.appendChild('.container');
        }
        function flipCard() {
            let cardId = cardArray.getAttribute('');
            cardsChosen.push(cardArray[color].name);
            cardChosenId.push(cardId);
            this.setAttribute( cardArray[cardId].color);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
            function checkForMatch() {
                let cards = document.querySelectorAll('.game-container');
                let optionOneId = cardChosenId[0];
                let optionTwoId = cardsChoseId[1];
                if (cardsChosen[0] === cardsChosen[1]) {
                    alert('Match');
                    cards[optionOneId].setAttribute('style', "color: blue");
                    cardsWon.push(cardsChosen);
                } else {
                    cards[optionOneId].setAttribute('style', 'color:red', 'col');
                    cards[optionTwoId].setAttribute('style', 'color:red', 'col');
                    alert('not a match');
                }
                cardsChosen = [];
                cardChosenId = [];
                resultDisplay.textContent = cardsWon.length;
                if (cardsWon.length === cardArray.length / 2) {
                    resultDisplay.textContent = 'Good job';
                }
            }

        }
    }

});



let game = new CardGame;
console.log(CardGame);
*/



