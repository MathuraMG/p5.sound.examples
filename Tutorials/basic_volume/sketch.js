 /*
 * code from https://p5js.org/reference/#/p5.Amplitude
 */
var sound, amplitude, cnv;
var voiceButton, fileButton;

function preload(){
  sound = loadSound('test.wav');
}
function setup() {
  cnv = createCanvas(100,100);
  amplitude = new p5.Amplitude();

  fileButton = createButton('file'); 
  fileButton.mousePressed(filePlay);
  

}
function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}

function filePlay() {
  if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
}
