const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, playerBase, compPlayer, Player


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(windowWidth-300, random(450, windowHeight-300),180, 150);
   compPlayer = new ComputerPlayer(windowWidth-285, computerBase.body.position.y-153, 50, 180);
   playerBase = new PlayerBase(300, random(450, windowHeight-300), 180, 150);
   Player = new player(285, playerBase.body.position.y-153, 50, 180);
   //World.add(world, computerBase)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display()
   playerBase.display()

   //display Player and computerplayer
   Player.display()
   compPlayer.display()



}
