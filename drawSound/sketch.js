//global variables
//Tones from - http://www.phy.mtu.edu/~suits/notefreqs.html
var tones = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.63];
var WIDTH = 500,
  HEIGHT = 500;

var osc;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(50);
  drawToneBreakers();
  colorMode(HSB, 100);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(100);
  osc.start();
  osc.amp(0);
  
}

function draw() {

}

function mouseDragged() {
  // console.log(pmouseX + '--' + pmouseY);
  // console.log(mouseX + '--' + mouseY);
  stroke((mouseX * 100) / width, (mouseY * 100) / width, 100);
  strokeWeight(15);
  line(pmouseX, pmouseY, mouseX, mouseY);
  var tone = map(mouseX,0,width,130,261);
  var volume = map(mouseY, 0,height,0.2,0.7);
  osc.amp(volume);
  osc.freq(tone);
}

function mouseReleased() {
  osc.amp(0.2);
}

function drawToneBreakers() {
  console.log('in function' + tones.length);
  for(var i=0;i<tones.length;i++) {
    fill(150);
    noStroke();
    var temp = map(tones[i],130,261,0,width);
    console.log(temp);
    rect(temp+2,0,5,height);
  }
}