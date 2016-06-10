function setup(){
  var cnv = createCanvas(window.innerWidth,window.innerHeight);
  fft = new p5.FFT();
  //background(230,0.01);
  background('#f7eec6');

  mic = new p5.AudioIn()
  mic.start();
  fft.setInput(mic)
}

function draw(){
  // background(0,20);

  var spectrum = fft.analyze();
  stroke(0,150,136,2);
  noFill();
  // console.log(spectrum.length)
  for (var i = 0; i< spectrum.length; i++){
    var x = map(Math.log(i+1), Math.log(0+1), Math.log((spectrum.length/16)+1), 50, width);
    var rad = map(spectrum[i], 0, 255, 0,width/2);
    ellipse(x,height/2,rad,rad);
  }
}

