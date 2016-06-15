var mic, recorder, soundFile;
var state ;
var sounds ;
var number ;
var x ;
var y ;
var pressed;

var resetButton;


function setup() {
  background(0);
  fill(255);
  stroke(255);
  text('Hold a key down to record your beat on it!', 20, 20);
  pressed = [
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  x=0;
  y=0;
  sounds=[];
  state = 0 ;
  number=0;
  colorMode(HSB);
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  for (var i = 0; i < 8; i++) {
    sounds[i] = new p5.SoundFile();
  }


  createCanvas(200, 500);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) {
      hue = (2 * j + i) * 360 / 8;
      for (var k = 0; k < 10; k++) {
        noStroke();
        fill(hue, 60, 10 + 7 * k);
        rect(i * 100 + 2 * k, j * 100 + 2 * k, 100 - 4 * k, 100 - 4 * k);
      }
    }
  }

  resetButton = createButton('reset');
  resetButton.position(10,450);
  resetButton.mousePressed(reset);

}

function draw() {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) {
      hue = (2 * j + i) * 360 / 8;
      for (var k = 0; k < 10; k++) {
        noStroke();
        fill(hue, 60, 50 + 2 * k);
        rect(i * 100 + 2 * k, j * 100 + 2 * k, 100 - 4 * k, 100 - 4 * k);
        colorMode(RGB);
        fill(20, 20, 20, pressed[i][j]);
        colorMode(HSB);
        rect(i * 100, j * 100, 100, 100);

      }
    }
  }
}

function mousePressed() {
  if(mouseY <= 400){
    
    x = floor(mouseX / 100);
    y = floor(mouseY / 100);
    
    console.log(x + ' -- ' +  y);
    pressed[x][y] = 10;
    number = 2 * y + x;
    for (var i = 0; i < 8; i++) {
      sounds[i].amp(0);
    }
    // make sure user enabled the mic
    if (mic.enabled) {
     sounds[number] = new p5.SoundFile();
      recorder.record(sounds[number]);
      setTimeout(function(){stopRecord();},2000)
    }
  }
}

function stopRecord() {

  //pressed[x][y] = 0;

  recorder.stop();
  for (var i = 0; i < 8; i++) {
    sounds[i].amp(0.3);
  }
  sounds[number].play(); // play the result!
  sounds[number].loop();
}

function reset() {
  setup();
}

