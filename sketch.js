
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
 const Body = Matter.Body; 
 const Composites = Matter.Composites; 
 const Composite = Matter.Composite;

var ball,blower,blowermouth;
var button;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball = new Ball(400,200,80,80);
  blower = new Blower(500,200,100,60);
  blowermouth = new Blowermouth(700,300,160,160);

button = createButton("Click to Blow");
button.position(width / 2, height - 100);
button.mousePressed(blow);
}

function draw() {
  background(255,255,255); 
  ball.show();
  blower.show();
  blowermouth.show();
  drawSprites();
}
function blow(){
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 })
}


