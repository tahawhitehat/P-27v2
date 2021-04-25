
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  var bobDiameter = 40
	//Create the Bodies here
	roof = new Roof(350,200,300,30)
	bob1 = new Bob(345,550,50,50)
  rope1 = new Rope(bob1.body,roof.body,0, 0)
	bob2 = new Bob(230,550,50,50);
  rope2 = new Rope(bob2.body,roof.body,-bobDiameter * 3, 0)
	bob3 = new Bob(290,550,50,50)
  rope3 = new Rope(bob3.body,roof.body,-bobDiameter * 1.5, 0)
	bob4 = new Bob(410,550,50,50)
  rope4 = new Rope(bob4.body,roof.body,-bobDiameter * -1.5, 0)
	bob5 = new Bob(470,550,50,50)
  rope5 = new Rope(bob5.body,roof.body,-bobDiameter * -3, 0)


  Engine.run(engine);
   
}


function draw() {
  background("gray");
  rectMode(CENTER);
  Engine.update(engine);

  rope1.display(); 
  bob1.display();
  bob2.display();
  rope2.display(); 
  bob3.display();
  rope3.display(); 
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  roof.display();
}



