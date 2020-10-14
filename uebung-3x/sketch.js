function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let h = map(mouseX, 0, windowWidth, 0, 255);
  let b = map(mouseX, 0, windowWidth, 255, 30);
  let s = map(mouseX, 0, windowWidth, 0, 30);


  background(h, 0, 150);
  strokeWeight(s)

  let x = 10;


  for (let x = 0; x <= mouseX; x = x + 60) {

    line(x, 0, x, height);
    stroke(x, 255, 255, windowWidth);



  }
  noStroke(0);
  fill(b, 30, 255);
  ellipse(mouseX, mouseY, 100, 100);


}
