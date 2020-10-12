let angle = 0;

function setup() {
  createCanvas(600, 600);
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

  fill(255, 10, 50);
  noStroke();
  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(100, 0, 100, 100);
  pop();



  angle = angle + 1;
}
