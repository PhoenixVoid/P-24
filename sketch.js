const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject, groundObject;
var world;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	dustbinObj = new Dustbin(600, 360);

	groundObject = new Ground(width/2, 390, width, 20);

	paperObject = new Paper(100, 200, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObj.display();
  groundObject.display();
  paperObject.display();

	keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyCode == UP_ARROW){


		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:45, y:-28});

	}

}



