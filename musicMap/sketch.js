//global variables
var tones = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.63];
var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75];
var WIDTH = 500,
  HEIGHT = 500;
var numNotes;
var playButton;
var osc;
var xLine = 0;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(50);
  colorMode(HSB, 100);
  numNotes = tones.length;
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(100);
  osc.start();
  osc.amp(0);

}

function draw() {

}

function mouseDragged() {

}

function mouseReleased() {
  osc.amp(0.2);
}


function keyPressed() {
  console.log('key pressed');
  for (var i = 0; i < numNotes; i++) {
    var xScale = WIDTH / numNotes;
    if (keyCode == keyCodes[i]) {
      rect(20, i * xScale, 50, xScale);
    } else {
      continue;
    }
  }
  return false;
}