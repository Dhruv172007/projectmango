
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,30);
	mango3=new mango(1050,200,30);
	mango4=new mango(1150,100,30);
  mango5=new mango(1100,150,30);
	mango6=new mango(1100,200,30);
  stone1 = new stone(200,340,200,300);
  
  slingshot1=new SlingShot(stone1.body,{x:235,y:440})
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

 detectollision(stoneObj,mango1);
 detectollision(stoneObj,mango2);
 detectollision(stoneObj,mango3);
 detectollision(stoneObj,mango4);
 detectollision(stoneObj,mango5);
 detectollision(stoneObj,mango6);
}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  treeObj.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot1.display();
  groundObject.display();
}

function mouseDragged()
 { Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) } 

 function mouseReleased()
  { slingshot1.fly(); }


function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance<=mango.r+stone.r){
    Matter.body.setStatic(mango.body,false);
  }
}