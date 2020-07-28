const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,platform;
var block;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,600,800,20);
  platform = new Ground(405,320,280,10);

  
  block1 = new Block(345,275,30,40);
  block2 = new Block(375,275,30,40);
  block3 = new Block(405,275,30,40);
  block4 = new Block(435,275,30,40);
  block5 = new Block(465,275,30,40);
  block6 = new Block(360,235,30,40);
  block7 = new Block(390,235,30,40);
  block8 = new Block(420,235,30,40);
  block9 = new Block(450,235,30,40);
  block10 = new Block(375,195,30,40);
  block11 = new Block(405,195,30,40);
  block12 = new Block(435,195,30,40);
  block13 = new Block(390,155,30,40);
  block14 = new Block(420,155,30,40);
  block15 = new Block(405,115,30,40);

  polygon = new Block(120,240,50,50);

  sling = new SlingShot(this.polygon.body,{x:100,y:200});

  Engine.run(engine);  

}

function draw() {
  background(225);  
  drawSprites();
  
  ground.display();
  platform.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  sling.display();
  polygon.display();

}
function mouseDragged() {

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased() {
  
  sling.fly();
  
  }