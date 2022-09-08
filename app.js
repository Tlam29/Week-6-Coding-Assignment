//Creating Cards
class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor(){
        this.cards = [];
    }
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
    shuffleDeck(){                                                  //Shuffling the cards
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

class Player {
    constructor() {
        this.playerCards = [];
    }
}

class Computer{
    constructor(){
        this.computerCards = []
    }
}
class Hand {
    constructor() {
        this.players = [];
    }
    start(player, computer) {
        this.players.push(new Player(player));
        this.players.push(new Computer(computer));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();    
        this.players[0].playerCards = newDeck.cards.slice(0, 26);
        this.players[1].computerCards = newDeck.cards.slice(26, 52);
    }
}
let playerHands = new Hand();
playerHands.start('Player', 'Computer');
console.log(playerHands.players);


let player1 = playerHands.players[0];
let player2 = playerHands.players[1];
let playerPoints = 0;
let computerPoints = 0;
for(let i = 0;i<playerHands.players[0].playerCards.length;i++){
    if (player1.playerCards[i].value>player2.computerCards[i].value){
        playerPoints++; //Adding Points to Player
    } else {
        computerPoints++; //Adding Points to computer
    }
}
console.log(`player ${playerPoints} 
Computer ${computerPoints}`);

if(playerPoints > computerPoints){
    console.log("Player Wins!")
}else{
    console.log("Computer Wins!")
}