const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;

var token ;
var darr = [];


function setup()
 {
  createCanvas(800,800);
  engine=Engine.create()
  world = engine.world; 
  token = new Plinko(40,50,100)
 }

function draw()
 {
  //background(0);  
  token.display();
 }