const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, controls = true, tenseconds = false, moveaway = false, elevenseconds = 0;
var user, utriangle, triangle1, triangle2, triangle3, shady1background, line1, line2, lineimg;
function preload(){
  utriangle = loadImage("triangle.png");
  shady1background = loadImage("white.webp");
  lineimg = loadImage("image.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 engine = Engine.create();
 world = engine.world;
  var options = {
    isStatic:true
  }

  triangle1 = createSprite(2000, 240, 30, 30);
  triangle2 = createSprite(1990, 300, 30, 30);
  triangle3 = createSprite(2020, 390, 30, 30);
  

  triangle1.addImage(utriangle);
  triangle2.addImage(utriangle);
  triangle3.addImage(utriangle);
  triangle1.scale = 0.4;
  triangle2.scale = 0.4;
  triangle3.scale = 0.4;


  user = Bodies.polygon(windowWidth/2,800,3,40, options);
  line2 = Bodies.rectangle(200000, 200, 100, 10);
    World.add(world, line2);

  World.add(world, user);
  setTimeout(function(){
   tenseconds = true;
  },10000)
  setTimeout(function(){
    elevenseconds = 1;
   },12500)
   setTimeout(function(){
    elevenseconds = 2;
   },12600)
  setTimeout(function(){
    moveaway = true;
   },7000)
}

function draw() {
  if(elevenseconds == 0){
    background("white"); 
  }
  else{
    background("white");
    //imageMode(CENTER)
    image(shady1background, 0, 0, windowWidth, windowHeight);
   }
 

  push();
  imageMode(CENTER);
  image(utriangle,user.position.x, user.position.y, 350, 225);
  pop();
  push();
    imageMode(CENTER);
    image(lineimg,line2.position.x, line2.position.y, 350, 225);
    pop();
  if(elevenseconds == 1){

  } 
  Engine.update(engine);
   

  //triangle 1 & 2 moves in from top right and stops after seconds
  if(tenseconds == false){
    triangle1.position.x -=5;
    triangle1.position.y +=1;
    triangle2.position.x -=5;
    triangle2.position.y +=1;
    triangle3.position.x -=5;
    triangle3.position.y +=1;
  }
  if(moveaway == true){
    controls = false;
    user.position.x -=6;
    user.position.y +=1;
  }
  //new slide
  if(elevenseconds == 1){
    moveaway = false;
    controls = true;
    triangle1.position.x = 2000;
    triangle2.position.x = 2000;
    triangle3.position.x = 2000;
    user.position.x = 600;
    user.position.y = 200;
    line2.position.x = 200;
    
    
  }



  if(keyDown(UP_ARROW) && controls == true){
    user.position.y -= 5;
  }
  if(keyDown(DOWN_ARROW) && controls == true){
    user.position.y += 5;
  }
  if(keyDown(RIGHT_ARROW) && controls == true){
    user.position.x += 5;
  }
  if(keyDown(LEFT_ARROW) && controls == true){
    user.position.x -= 5;
  }


drawSprites();

}
