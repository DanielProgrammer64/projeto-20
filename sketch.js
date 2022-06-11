// criando variáveis constates (hardcore)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//mais delas
let engine;
let world;
var ball;
var ground;
var wedge;
var angle=90;
var poly;
var push
var translate;
//var bar;
//var rotation_ops;


//definindo as funções
function setup() {
  
  createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var ops ={
 isStatic : true}

 // rotation_ops ={
  // rotate : 0.25
 //}

// criando os corpos
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,350,400,20,ground_options);
  World.add(world,ground);
  
  wall = Bodies.rectangle(300, 250, 70, 10, ground_options);
  World.add(world,wall);

  wedge = Bodies.rectangle(450, 25 ,50 ,50, ops);
  World.add(world,wedge);

 // bar = Bodies.rectangle(250, 400, 60, 60, rotation_ops);
 //World.add(world,bar);
   
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

// função desenho 
function draw() {

 background(25);
 Engine.update(engine);

Matter.Body.rotate(wedge,angle);
push();
translate(wedge.position.x,wedge.position.y);
rect(0,0,400,20);
angle += 150;

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  
 rect(wall.position.x,wall.position.y,150,20);

}

