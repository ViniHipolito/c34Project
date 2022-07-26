
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;

var block1;
var block2;
var block3;
var ball;
var startB;
var obstaculo1;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  obstaculo1 = new Rampa(300,69,60,110);
  block1 = new Rampa(200,100,1000,30);
  block2 = new Rampa2(800,300,1200,30);
  block3 = new Rampa3(200,500,1400,30);
  ball = new Bola(20,0,50,50);
  ball.velocityX = 10;

  startB = createButton("Start");
  startB.position(0,80);
  startB.class("startButton");
  startB.mousePressed(start);

  pressO = createButton("Obstaculo")
  pressO.position(258,100);
  pressO.mousePressed(Obstaculo1);

}
function draw() 
{
  background(50);
  Engine.update(engine);
  block1.show();
  block2.show();
  block3.show();
  ball.show();
  obstaculo1.show();
}
function start(){
  Matter.Body.applyForce(ball.body,{x:0, y:0}, {x:0.05, y:0});
}

function Obstaculo1(){
  if (obstaculo1.position.y = 69){
    obstaculo1.position.y == obstaculo1.position.y + 80
  }
  else {
    obstaculo1.position.y == obstaculo1.position.y - 80
  }
}

