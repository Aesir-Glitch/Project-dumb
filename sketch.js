const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1,part2,part3;
var paperObject;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(1000,600);

    ground = new Ground(600,height,1200,20);
    
    part1 = createSprite(800,585,120,10);
    part2 = createSprite(740,560,10,50);
    part3 = createSprite(860,560,10,50);
    
    c2 = color(165,42,42);
    fill(c2);
    paperObject = new Paper(250,580,20,20);

//    if (keyCode === 32){
//      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
//  } 
  
    engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //Matter.Bodies.circle(x,y,radius,[options],[maxSides])


  Engine.run(engine);
  
/*  function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  }  
}*/

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  part1.display();
  part2.display();
  part3.display();
  paperObject.display();
  
  drawSprites();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  }  
}