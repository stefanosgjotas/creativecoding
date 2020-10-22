let angle = 0;

var gui;

var speed = 5;
var direction = 4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeCap(PROJECT);

  noFill();
  gui = createGui('p5.gui');
  gui.addGlobals('speed', 'direction');

}

function draw() {

  let steps = 150;
  background(0, 50)
  noStroke();
  for (let x = 15; x <= width; x += steps) {
    for (let y = 20; y <= height; y += steps) {
      for (let z = 0; z <= direction; z++) {

      push();
      translate(x, y);
      rotate(direction);
      beginShape();
      vertex(0, 0);
      vertex(0, 30);
      vertex(30, 0);
      endShape(CLOSE);
      pop();
    }
  }
}

  background(0, 0, 155, 90);

  fill(100, 210, 150);
  stroke(0, 139, 100);
  rectMode(CENTER);
  push();
  translate(width / 2, height / 2);
  rotate(-angle);

  beginShape();
  vertex(0, 0);
  vertex(150, 0);
  vertex(150, 150);
  vertex(0, 300);
  endShape(CLOSE);

  fill(0, 139, 100);
  beginShape();
  vertex(0, 0);
  vertex(150, 0);
  vertex(150, 150);
  endShape(CLOSE);

  fill(100, 210, 150);
  beginShape();
  vertex(0, 0);
  vertex(0, 150);
  vertex(-150, 150);
  vertex(-300, 0);
  endShape(CLOSE);

  fill(0, 139, 100);
  beginShape();
  vertex(0, 0);
  vertex(0, 150);
  vertex(-150, 150);
  endShape(CLOSE);

  fill(100, 210, 150);
  beginShape();
  vertex(0, 0);
  vertex(-150, 0);
  vertex(-150, -150);
  vertex(0, -300);
  endShape(CLOSE);

  fill(0, 139, 100);
  beginShape();
  vertex(0, 0);
  vertex(-150, 0);
  vertex(-150, -150);
  endShape(CLOSE);


  fill(100, 210, 150);
  beginShape();
  vertex(0, 0);
  vertex(0, -150);
  vertex(150, -150);
  vertex(300, 0);
  endShape(CLOSE);

  fill(0, 139, 100);
  beginShape();
  vertex(0, 0);
  vertex(0, -150);
  vertex(150, -150);
  endShape(CLOSE);

  stroke(100, 210, 150);
  fill(0, 139, 100);
  ellipse(0, 0, 100, 100);

  pop();

  for (let i = 1; i <= speed; i++) {
    angle = angle + 0.1;
  }

}
