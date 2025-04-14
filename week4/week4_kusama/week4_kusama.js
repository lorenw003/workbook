var pic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  noStroke();
}


function draw() {
  fill(0);
  translate(random(width), random(height));
  fill(random(50,149), 0, 0);
  for (let i = 0; i < 10; i++) {
    ellipse(15, 20, 40, 40);
    rotate(PI / 3);
  }
}

function mousePressed () {
  background("white");
}
