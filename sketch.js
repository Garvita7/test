
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,division1,division2,division3,division4,side1,side2;
var particles = [];
var plinkos = [];

function preload(){
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(240,800,800,20);
	division1 = new Division(100,750,10,300);
	division2 = new Division(200,750,10,300);
	division3 = new Division(300,750,10,300);
	division4 = new Division(400,750,10,300);
	side1 = new Division(0,750,10,300);
	side2 = new Division(400,750,10,300);


	for (var j = 40; j <= width; j = j + 50){
		plinkos.push(new Plinko(j, 75, 10));
   }
 
   for (var j = 20; j <= width; j = j + 50){
		plinkos.push(new Plinko(j, 175, 10))
   }
 
   for (var j = 40; j <= width; j = j + 50){
	 plinkos.push(new Plinko(j, 275, 10))
   }
 
   for (var j = 20; j <= width; j = j + 50){
   plinkos.push(new Plinko(j, 375, 10))
   }
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  side1.display();
  side2.display();


  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  
  drawSprites();
 
}



