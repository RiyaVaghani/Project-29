const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(650,300,250,10);
  stand2 = new Stand(960,200,200,10);
 
  //level one
  block1 = new Block(560,275,30,40);
  block2 = new Block(590,275,30,40);
  block3 = new Block(620,275,30,40);
  block4 = new Block(650,275,30,40);
  block5 = new Block(680,275,30,40);
  block6 = new Block(710,275,30,40);
  block7 = new Block(740,275,30,40);
  //level two
  block8 = new Block(590,235,30,40);
  block9 = new Block(620,235,30,40);
  block10 = new Block(650,235,30,40);
  block11 = new Block(680,235,30,40);
  block12 = new Block(710,235,30,40);
  //level three
  block13 = new Block(620,195,30,40);
  block14 = new Block(650,195,30,40);
  block15 = new Block(680,195,30,40);
  //top
  block16 = new Block(650,155,30,40);

  blockA = new Block(900,175,30,40);
  blockB = new Block(930,175,30,40);
  blockC = new Block(960,175,30,40);
  blockD = new Block(990,175,30,40);
  blockE = new Block(1020,175,30,40);

  blockF = new Block(930,135,30,40);
  blockG = new Block(960,135,30,40);
  blockH = new Block(990,135,30,40);
  
  blockI = new Block(960,95,30,40);
  
  polygon = Bodies.circle(400,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:400,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Press Space to try again",50,100);

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  blockF.display();
  blockG.display();
  blockH.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  blockI.display();
  fill("grey");
  block16.display();
 
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}