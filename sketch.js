
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 680, width, 20 , {isStatic:true} );
	World.add(world, ground);

	paper=new Paper(100,50,20)
	dustbin=new Dustbin()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,width,20)

  paper.display()
  dustbin.display()
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	   
	 }
   }
   


