var ground, groundImage
var obsGroup
var mario, marioImage
var rock1Image, rock2Image
var backgroundImage
var invisground

function preload(){
  groundImage = loadImage("groundImg.png")
  marioImage = loadImage("mario.png")
  rock1Image = loadImage("rock1.png")
  rock2Image = loadImage("rock2.png")
  backgroundImage = loadImage("back.jpeg")
}
function setup(){
  createCanvas(1000,600)
  ground = createSprite(500,530,1000,20)
  ground.addImage(groundImage);
  ground.velocityX=-6
  ground.x=ground.width/2
  ground.scale=2.5

  obsGroup=new Group()

  mario = createSprite(100,480,40,40)
  mario.addImage(marioImage)
mario.scale = 0.2
  invisground = createSprite(500,540,1000,20)
invisground.visible = false

  
  
}
function draw(){
  background(backgroundImage)
  if(ground.x<0){
    ground.x = ground.width/2
    }
  if(keyDown(UP_ARROW)){
    mario.velocityY = -10
  }
  mario.velocityY = mario.velocityY+0.5
  if(keyDown(LEFT_ARROW)){
    mario.velocityX = -5
  }
if(mario.isTouching(obsGroup)){
 ground.velocityX = 0
 obsGroup.setVelocityXEach(0)
 obsGroup.setLifetimeEach(-1)
}



  mario.collide(invisground)
    spawnobs()
  drawSprites()
}
function spawnobs(){

  if(frameCount%75===0){
    var obstacles = createSprite(1000,500,10,10)
    obstacles.velocityX = -5
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1: obstacles.addImage(rock1Image)
      break
      case 2: obstacles.addImage(rock2Image)
      break
      default: break
    }
    obstacles.scale = 0.5
    obstacles.lifetime = 250
    obsGroup.add(obstacles);
  }
  }