
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paperball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paperball=  Ball (200,200,10,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paperball.display();
 
}



