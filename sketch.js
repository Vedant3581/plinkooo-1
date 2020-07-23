var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(500,800);

  ground= new Ground(700,650,800,10);
}

function draw() {
  background(255,255,255);  
  
  display()
  ground.display();
 
  for(var k = 0; k <=width; k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

  for(var j = 40; j <=width; j=j+50){
  plinkos.push(new plinko(j,75));
}
  for(var j = 15; j <=width-10; j=j+50){
  plinkos.push(new plinko(j,175));
}

  for(var j = 0; j < particles.length; j++){
  particles[j].display();
}
  for(var k = 0; k < divisions.length; k++){
  divisions[k]
}

if(frameCount%60===0){
 particles.push(new Particile(random(width/2-10, width/2+10),10,10)); 
}
}

