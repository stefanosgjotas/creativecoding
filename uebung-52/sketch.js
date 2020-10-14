let angle = 0;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('assets/dolphin.png');
  background(0);
  noFill();
  rectMode(CENTER);
  stroke(255);
  strokeWeight(3);
  angleMode(DEGREES);
}

function draw() {

  let steps = 500;
  background(250, 250, 250)

  for (let x = 50; x <= width; x += steps) {


    push(); //Koordinatensystem abspeichern
    translate(x, height / 2); //in die Mitte des jeweiligen Elements schieben
    rotate(angle);
    point(0); //aktuelle Nullposition markieren
    image(img, 0, 0);
    pop();

    fill(30, 220, 250, 90)
    noStroke();
    rect(0, height, windowWidth * 3, windowHeight)

    angle = angle + 0.3;
  }
}
