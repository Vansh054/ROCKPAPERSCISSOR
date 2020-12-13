class Game 
{
    constructor(){

    }
    readState(){
        var gameStatevalue = database.ref('gameState')
        gameStatevalue.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(a){
        database.ref('/').update({
            'gameState': a
        })
    }
     startGame(){
     if (gameState == 0)
      {
        player =new Player();
        form = new Form();
        form.display();

      }
      
    }
    playGame(){
        form.hideForm();
        Player.getallPlayer();
    }
    end(){
    }
}