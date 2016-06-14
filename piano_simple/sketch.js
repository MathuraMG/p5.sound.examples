var osc = [];
var playing = false;
var buttons = [];
var numNotes = 8;
var tones = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.63];
var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75];

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  for (var i = 0; i < numNotes; i++) {
    osc[i] = new p5.Oscillator();
    osc[i].setType('sine');
    osc[i].freq(tones[i]);
    osc[i].start();
    osc[i].amp(0);
    buttons[i] = createButton('');
    buttons[i].mousePressed(playTone.bind(this, i));
    buttons[i].mouseReleased(stopTone.bind(this,i));
    buttons[i].size(40,200);
    buttons[i].style('background-color','#fff');
  }
}

function draw() {

}

function playTone(index) {
  console.log('pressed -- ' + index);
  osc[index].fade(1,0.1);
}

function stopTone(index) {
  osc[index].fade(0,0.01);
}

function keyReleased() {
  for (var i = 0; i < numNotes; i++) {
    osc[i].fade(0,0.1);
  }
}

function keyPressed() {
  for (var i = 0; i < numNotes; i++) {
    console.log(keyCode);
    if (keyCode == keyCodes[i]) {
      osc[i].fade(1,0.01);
      break;
    } else {
      continue;
    }
  }
  return false;
}
