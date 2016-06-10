/***************************************************
 * Original code from 
 * https://github.com/shiffman/Video-Lesson-Materials/tree/master/code_p5.js_sound/playSong
 * 
 **************************************************/
var song;
var sliderRate;
var sliderPan;
var playButton;


function setup() {
  createCanvas(200, 200);
  song = loadSound("test.wav", loaded);
  song.setVolume(0.5);
  button = createButton('play');
  button.mousePressed(togglePlaying);
  sliderRate = createSlider(0.1, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderAmp = createSlider(0.1, 1, 0.5, 0.01);
}

function loaded() {
  console.log('loaded');
}

function draw() {
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
  song.amp(sliderAmp.value());
}

function togglePlaying() {
  if(song.isPlaying()){
    song.pause();
    button.html('play');
  }
  else {
    song.loop();
    button.html('pause');
  }
}
