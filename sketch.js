const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []; 
var divisionHeight=300;
var score =0;
var PLAY = 1
var END = 0
var gameState = PLAY
var particle;
var count = 0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);


  Engine.update(engine);
  ground.display();

  if (gameState === END) {
    textSize(50)
    fill("red")
    text("GAME OVER",200,300)    
  }

  if (gameState === PLAY) {
    text("300",20,600)
    text("100",100,600)
    text("50",180,600)
    text("200",260,600)
    text("500",340,600)
    text("500",420,600)
    text("300",500,600)
    text("50",580,600)
    text("200",660,600)
    text("400",740,600)
    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
      
    }
 
   for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }    
    if (particle != null) {
      particle.display();
      
      if (particle.body.position.y > 760) {
        if (particle.body.position.x > 0 && particle.body.position.x < 80) {
          score = score + 300  
          particle = null      
        }
        else if (particle.body.position.x > 80 && particle.body.position.x < 160) {
          score+=100
          particle = null
        }
        else if (particle.body.position.x > 160 && particle.body.position.x < 240) {
          score+=50
          particle = null
        } 
        else if(particle.body.position.x > 240 && particle.body.position.x < 320){
          score+=200
          particle = null
        }
        else if(particle.body.position.x > 320 && particle.body.position.x < 400){
          score+=500
          particle = null
        }
        else if(particle.body.position.x > 400 && particle.body.position.x < 480){
          score+=500
          particle = null
        }
        else if(particle.body.position.x > 480 && particle.body.position.x < 560){
          score+=300
          particle = null
        }
        else if(particle.body.position.x > 560 && particle.body.position.x < 640){
          score+=50
          particle = null
        }
        else if(particle.body.position.x > 640 && particle.body.position.x < 720){
          score+=200
          particle = null
        }
        else if(particle.body.position.x > 720 && particle.body.position.x < 800){
          score+=400
          particle = null
        }
        }

    }
         
  }
 
  if (count > 5) {
    gameState = END    
  }

  


  }

  function mousePressed(){
    if (gameState !== END) {
      count = count + 1
      particle = new Particle(mouseX,10,10,10)     
    }
  }

