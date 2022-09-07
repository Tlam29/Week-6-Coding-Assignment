//Creating Cards
class Card{
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
class Deck{  //Lets test this funciton
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
       
        shuffleDeck() {
            let location1, location2, temp;
            for (let i = 0; i < 1000; i++) {
                location1 = Math.floor((Math.random() * this.cards.length));
                location2 = Math.floor((Math.random() * this.cards.length));
                temp = this.cards[location1];
                this.cards[location1] = this.cards[location2];
                this.cards[location2] = temp;
             }
         }
    
}
//Creating Players and Game
class Player {
    constructor(name){
        this.playerName = name;
        this.playerCards = [];
    }
}
class Board{
    constructor(){
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOne, playerTwo){
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0,26);
        this.players[1].playerCards = d.cards.slice(26,52);
    }
}
 
let gameBoard = new Board();
gameBoard.start("Tyson", "Lam");
console.log(gameBoard.players);

//Game Logic
//Card1 = playerO
