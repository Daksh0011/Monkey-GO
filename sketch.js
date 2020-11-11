var PLAY=1,END=0,gameState=PLAY
var monkey , monkeyrun,ig
var fruit ,fruitImage, obstacle, obstacleImage
var fG,oG,b
var score
var monkey,st,ban,bunSound,go


function preload(){
  
  monkeyrun =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  goi=loadImage("game over.jpg")
  bunSound=loadSound("food_banana_break_from_bunch_002.mp3")
  go=loadSound("zapsplat_cartoon_voice_funny_says_oh_no_19921.mp3");
}



function setup() {
  createCanvas(600,400)
   
  fG = new Group();
  oG=new Group();
  
  monkey = createSprite(100,300,10,10)
  monkey.addAnimation("monkey",monkeyrun)
  monkey.scale=0.2
  monkey.x=50
  
 
  
  ground=createSprite(0,380,900,10)
  ground.velocityX=-5
  ground.x=ground.width /2;
   

  ig=createSprite(300,380,700,10)
  
  ig.visible=false
  
  
  banana();
  bg();
  st=0
  ban=0
}


function draw() 
{
  
 background ("skyblue")
  
  
 monkey.setCollider("rectangle",0,0,170,600);
 monkey.debug=false;
  

  
  //destroying fruit
  if(gameState===PLAY)

{
    banana();
    
   if(monkey.isTouching(fruit))
{
      fruit .destroy();
      ban=ban+1 
      bunSound.play();
}
  
   if(oG.isTouching(monkey))
{
         go.play()
         gameState=END
}
    
  //jumping monkey
  if(keyDown("space")&&monkey.y >= 300)
{
     monkey.velocityY = -20;
      
}
    monkey.velocityY = monkey.velocityY + 0.8
    fill("black")
    
    //survival time
    textSize(20)
    st=Math.ceil(frameCount/frameRate())
    text("SURVIVAL TIME:"+st,300,30)
    
    //eating banana
    text("BANANA: "+ban,300,60)
    
    //colliding monkey
  
    console.log(monkey.y)
    
    
} 
    if(gameState===END)
{
 
     ground.velocityX=0
     monkey.velocityY=0
 
 b.visible=true;
      
 fG.destroyEach();
      
 oG.setLifetimeEach(-1);
 fG.setLifetimeEach(-1);
  
 oG.setVelocityXEach(0);
 fG.setVelocityXEach(0);  
  

       
 
}
  
  
  
  //ground making
  
  if(ground.x<0)
{
      ground.x=ground.width /2;
}
    monkey.collide(ig);
    rocks();
    drawSprites();
}

function banana()
{
  if(frameCount%40===0)
{
     
  fruit=createSprite(0,300,10,10)
  fruit.addImage("banana",fruitImage)
  fruit.scale=0.1
  fruit.setCollider("rectangle",0,0,600,300)
  fruit.debug=false;
  fruit.lifetime=300
   
  fruit.y = Math.round(random(120,200));
  fruit.velocityX=4
   
   fG.add(fruit);
}
  
}
function rocks()
{
  
  if(frameCount%150===0)
{
  
  obstacle = createSprite(200,348,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
  obstacle.velocityX=-5
  
  obstacle.x = Math.round(random(10,6));
  obstacle.x=500
  obstacle.y600
  
  obstacle.scaleY=20
  obstacle.setCollider("circle",0,0,150);
  obstacle.debug=false;
  
  oG.add(obstacle)
    
  obstacle.depth=b.depth
  b.depth=b.depth+1

}
  
}

function bg()
{
  b=createSprite(300,200,600,400)
  b.addImage(goi)
  b.visible=false;
  b.scale=0.7 
  
}



