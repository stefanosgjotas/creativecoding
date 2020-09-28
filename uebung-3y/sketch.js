
var gui;

var anz = 10;
var distanz = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(PROJECT);

  noFill();
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  // only call draw when then gui is changed
  noLoop();

}

function draw() {
  background(0);
  stroke(230, 150, 3);
  let a = 6;
  let side = 100;

  let abstand=100;
  strokeWeight(1)

  for (let i = 1; i <= anz; i++) {
    strokeWeight(i);
    fill(0,0);
    a+=abstand;
    ellipse(distanz * i,height/3,a,a);

  }


}
