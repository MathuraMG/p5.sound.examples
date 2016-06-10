var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc;

function setup() {
  var cnv = createCanvas(100, 100);

  textAlign(CENTER);
  text('click to play', width/2, height/2);

  env = new p5.Env();
  // env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  // env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(220);

  cnv.mousePressed(playEnv);
}

function playEnv(){
  // env.play();
  triOsc.amp(0.2);
}



/*
var osc = [];
var playing = false;
var buttons = [];
var numNotes = 8;
var tones = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.63];
var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75];

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  for (var i = 0; i < numNotes; i++) {
    osc[i] = new p5.Oscillator();
    osc[i].setType('sine');
    osc[i].freq(tones[i]);
    osc[i].start();
    osc[i].amp(env);
    buttons[i] = createButton('Click to toggle tone');
    buttons[i].mousePressed(playTone.bind(this, i));
    // buttons[i].mouseReleased(stopTone.bind(this,i));
  }


}

function draw() {

}

function playTone(index) {
  osc[index].start();
}

function stopTone(index) {
  osc[index].stop();
}

function mouseReleased() {
  for (var i = 0; i < numNotes; i++) {
    stopTone(i);
  }
}

function keyReleased() {
  for (var i = 0; i < numNotes; i++) {
    osc[i].amp(0);
  }
}

function keyPressed() {
  for (var i = 0; i < numNotes; i++) {
    if (keyCode == keyCodes[i]) {
      osc[i].amp(0.5);
      break;
    } else {
      continue;
    }
  }
  return false;
}
*/
