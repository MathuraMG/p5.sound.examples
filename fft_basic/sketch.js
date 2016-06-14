//code from - https://p5js.org/reference/#/p5.FFT
function preload(){
  sound = loadSound('mystery.wav');
  print('loaded');
}

function setup(){
  var cnv = createCanvas(window.innerWidth,window.innerHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
  colorMode(HSB);
}

function draw(){
  background(0);

  var spectrum = fft.analyze();
  noStroke();

  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var hue = map(i,0,spectrum.length,0,300);
    fill(hue,50,80);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }
  // fill(0,100,100);
  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
