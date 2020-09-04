function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(0,148, 116);
  stroke(255, 150, 53);


  fill(255, 200, 0);
  let radius = 300;
  arc(350, 350, radius, radius, 0, 45);
  arc(350, 350, 300, 300, 45, 90);
  arc(350, 350, 300, 300, 90, 135);
  arc(350, 350, 300, 300, 135, 180);
  arc(350, 350, 300, 300, 180, 225);
  arc(350, 350, 300, 300, 225, 270);
  arc(350, 350, 300, 300, 270, 315);
  arc(400, 330, 300, 300, 315, 360);



  strokeWeight(25);
  stroke(186, 6, 56);
  point(400,420);
  point(280,280);
  point(240,380);
  point(380,240);
  point(380,300);
  point(300,380);
  point(400,380);
  point(320,440);
  point(460,300);
  point(500,300);

  strokeWeight(30);
  stroke(252, 232, 191);
  point(400,420);
  point(380,240);
  point(240,380);
  point(500,300);

  strokeWeight(5);
  stroke(0, 0, 0);
  //   point(350+Math.random()*radius,350+Math.random()*radius)

  strokeWeight(20);

}
