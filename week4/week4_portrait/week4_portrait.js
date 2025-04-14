let radius = 100

function setup() {
 createCanvas(windowWidth, windowHeight);
 noStroke();
 
 ellipseMode(RADIUS);
 background(random(255), random(170), random(120));
}


function draw() {
  fill("blue");
  ellipse(width/2, height/2, 800, 400);
  
  fill("green");
  circle (400, 400, 350);
  
  let leftX = constrain(mouseX, 150, 650);
  
  fill(1);
  circle(leftX, 400, radius);
  
  fill("green");
  circle (1100, 400, 350);
 
  let rightX = constrain(mouseX, 850, 1350);
  fill(1);
  
  circle(rightX, 400, radius);
  
  circle(width/2, 700, 50);
  
}
