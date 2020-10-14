let angle = 0;

var gui;

var anz = 10; // dieser Wert stammt noch aus einer anderen Übung
var distanz = 25; // dieser Wert stammt noch aus einer anderen Übung


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeCap(PROJECT);

  noFill();
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');

}

function draw() {

  let a = 6;
  let side = 100;
  let abstand = 150;


  let steps = 150;
  background(0, 50)
  noStroke();
  for (let x = 15; x <= width; x += steps) {
    for (let y = 20; y <= height; y += steps) {

      push();
      translate(x, y);
      rotate(angle);
      beginShape();
      vertex(0, 0);
      vertex(0, 30);
      vertex(30, 0);
      endShape(CLOSE);
      pop();
    }
  }

  // let h = map(mouseX, 0, width, 0, 255);
  // Für die Änderung der Hintergrundfarbe mit der Mausposition X
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

  angle = angle + 1;

}
