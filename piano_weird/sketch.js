var buttons = [];
var sharpButtons1 = [];
var sharpButtons2 = [];
var numNotes = 8;
var sharpNumNotes1 = 2;
var sharpNumNotes2 = 3;
var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 87, 69, 84, 89, 85];
var sounds = [];

function preload() {
  for (var i = 0; i < numNotes; i++) {
    var filePath = 'sounds/Alert/Alert_0' + (i + 1) + '.mp3';
    print(filePath);
    sounds[i] = loadSound(filePath);
  }
  for (var i = 0; i < sharpNumNotes1+sharpNumNotes2; i++) {
    var filePath = 'sounds/SciFi/SciFi_0' + (i + 1) + '.mp3';
    print(filePath);
    sounds[numNotes+i] = loadSound(filePath);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background('#FFE8D1');
  textAlign(CENTER);
  
  for (var i = 0; i < numNotes; i++) {
    buttons[i] = createButton('');
    buttons[i].mousePressed(playTone.bind(this, i));
    buttons[i].size(40, 200);
    buttons[i].position(width / 2 - 160 + 40 * i, height / 2 - 100);
    buttons[i].style('background-color', '#fff');
  }
  for (var i = 0; i < sharpNumNotes1; i++) {
    sharpButtons1[i] = createButton('');
    sharpButtons1[i].mousePressed(playTone.bind(this, i + numNotes));
    sharpButtons1[i].size(30, 120);
    sharpButtons1[i].position(width / 2 - 160 + 25 + 40 * i, height / 2 - 100);
    sharpButtons1[i].style('background-color', '#000');
  }

  for (var i = 0; i < sharpNumNotes2; i++) {

    sharpButtons2[i] = createButton('');
    sharpButtons2[i].mousePressed(playTone.bind(this, i + numNotes + sharpNumNotes1));
    sharpButtons2[i].size(30, 120);
    sharpButtons2[i].position(width / 2 - 160 + 3 * 40 + 25 + 40 * i, height / 2 - 100);
    sharpButtons2[i].style('background-color', '#000');
  }
  
  textSize(20);
  text('Some sort of a Piano', width / 2, height / 4);
  textSize(12);
  text('press keys to play the piano', width / 2, height / 3);

}

function draw() {

}

function playTone(index) {
  console.log('pressed -- ' + index);
  sounds[index].amp(0.5);
  sounds[index].play();

}

function keyPressed() {
  for (var i = 0; i < numNotes + sharpNumNotes1 + sharpNumNotes2; i++) {
    console.log(keyCode);
    if (keyCode == keyCodes[i]) {
      sounds[i].amp(0.5);
      sounds[i].play();
      break;
    } else {
      continue;
    }
  }
  return false;
}