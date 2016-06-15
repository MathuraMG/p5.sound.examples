/**************
 * Code from p5.sound documentation
************/

var mySound, myPhrase, myPart;
var pattern = [1,0,0.5,0,0,2,2,0,3,1,2];
var msg = 'click to play';

function preload() {
  mySound = loadSound('beatbox.mp3');
}

function setup() {
  noStroke();
  fill(255);
  textAlign(CENTER);
  masterVolume(1);
  
  myPhrase = new p5.Phrase('bobox', makeSound, pattern);
  myPart = new p5.Part();
  myPart.addPhrase(myPhrase);
  myPart.setBPM(100);
}

function draw() {
  background(0);
  text(msg, width/2, height/2);
}

function makeSound(time, playbackRate) {
  mySound.rate(playbackRate);
  mySound.play(time);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    myPart.start();
    msg = 'playing pattern';
  }
}
