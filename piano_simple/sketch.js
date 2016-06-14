var osc = [];
var playing = false;
var buttons = [];
var sharpButtons1 = []
var sharpButtons2 = []
var numNotes = 8;
var sharpNumNotes1 = 2;
var sharpNumNotes2 = 3;
var tones = [130.81, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.63];
var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75,87,69,84,89,85];
var sharpTones1 = [138,155];
var sharpTones2 = [185,207,233];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background('#FFE8D1');
  textAlign(CENTER);

  for (var i = 0; i < numNotes; i++) {
    osc[i] = new p5.Oscillator();
    osc[i].setType('sine');
    osc[i].freq(tones[i]);
    osc[i].start();
    osc[i].amp(0);

    buttons[i] = createButton('');
    buttons[i].mousePressed(playTone.bind(this, i));
    buttons[i].mouseReleased(stopTone.bind(this,i));
    buttons[i].size(40,200);
    buttons[i].position(width/2-160+40*i,height/2-100);
    buttons[i].style('background-color','#fff');
  }

  for (var i = 0; i < sharpNumNotes1; i++) {
    osc[i+numNotes] = new p5.Oscillator();
    osc[i+numNotes].setType('sine');
    osc[i+numNotes].freq(sharpTones1[i]);
    osc[i+numNotes].start();
    osc[i+numNotes].amp(0);
    sharpButtons1[i] = createButton('');
    sharpButtons1[i].mousePressed(playTone.bind(this, i+numNotes));
    sharpButtons1[i].mouseReleased(stopTone.bind(this,i+numNotes));
    sharpButtons1[i].size(30,120);
    sharpButtons1[i].position(width/2-160+25+40*i,height/2-100);
    sharpButtons1[i].style('background-color','#000');
  }

  for (var i = 0; i < sharpNumNotes2; i++) {
    osc[i+numNotes+sharpNumNotes1] = new p5.Oscillator();
    osc[i+numNotes+sharpNumNotes1].setType('sine');
    osc[i+numNotes+sharpNumNotes1].freq(sharpTones2[i]);
    osc[i+numNotes+sharpNumNotes1].start();
    osc[i+numNotes+sharpNumNotes1].amp(0);
    sharpButtons2[i] = createButton('');
    sharpButtons2[i].mousePressed(playTone.bind(this, i+numNotes+sharpNumNotes1));
    sharpButtons2[i].mouseReleased(stopTone.bind(this,i+numNotes+sharpNumNotes1));
    sharpButtons2[i].size(30,120);
    sharpButtons2[i].position(width/2-160+3*40+ 25+40*i,height/2-100);
    sharpButtons2[i].style('background-color','#000');
  }
  
  textSize(20);
  text('Typing Piano',width/2 ,height/4);
  textSize(12);
  text('press keys to play the piano',width/2 ,height/3);
  
}

function draw() {

}

function playTone(index) {
  console.log('pressed -- ' + index);
  osc[index].fade(1,0.1);
}

function stopTone(index) {
  osc[index].fade(0,0.01);
}

function keyReleased() {
  for (var i = 0; i < numNotes+sharpNumNotes1+sharpNumNotes2; i++) {
    osc[i].fade(0,0.1);
  }
}

function keyPressed() {
  for (var i = 0; i < numNotes+sharpNumNotes1+sharpNumNotes2; i++) {
    console.log(keyCode);
    if (keyCode == keyCodes[i]) {
      osc[i].fade(1,0.01);
      break;
    } else {
      continue;
    }
  }
  return false;
}
