let key = '06e280b15621fb57f14de8e91c05e79e';
let angle = 0;
let windstaerke = 0;
let windrad = 0;
let temperature = 0;
let richtung = 0;
let winddir = 0;
let kompass = 0;
let windspeed = 0;
let input, button;

var gui;

var wind_speed = 0;
var wind_direction = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let url = 'https://api.weatherstack.com/current?access_key=06e280b15621fb57f14de8e91c05e79e&query=Zürich';
  loadJSON(url, gotWeather);
  angleMode(DEGREES);
  strokeCap(PROJECT);

  gui = createGui('p5.gui');
  sliderRange(0, 360);
  gui.addGlobals('wind_direction');
  sliderRange(0, 40);
  gui.addGlobals('wind_speed');

  input = createInput();
  input.position(windowWidth - 420, windowHeight - 100);
  button = createButton('GO!');
  button.position(input.x + input.width + 10, windowHeight - 100);
  button.mousePressed(reloadJson);

}

function draw() {

  let c1 = lerpColor(color('#1c4794'), color('#951c1c'), map(temperature, 0, 40, 0, 1));
  let c2 = lerpColor(color('#77ff94'), color('#77fdff'), map(richtung, 0, 360, 0, 1));
  let c3 = lerpColor(color('#1c4794'), color('#951c1c'), map(temperature, 0, 20, 0, 1));
  let c4 = color(248, 179, 45);

  background(21, 21, 21);

  let steps = 150;

  for (let x = 25; x <= windowWidth * 2; x += steps) {
    for (let y = 30; y <= windowHeight * 2; y += steps) {

      push();
      scale(0.5, 0.5);
      fill(c2);
      translate(x, y);
      rotate(richtung);
      rotate(wind_direction);
      beginShape();
      vertex(0, -20);
      vertex(15, 20);
      vertex(0, 10);
      vertex(-15, 20);
      endShape(CLOSE);
      pop();
    }
  }

  background(21, 21, 21, 100);

  rectMode(CENTER);
  angle += windrad + 0.1;

  push();
  strokeWeight(5);
  noFill();

  translate(width / 3 + 50, height / 2);
  rotate(-angle);

  scale(2, 2);

  fill(21, 21, 21, 100);
  stroke(c2)
  beginShape();
  vertex(0, 0);
  vertex(150, 0);
  vertex(150, 154);
  vertex(0, 300);
  endShape(CLOSE);

  stroke(c4);
  beginShape();
  vertex(0, 0);
  vertex(0, 150);
  vertex(-154, 150);
  vertex(-300, 0);
  endShape(CLOSE);

  stroke(c2);
  beginShape();
  vertex(0, 0);
  vertex(-150, 0);
  vertex(-150, -154);
  vertex(0, -300);
  endShape(CLOSE);

  stroke(c4);
  beginShape();
  vertex(0, 0);
  vertex(0, -150);
  vertex(154, -150);
  vertex(300, 0);
  endShape(CLOSE);

  stroke(c2);
  beginShape();
  vertex(0, 0);
  vertex(150, 0);
  vertex(150, 150);
  endShape(CLOSE);

  stroke(c4);
  beginShape();
  vertex(0, 0);
  vertex(0, 150);
  vertex(-150, 150);
  endShape(CLOSE);

  stroke(c2);
  beginShape();
  vertex(0, 0);
  vertex(-150, 0);
  vertex(-150, -150);
  endShape(CLOSE);

  stroke(c4);
  beginShape();
  vertex(0, 0);
  vertex(0, -150);
  vertex(150, -150);
  endShape(CLOSE);

  stroke(c2);
  fill(21, 21, 21);
  ellipse(0, 0, 30, 30);
  noStroke();

  pop();

  for (let i = 1; i <= wind_speed; i++) {
    angle = angle + 0.1;
  }

  push();
  fill(c3);
  beginShape();
  vertex(windowWidth - 100, 0);
  vertex(windowWidth, 0);
  vertex(windowWidth, windowHeight);
  vertex(windowWidth - 600, windowHeight);
  endShape(CLOSE);
  pop();

  fill(c2);
  noStroke();
  textSize(95);
  textAlign(LEFT, TOP);
  textFont('Impact');
  text(name, windowWidth - 420, windowHeight / 2);

  textSize(40);
  noFill();
  stroke(255);
  strokeWeight(1);
  text(temperature, windowWidth - 420, 630) & text('C°', windowWidth - 370, 630);
  text(kompass, windowWidth - 420, 680);
  text(windstaerke, windowWidth - 420, 730) & text('h/km', windowWidth - 370, 730);
  noStroke();

}

function gotWeather(weather) {
  windstaerke = weather.current.wind_speed; // Angaben in km!
  windrad = map(windstaerke, 0, 200, 0, 20); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 20 Grad weiter pro Frame
  console.log(windstaerke)

  richtung = weather.current.wind_degree;
  console.log(richtung)

  kompass = weather.current.wind_dir;
  console.log(kompass)

  name = weather.location.name;
  console.log(name)

  temperature = weather.current.temperature; // Angaben in Grad!
  console.log(temperature)

}

function reloadJson() {
  // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

  let ort = input.value();
  let url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;

  // dann lädt die Funktion gotWeather diese neuen Daten
  loadJSON(url, gotWeather);
}
