function preload(){
  sound = loadSound('assets/mystery.wav');
}

function loaded() {
  console.log('loaded');
}

function setup(){
  var cnv = createCanvas(window.innerWidth,window.innerHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
  background('#f7eec6');
}

function draw(){
  // background(0,20);

  var spectrum = fft.analyze(64); 
  stroke(0,150,136,3);
    noFill();
  // console.log(spectrum.length)
  for (var i = 0; i< spectrum.length/16; i++){
    var x = map(Math.log(i+1), Math.log(0+1), Math.log((spectrum.length/16)+1), 50, width);
    
    var rad = map(spectrum[i], 0, 255, 0,width/2);

    ellipse(x,height/2,rad,rad);
  }

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}