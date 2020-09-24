
function setup() {
  createCanvas(500, 500);
}

function draw() {



  // background(255,255,255);
  background(0);
  stroke(58,58,60);
  let x=10;


  beginShape();
  fill(random(255), 0, random(255));
  stroke(random(255), 0, random(255),0);
  // fill(58,58,60)
  vertex(175, 175);
  vertex(325, 175);
  vertex(325, 325);
  vertex(175, 325);
  endShape(CLOSE);

  beginShape();
  // fill(random(255), 0, random(255));
  stroke(58,58,60,0);
  fill(58,58,60)
  vertex(145, 250);
  vertex(250, 145);
  vertex(355, 250);
  vertex(250, 355);
  endShape(CLOSE);


  stroke(247,148,29,0);

  beginShape();
  fill(247,148,29);
  vertex(75, 75);
  vertex(175, 75);
  vertex(175, 175);
  vertex(75, 175);
  endShape(CLOSE);

  beginShape();
  fill(247,148,29)
  vertex(325, 75);
  vertex(425, 75);
  vertex(425, 175);
  vertex(325, 175);
  endShape(CLOSE);

  beginShape();
  fill(247,148,29)
  vertex(325, 325);
  vertex(425, 325);
  vertex(425, 425);
  vertex(325, 425);
  endShape(CLOSE);

  beginShape();
  fill(247,148,29)
  vertex(75, 325);
  vertex(175, 325);
  vertex(175, 425);
  vertex(75, 425);
  endShape(CLOSE);




  beginShape();
  fill(247,148,29)
  vertex(5, 250);
  vertex(75, 175);
  vertex(145, 250);
  vertex(75, 325);
  endShape(CLOSE);

  beginShape();
  fill(247,148,29)
  vertex(175, 75);
  vertex(250, 5);
  vertex(325, 75);
  vertex(250, 145);
  endShape(CLOSE);

  beginShape();
  fill(247,148,29)
  vertex(355, 250);
  vertex(425, 175);
  vertex(495, 250);
  vertex(425, 325);
  endShape(CLOSE);

  beginShape();
  fill(247,148,29)
  vertex(175, 425);
  vertex(250, 355);
  vertex(325, 425);
  vertex(250, 495);
  endShape(CLOSE);


//   line(x,0,x,height);
//
//   for (let x = 0; x <= width; x = x+10) {
//
//   // x=x+10;
//   line(x,0,300,height);
//
//
// }


}
