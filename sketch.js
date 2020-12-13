var database;
var gameState = 0, playerCount = 0;
var game, form, player, allPlayers;
var player1, player2;
var players = [];
/* var object; */
function preload(){
  paper = loadImage("images/rock.png")
}
function setup() {
  createCanvas(displayWidth - 10,displayHeight - 20);

  database = firebase.database();
  game = new Game();
  game.readState();
  game.startGame(); 
}

function draw(){

  if (playerCount == 2)
  {
      game.updateState(1);
  }
  if (gameState == 1)
  {
    game.playGame();
  }
  if (gameState == 2){
    game.end();
  }

}
