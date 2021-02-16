const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,paper1,invis,ball;

function preload(){
	invis_IMG = loadImage("images/dustbin.png");
	ball_IMG = loadImage("images/paper.png");
}

function setup() {
	createCanvas(700, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	paper1 = new paper(100,450,70);
	dustbin1 = new dustbin(600,640,150,10);
	dustbin2 = new dustbin(530,570,10,150);
	dustbin3 = new dustbin(670,570,10,150);
	ground1 = new ground(350,650,width,10)

	invis = createSprite(600,565,10,10)
	invis.addImage(invis_IMG);
	invis.scale = 0.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-180});
}
}



