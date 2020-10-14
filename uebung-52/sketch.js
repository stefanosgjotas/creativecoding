let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);


}

function draw() {


  background(0, 0, 139, 10);

  noFill();
  stroke(255);
  rectMode(CENTER); //mit diesem Befehl wird das Rechteck von der Mitte her gezeichnet statt von der oberen linken Ecke
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 400, 400);
  pop();

  fill(100, 210, 150);
  noStroke();
  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(100, 0, 100, 100);
  pop();

  noFill();
  stroke(255, 100, 150);
  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(350, 0, 100, 100);
  pop();

  noFill();
  stroke(255, 10, 50);
  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(475, 0, 100, 100);
  pop();

  noFill();
  stroke(150, 150, 105);
  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(600, 0, 100, 100);
  pop();


  noFill();
  stroke(255);
  rectMode(CENTER);
  push();
  translate(width, height);
  rotate(angle);
  rect(0, 0, 350, 350);
  pop();

  fill(100, 210, 150);
  noStroke();
  push();
  translate(width, height);
  rotate(-angle);
  ellipse(100, 0, 75, 75);
  pop();


  noFill();
  stroke(255);
  rectMode(CENTER);
  push();
  translate(0, 0);
  rotate(angle);
  rect(0, 0, 350, 350);
  pop();

  fill(100, 210, 150);
  noStroke();
  push();
  translate(0, 0);
  rotate(-angle);
  ellipse(100, 0, 75, 75);
  pop();


  noFill();
  stroke(255);
  rectMode(CENTER);
  push();
  translate(0, height);
  rotate(angle);
  rect(0, 0, 350, 350);
  pop();

  fill(100, 210, 150);
  noStroke();
  push();
  translate(0, height);
  rotate(-angle);
  ellipse(100, 0, 75, 75);
  pop();


  noFill();
  stroke(255);
  rectMode(CENTER);
  push();
  translate(width, 0);
  rotate(angle);
  rect(0, 0, 350, 350);
  pop();

  fill(100, 210, 150);
  noStroke();
  push();
  translate(width, 0);
  rotate(-angle);
  ellipse(100, 0, 75, 75);
  pop();




  angle = angle + 1;
}
