let c = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(PROJECT);
}

function draw() {

  background(0);
  stroke(230, 150, 30);
  fill(255,60);

  let a = 6;
  let side = 100;
  let abstand=25;
  stroke(255)
  strokeWeight(1)
  fill(0,0);
  ellipse(a,height/2,a,a);

  for (let a = 0; a < mouseX; a = a+abstand) {
  ellipse(a,height/2,a,a);

}

  fill (255, 255, 255);
  ellipse(mouseX, mouseY, 40, 40);


}
