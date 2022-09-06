class Card{
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
class Deck{
    constructor(){
        this.cards = [];
    }
     createDeck(){
            let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
            let ranks = ['Ace', '2', '3', '4', '5', '6', '7','8', '9', '10','Jack','Queen', 'King'];
            let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            for(let i = 0; i < suits.length; i++){
                for (let j = 0; j <ranks.length; j++){
                    this.cards.push(new Card(suits[i], ranks[j], values[j]));
                }
            }
        
        }
       
        shuffleDeck(){

        }
    
}
 
const d = new Deck(); //creating a new deck instances named "d"
d.createDeck(); //Calling to fill our array
console.log(d.cards); //logging out our cards array
