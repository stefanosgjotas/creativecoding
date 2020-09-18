
let scale=1.6;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(0,148, 116);
  stroke(255, 150, 53);
  strokeWeight(25);

  fill(255, 200, 0);
  let radius = 300;
  arc(350, 350, radius*scale, radius*scale, 0, 45);
  arc(350, 350, 300*scale, 300*scale, 45, 90);
  arc(350, 350, 300*scale, 300*scale, 90, 135);
  arc(350, 350, 300*scale, 300*scale, 135, 180);
  arc(350, 350, 300*scale, 300*scale, 180, 225);
  arc(350, 350, 300*scale, 300*scale, 225, 270);
  arc(350, 350, 300*scale, 300*scale, 270, 315);
  arc(400, 330, 300*scale, 300*scale, 315, 360);


  strokeWeight(50);
  stroke(186, 6, 56);
  point(490,420);
  point(280,200);
  point(200,380);
  point(380,220);
  point(250,300);
  point(390,500);
  point(420,380);
  point(320,440);
  point(570,260);
  point(500,300);

  strokeWeight(30);
  stroke(252, 232, 191);
  point(360,420);
  point(490,380);
  point(380,180);
  point(240,380);
  point(200,300);
  point(320,240);
  point(500,260);
  point(260,500);

}
