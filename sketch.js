var circlesGroup
var speed
var score1 = 0
var score2 = 0
var virusGroup
var gamestate = 0
var flag = 0
function preload(){
  green = loadImage("images/green.png")
  blue = loadImage("images/blue.png")
  i = loadImage("images/bg check.jpg")
  skin2 = loadImage("images/skin1.png")
  skin1 = loadImage("images/skin2.png")
  virusi = loadImage("images/virus.png")
  
}
function setup() {
  createCanvas(displayWidth,displayHeight-150);
  
circlesGroup = new Group()
virusGroup = new Group()
speed = 5
  for (var i = 0 ;i < displayWidth ; i=i+150 ){
    for(var j = 0; j < displayHeight ; j =j +150  ){
    //  circle = new Circle(random(i,displayHeight),random(j,displayWidth),5,blue,0.1)
    circle = new Circle(random(0,displayWidth),random(0,displayHeight),5,blue,0.1)
    circle1 = new Circle(random(0,displayWidth),random(0,displayHeight),5,green,0.07)
    }
  }
  for(var i = 0 ; i < 4 ; i++){
    virus = new Virus(random(0,displayWidth),random(0,displayHeight),0.3)
  }
  player1 = new Player(displayWidth/2,displayHeight/2,5,0.3,skin1)
  player2 = new Player(displayWidth/2-70, displayHeight/2 +50,5,0.2,skin2)
  
 
  
}


function draw() {
  background(i);
  //if (frameCount % 100 == 0){
    //circle = new Circle(100,200,green,0.1)
  //}
  if(gamestate == 1){
    console.log("split")
    player3 = new Player(player1.Player.x,player1.Player.y,0.5,player1.Player.scale,skin1)
    flag = 1
    gamestate = 0

  }
 player1.touch("one")
  player1.move(speed)
  player2.touch("two")
  player2.move2(speed)
  player1.touchVirus()
  player2.touchVirus()
  if(flag == 1){
    player3.move(speed)
    console.log("speed" + speed)
    player3.touch("three")
  }
  
  drawSprites();
  fill("darkgreen")
  textSize(30)
  text("Player1 :" + score1,displayWidth -1350,displayHeight-200)
  fill("darkblue")
  text("Player2 :" + score2,displayWidth -1350,displayHeight-160)
  console.log("virusSize" + virus.Virus.scale )
  console.log("playerSize" + player1.Player.scale)
}