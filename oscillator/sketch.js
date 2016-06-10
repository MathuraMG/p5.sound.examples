var osc;
var playing = false;
var button1;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(261.63);
  osc.amp(0);
  osc.start();
  button1 = createButton('Click to toggle tone');
  button1.mousePressed(playTone);
}

function draw() {

}

function playTone() {
  
  if (!playing) {
    osc.amp(0.5);
    osc.start();
    playing = true;
  } else {
    osc.stop();
    playing = false;
  }
}

