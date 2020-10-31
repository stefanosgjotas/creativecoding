let key = '06e280b15621fb57f14de8e91c05e79e';
let angle = 0;
let windstaerke = 0;
let windrad = 0;
let temperature = 0;
let kompass = 0;
let input, button;

var gui;

// Hier werden die Variablen der Regler definiert
var wind_speed = 0;
var wind_direction = 0;
var temperature_color = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=Zürich';
  loadJSON(url, gotWeather);
  angleMode(DEGREES);
  strokeCap(PROJECT);

  gui = createGui('p5.gui');
  sliderRange(0, 360);
  gui.addGlobals('wind_direction');
  sliderRange(0, 40);
  gui.addGlobals('wind_speed', 'temperature_color');

  input = createInput();
  input.position(windowWidth - 420, windowHeight - 100);
  button = createButton('GO!');
  button.position(input.x + input.width + 10, windowHeight - 100);
  button.mousePressed(reloadJson);

}

function draw() {

  // Definition der Farbverläufe, von bis, inkl. Mapping (worauf bezieht es sicht, von bis Wert, von bis Anzeige der Farbe)
  let c1 = lerpColor(color('#1c4794'), color('#951c1c'), map(temperature, 0, 40, 0, 1)); // Reserve Farben
  let c2 = lerpColor(color('#77ff94'), color('#77fdff'), map(wind_direction, 0, 360, 0, 1));
  let c3 = lerpColor(color('#1c4794'), color('#951c1c'), map(temperature_color, 0, 30, 0, 1));
  let c4 = color(248, 179, 45);

  background(21, 21, 21);

  // Ab hier werden die Pfeile für die Windrichtung definiert

  // Alle 150Px folgt ein Pfeil
  let steps = 150;

  for (let x = 25; x <= windowWidth * 2; x += steps) { // Die X Achse des ersten Pfeiles beginnt bei 25Px
    for (let y = 30; y <= windowHeight * 2; y += steps) { // Die Y Achse des ersten Pfeiles beginnt bei 30Px

      // Erstellung des Pfeiles mit einer Grössenskala von 0.5, Farbfüllung c2 sowie Rotation sind abhängig von der Windrichtung (0 bis 360°)
      push();
      scale(0.5, 0.5);
      fill(c2);
      translate(x, y);
      rotate(wind_direction); // Dieser Wert reglet die Drehung durch den GUI Regler UND durch die Wetter API Daten
      beginShape();
      vertex(0, -20); // Durch die Minuswerte wird der Pfeil so gesetzt, dass dessen Mitte genau am XY Punkt sind
      vertex(15, 20);
      vertex(0, 10);
      vertex(-15, 20); // Durch die Minuswerte wird der Pfeil so gesetzt, dass dessen Mitte genau am XY Punkt sind
      endShape(CLOSE);
      pop();
    }
  }

  background(21, 21, 21, 100);

  rectMode(CENTER);
  angle += windrad + 0.1; // Die Drehung erfolgt durch den Wert Windrad (abgeleitet von der Windstärke). Ohne Wind dreht sich das Rad trotzdem um 0.1Px pro Frame

  // Hier entsteht das Windrad, angefangen durch Push, und mit Translate neu ausgerichtet
  push();
  strokeWeight(5);
  noFill();

  translate(width / 3 + 50, height / 2);
  rotate(-angle); // Der MinusAngle bewirkt, dass sich das Rad umgekehrt dreht (realistischer)

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

  // Dieser Code definiert die Drehung durch den GUI Regler
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

  // Der Code für die Textzeilen Name, Grad, Windrichtung und Windstärke
  fill(c2);
  noStroke();
  textSize(95);
  textAlign(LEFT, TOP);
  textFont('Impact');
  text(name, windowWidth - 420, windowHeight / 2); // die Variable name bezieht sich auf den Wert (Name) aus der Wetter API

  textSize(40);
  noFill();
  stroke(255);
  strokeWeight(1);
  text(temperature_color, windowWidth - 420, 630) & text('C°', windowWidth - 370, 630); // die Variable temperature_color bezieht sich auf den Wert (Temperatur) aus der Wetter API
  text(kompass, windowWidth - 420, 680); // die Variable kompass bezieht sich auf den Wert (Windrichtung in Grad) aus der Wetter API
  text(windstaerke, windowWidth - 420, 730) & text('h/km', windowWidth - 370, 730); // die Variable windstaerke bezieht sich auf den Wert (Wind Speed) aus der Wetter API
  // text(windstaerke + 'h/km', windowWidth - 420, 730); // Alternative Schreibweise für den Text mit Leerschlag
  noStroke();

}

function gotWeather(weather) {
  windstaerke = weather.current.wind_speed; // Angaben in km
  windrad = map(windstaerke, 0, 200, 0, 20); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 0.1 Grad weiter pro Frame
  console.log(windstaerke)

  wind_direction = weather.current.wind_degree; // Angaben in Grad (0-360°)
  console.log(wind_direction)

  kompass = weather.current.wind_dir; // Angaben in Buchstaben (N, S, W, E etc.)
  console.log(kompass)

  name = weather.location.name; // Angaben in Buchstaben (zb. Athens)
  console.log(name)

  temperature_color = weather.current.temperature; // Angaben in Grad Celsius
  console.log(temperature)

}

function reloadJson() {
  // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

  let ort = input.value();
  let url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;

  // dann lädt die Funktion gotWeather diese neuen Daten
  loadJSON(url, gotWeather);
}
