

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {



  background(0);
  stroke(255, 250, 30);

  let x=10;


  for (let x = 0; x <= width; x = x+50) {

  line(x,0,windowWidth/2,windowHeight);


}


}
