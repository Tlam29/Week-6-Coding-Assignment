var expect = chai.expect;

describe("myFunction", function(){
    describe('#winnerIs', function(){
        it('should log out the winner', function (){
            var x = winnerIs(16,14);
            expect(x).to.equal("Player Wins!");
        });
    });
});
describe('createDeck', function(){
    describe('#createDeck',function(){
        it('Should create a 52 card deck', function(){
        var y = new Deck;
        expect(y.cards).to.be.an("array");
        });
    });
});