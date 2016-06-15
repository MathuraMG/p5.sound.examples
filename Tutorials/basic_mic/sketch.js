var mic, recorder, soundFile;
var state ;
var sounds ;
var number ;
var x ;
var y ;
var pressed;

var resetButton;


function setup() {
  
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);
  
  savedFile = new p5.SoundFile();

  createCanvas(500, 500);
  

  recordButton = createButton('record');
  recordButton.mousePressed(record);
  recordButton.mouseReleased(stopRecord);
  
  playButton = createButton('play');
  playButton.mousePressed(play);

}

function record() {
  console.log('startRecord');
  savedFile = new p5.SoundFile();
  recorder.record(savedFile);
}

function stopRecord() {
  console.log('stop record');
  recorder.stop();
}

function play() {
  console.log('play');
  savedFile.amp(1);
  savedFile.play();
}



