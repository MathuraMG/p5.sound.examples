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
}

function draw(){
  background(0);

  var spectrum = fft.analyze();
  noStroke();
  fill(0,255,0); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    var rad = map(i, 0, spectrum.length, 0, height);
    var sat = map(spectrum[i], 0, 255, 0,255);
    noFill();
    stroke(sat)
    ellipse(width/2,height/2,rad,rad);
    // rect(x, height, width / spectrum.length, h )
  }

  fill(255);
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
