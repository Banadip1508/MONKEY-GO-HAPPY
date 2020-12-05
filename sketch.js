var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score
var survivaltime=0;
var ground,invisibleGround;

function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}

function setup() {
monkey =createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;    
FoodGroup= createGroup();     
obstacleGroup= createGroup();
invisibleGround=createSprite(400,350,900,10);
}

function draw() {
  
createCanvas(400,400)
background("white");
  
 
if(gameState===PLAY){
  
if (ground.x < 0){
  ground.x = ground.width/2;
}
if(keyDown("space")&& monkey.y >= 314.3) {
  monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.5

spawnFood();
spawnobstacle();
  
 
 stroke("blue");
 textSize(20);
 fill("white");
 text("Score"+score,500,50);
  
 stroke("blue");
 textSize(20);    
 survivalTime=Math.ceil(random(frameCount/frameRate()))
 text("Survival Time:"+survivalTime,100,50);
 
}
 if(obstacleGroup.isTouching(monkey)){
   gameState=END;
   ground.velocityX=0;
   monkey.velocityY=0;
}
  
  monkey.collide(ground)
    drawSprites();
  }

function spawnFood(){
  if (frameCount % 80 === 0){
    banana = createSprite(200,200,10,15);
    banana.velocityX=-2
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.lifetime=200;
    FoodGroup.add(banana);
    banana.scale=0.1;
  }
}
function spawnobstacle(){
  if(frameCount % 300 ===0){
    obstacle=createSprite(300,350,50,10);
    obstacle.velocityX=-2;
    obstacle.lifetime=200;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.scale=0.1;
  }
}
