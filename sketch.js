const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubber2,rubber3;
var stone,stone2,stone3;
var iron,iron2;
var ball,ball2,ball3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,500,60)
    rubber2 = new Rubber(500,90,30)
    rubber3 = new Rubber(800,90,30)
    stone =  new Stone(800,300,100,50)
    stone2=  new Stone(400,500,80,20)
    stone3=  new Stone(310,580,280,10)
    iron  =  new Iron (500,400,200,100)
    iron2  =  new Iron (1000,500,100,60)
    ball = new Ball(600,250,50)
    ball2 = new Ball(80,400,30)
    ball3 = new Ball(900,100,100)
}

function draw(){
    background("black");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    stone2.display();
    stone3.display();
    iron.display();
    iron2.display();
    rubber2.display();
    rubber3.display();
    ball.display();
    ball2.display();
    ball3.display();
}