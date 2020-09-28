let scale = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {

  let h = map(mouseX, 0, width, 0, 255);

  let stepsx = 490 * scale;
  let stepsy = 490 * scale;

  background(h, 100, 150);


  for (var x = -150; x <= width; x += stepsx) {
    for (var y = -150; y <= height; y += stepsy) {


      beginShape();
      fill(58, 58, 60)
      vertex(175 + x * scale, 175 + y * scale);
      vertex(325 + x * scale, 175 + y * scale);
      vertex(325 + x * scale, 325 + y * scale);
      vertex(175 + x * scale, 325 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(58, 58, 60)
      vertex(145 + x * scale, 250 + y * scale);
      vertex(250 + x * scale, 145 + y * scale);
      vertex(355 + x * scale, 250 + y * scale);
      vertex(250 + x * scale, 355 + y * scale);
      endShape(CLOSE);





      beginShape();
      fill(58, 58, 60)
      vertex(5 + x * scale, 5 + y * scale);
      vertex(105 + x * scale, 5 + y * scale);
      vertex(75 + x * scale, 35 + y * scale);
      vertex(75 + x * scale, 75 + y * scale);
      vertex(35 + x * scale, 75 + y * scale);
      vertex(5 + x * scale, 105 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(58, 58, 60)
      vertex(395 + x * scale, 5 + y * scale);
      vertex(495 + x * scale, 5 + y * scale);
      vertex(495 + x * scale, 105 + y * scale);
      vertex(465 + x * scale, 75 + y * scale);
      vertex(425 + x * scale, 75 + y * scale);
      vertex(425 + x * scale, 35 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(58, 58, 60)
      vertex(425 + x * scale, 425 + y * scale);
      vertex(465 + x * scale, 425 + y * scale);
      vertex(495 + x * scale, 395 + y * scale);
      vertex(495 + x * scale, 495 + y * scale);
      vertex(395 + x * scale, 495 + y * scale);
      vertex(425 + x * scale, 465 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(58, 58, 60)
      vertex(5 + x * scale, 395 + y * scale);
      vertex(35 + x * scale, 425 + y * scale);
      vertex(75 + x * scale, 425 + y * scale);
      vertex(75 + x * scale, 465 + y * scale);
      vertex(105 + x * scale, 495 + y * scale);
      vertex(5 + x * scale, 495 + y * scale);
      endShape(CLOSE);









      beginShape();
      fill(247, 148, 29);
      vertex(75 + x * scale, 75 + y * scale);
      vertex(175 + x * scale, 75 + y * scale);
      vertex(175 + x * scale, 175 + y * scale);
      vertex(75 + x * scale, 175 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(247, 148, 29)
      vertex(325 + x * scale, 75 + y * scale);
      vertex(425 + x * scale, 75 + y * scale);
      vertex(425 + x * scale, 175 + y * scale);
      vertex(325 + x * scale, 175 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(247, 148, 29)
      vertex(325 + x * scale, 325 + y * scale);
      vertex(425 + x * scale, 325 + y * scale);
      vertex(425 + x * scale, 425 + y * scale);
      vertex(325 + x * scale, 425 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(247, 148, 29)
      vertex(75 + x * scale, 325 + y * scale);
      vertex(175 + x * scale, 325 + y * scale);
      vertex(175 + x * scale, 425 + y * scale);
      vertex(75 + x * scale, 425 + y * scale);
      endShape(CLOSE);




      beginShape();
      fill(247, 148, 29)
      vertex(5 + x * scale, 250 + y * scale);
      vertex(75 + x * scale, 175 + y * scale);
      vertex(145 + x * scale, 250 + y * scale);
      vertex(75 + x * scale, 325 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(247, 148, 29)
      vertex(175 + x * scale, 75 + y * scale);
      vertex(250 + x * scale, 5 + y * scale);
      vertex(325 + x * scale, 75 + y * scale);
      vertex(250 + x * scale, 145 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(247, 148, 29)
      vertex(355 + x * scale, 250 + y * scale);
      vertex(425 + x * scale, 175 + y * scale);
      vertex(495 + x * scale, 250 + y * scale);
      vertex(425 + x * scale, 325 + y * scale);
      endShape(CLOSE);

      beginShape();
      fill(247, 148, 29)
      vertex(175 + x * scale, 425 + y * scale);
      vertex(250 + x * scale, 355 + y * scale);
      vertex(325 + x * scale, 425 + y * scale);
      vertex(250 + x * scale, 495 + y * scale);
      endShape(CLOSE);

    }
  }

}
