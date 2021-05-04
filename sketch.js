const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world;
var engine;
var polygon_img
var gameState = 0;
var stand1;
var stand2;


function preload() {
    polygon_img = loadImage("polygon.png");
}
function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
Engine.run(engine);
ground = new Ground(450,350,900);


    block1 = new Box(330,235,30,40)
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block4 = new Box(450,235,30,40);
    block5 = new Box(480,235,30,40);

    block6 = new Box(360,195,30,40);
    block7 = new Box(360,195,30,40);
    block8 = new Box(360,195,30,40);

    block9 = new Box(360,155,30,40);
    block10 = new Box(360,155,30,40);
    block11 = new Box(360,155,30,40);
    block12 = new Box(360,155,30,40);
    block13 = new Box(360,155,30,40);
    block14 = new Box(360,155,30,40);
    block15 = new Box(360,155,30,40);
    block16 = new Box(360,155,30,40);
    block17 = new Box(640,175,30,40);
    block18 = new Box(670,175,30,40);
    block19 = new Box(700,175,30,40);
    
    block20 = new Box(730,175,30,40);
    block9 = new Box(760,175,30,40);
    
    block21 = new Box(670,135,30,40);
    block22 = new Box(700,135,30,40);
    block23 = new Box(730,135,30,40);
    block24 = new Box(700,95,30,40);
    
    
    
    
    
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

Slingshot   =new  SlingShot(this.polygon,{x:100,y:200});

stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);


    
}


function draw(){
    ground.display()
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("skyblue")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("green");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("yellow")
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("blue");
    block22.display();
    block23.display();
    fill("pink")
    block24.display();
    fill("gold");
    stand1.display();
    fill("brown")
    stand2.display();
    fill("brown")
    Slingshot.display();

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
   
}

function mouseDragged(){

    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}


function mouseReleased(){
    SlingShot.fly();
 
}

