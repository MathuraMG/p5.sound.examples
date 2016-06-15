# Step-by-step guide

**[Reference](p5js.org/reference/#/libraries/p5.sound)**

### Load and play an mp3 file

Let's start of with a basic p5 program.
Open a new project and save it. Now open the project folder in your finder/explorer. You should see the following files and folders inside of it.
* index.html
* sketch.js
* libraries (folder)

Now, in this folder, add a mp3/wav file. ( say, test.wav)

Now, that we have the folder ready, let's open sketch.js in the p5 IDE and start.

To start of with, this will already be present

    function setup() {

    }

    function draw() {

    }

As the names suggest, `setup()` is a function which will contain all the initial setup for our program and `draw()` will contain code for code that needs to be continuously called.

Since, we need to *LOAD* music into our program, we will add another function called `preload()` . This function will pre-*LOAD* our music file before anything else in the program runs. This function is reconized by p5 so we don't have to define anything else if we call it preload.

    var song;

    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {

    }

    function draw() {

    }

Now, let's play this music as soon as we run the program.

    var song;

    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      song.play();
    }

    function draw() {

    }

Great! If this works, you're halfway there. Except you have an extremely annoying piece of code.

So let's add a button so that we can play music when we press it. [p5 DOM]() gives us easy functions to do this.

    var song;
    var playButton;

    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      playButton = createButton('Play');
      playButton.position(10,10);
      //call the fnction play when the mouse is pressed
      playButton.mousePressed(play);
    }

    function draw() {

    }

    //function called when play button is pressed
    function play() {
      song.play();
    }

Now, similarly, let's add a pause and stop button.

    var song;
    var playButton, pauseButton, stopButton;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      playButton = createButton('Play');
      playButton.position(10,10);
      //call the fnction play when the mouse is pressed
      playButton.mousePressed(play);

      pauseButton = createButton('Pause');
      pauseButton.position(10,30);
      //call the fnction pause when the mouse is pressed
      pauseButton.mousePressed(pause)

      stopButton = createButton('Stop');
      stopButton.position(10,50);
      //call the fnction stop when the mouse is pressed
      stopButton.mousePressed(stop)
    }

    function draw() {

    }

    //function called when play button is pressed
    function play() {
      song.play();
    }

    //function called when pause button is pressed
    function pause() {
      song.pause();
    }

    //function called when stop button is pressed
    function stop() {
      song.stop();
    }

So, we made our own little music player! Now let's add some additional features.
Let's start with volume.

p5 offers this out of the box - `setVolume()`
So at the end of `setup()` let's add `song.setVolume(0.1);`

Once this works, let's add a slider (similar to the button) to control the volume. This slider creation will be added at the end of `setup()`, whereas the volume will be set in `draw()` as this needs to change while the program is running.

    var song;
    var playButton, pauseButton, stopButton;
    var volumeSlider;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      playButton = createButton('Play');
      playButton.position(10,10);
      //call the fnction play when the mouse is pressed
      playButton.mousePressed(play);

      pauseButton = createButton('Pause');
      pauseButton.position(10,30);
      //call the fnction pause when the mouse is pressed
      pauseButton.mousePressed(pause)

      stopButton = createButton('Stop');
      stopButton.position(10,50);
      //call the fnction stop when the mouse is pressed
      stopButton.mousePressed(stop)

      volumeSlider = createSlider(0,1,0.2,0.1);
      volumeSlider.position(100,10);
    }

    function draw() {
      song.setVolume(volumeSlider.value());
    }

    //function called when play button is pressed
    function play() {
      song.play();
    }

    //function called when pause button is pressed
    function pause() {
      song.pause();
    }

    //function called when stop button is pressed
    function stop() {
      song.stop();
    }

Similarly, we can add pan (control the speakers) and rate of the song and we're done!!


    var song;
    var playButton, pauseButton, stopButton;
    var volumeSlider;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      playButton = createButton('Play');
      playButton.position(10,10);
      //call the fnction play when the mouse is pressed
      playButton.mousePressed(play);

      pauseButton = createButton('Pause');
      pauseButton.position(10,30);
      //call the fnction pause when the mouse is pressed
      pauseButton.mousePressed(pause)

      stopButton = createButton('Stop');
      stopButton.position(10,50);
      //call the fnction stop when the mouse is pressed
      stopButton.mousePressed(stop)

      volumeSlider = createSlider(0,1,0.2,0.1);
      volumeSlider.position(100,10);

      panSlider = createSlider(-1,1,0,0.1);
      panSlider.position(100,30);

      rateSlider = createSlider(0.2,1,1,0.1);
      rateSlider.position(100,50);

    }

    function draw() {
      song.setVolume(volumeSlider.value());
      song.rate(rateSlider.value());
      song.pan(panSlider.value());
    }

    //function called when play button is pressed
    function play() {
      song.play();
    }

    //function called when pause button is pressed
    function pause() {
      song.pause();
    }

    //function called when stop button is pressed
    function stop() {
      song.stop();
    }


### Our first keyboard

Now that we can load and  play music files, let's try playing notes.

We start of with the usual sketch.js

    function setup() {

    }

    function draw() {

    }

Let's create a simple button that will play a tome when we press it. ( For now, let's make it print something when we press it)

    var button;

    function setup() {
      button = createButton('A4');
      button.position(10,10);
      button.mousePressed(playTone)
    }

    function draw() {

    }

    function playTone() {
      print('playing tone');
    }

Now, let's create an oscillator object which will generate sine waves.

Quick tangent - music notes are nothing but sine waves of particular frequencies which can found [here](http://www.phy.mtu.edu/~suits/notefreqs.html)

    var button;
    var osc;

    function setup() {

      button = createButton('A4');
      button.position(10,10);
      button.mousePressed(playTone)

      osc = new p5.Oscillator();
      osc.setType('sine');
      osc.freq(440);
      osc.amp(0.5);
      osc.start();
    }

    function draw() {

    }

    function playTone() {
      print('playing tone');
    }

Now, we have it playing all the time, so let's attach it to the mousePressed function.
While we're at it, let's also make sure that the tone stop playing when we lift the mouse click, so that it seems more like a piano key.

    var button;
    var osc;

    function setup() {

      button = createButton('A4');
      button.position(10,10);
      button.mousePressed(playTone);
      button.mouseReleased(stopTone);

      osc = new p5.Oscillator();
      osc.setType('sine');
      osc.freq(440);
      osc.amp(0);
      osc.start();
    }

    function draw() {

    }

    function playTone() {
      osc.amp(1);
    }

    function stopTone() {
      osc.amp(0);
    }

To finish it off, let's make the tones fade in and fade out to make it more realistic. To do this, we will have to make sure that the tone is always playing and we alter the amplitude.


    var button;
    var osc;

    function setup() {

      button = createButton('A4');
      button.position(10,10);
      button.mousePressed(playTone);
      button.mouseReleased(stopTone);

      osc = new p5.Oscillator();
      osc.setType('sine');
      osc.freq(440);
      osc.amp(0);
      osc.start();
    }

    function draw() {

    }

    function playTone() {
      osc.fade(1,0.1);
    }

    function stopTone() {
      osc.fade(0,0.1);
    }


### Volume Gauge

Now we move on to sound analysis. Let's start simple and try to map the volume of a particular audio file.

Let's start with loading an audio file and adding a play/pause button to it.

The below code is the same as the first code, except that it uses a function `isPlaying()` which let's us know if the song is playing or not.

    var song;
    var toggleButton;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10,10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
    }

    function draw() {

    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if(song.isPlaying() == true){
         song.pause();
      }
      else {
        song.play();
      }

    }


Now, let's add a `p5.Amplitude` object to measure the volume/amplitude of the sound and print the level it returns using `getLevel()`


    var song;
    var toggleButton;
    var amp;

    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  

    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10,10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
      amp = new p5.Amplitude();
    }

    function draw() {
      print(amp.getLevel());
    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if(song.isPlaying() == true){
         song.pause();
      }
      else {
        song.play();
      }

    }


Now, we can see numbers being printed out in the console when we run the above sketch and play the song.

Now this output is between 0-1, so let's map it to a larger number and draw a circle that will keep changing size per the volume/amplitude.

    var song;
    var toggleButton;
    var amp;

    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');

    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10, 10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
      amp = new p5.Amplitude();

      //add the canvas to draw the circle on
      createCanvas(windowWidth, windowHeight);
    }

    function draw() {
      //draw the circle based on the amplitude
      var rad = map(amp.getLevel(), 0, 1, 0, height / 2);
      background(0);
      fill(255);
      ellipse(width / 2, height / 2, rad, rad);
    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if (song.isPlaying() == true) {
        song.pause();
      } else {
        song.play();
      }

    }

Aaaannddd finally - music analyser.

### Basic Equalizer

p5 provides an object that does the analysis for us very easily - p5.FFT

So, let's start of with loading the music

    var song;
    var toggleButton;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10,10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
    }

    function draw() {

    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if(song.isPlaying() == true){
         song.pause();
      }
      else {
        song.play();
      }

    }


Let's add the `p5.FFT` object to this and call the `analyze()` function

***But what is FFT?***

The Fourier transform decomposes a function a signal into the frequencies that make it up.
Similar to how a musical chord can be expressed as the amplitude (or loudness) of its constituent notes.

**FFT** is just Fast Fourier Transform which is an algorithm that implements fourier transform.

`analyze()` basically returns an array which puts the frequencies in their bins and returns the amplitude.


    var song;
    var toggleButton;
    var fft;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10,10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
      fft = new p5.FFT();
    }

    function draw() {
      var spectrum = fft.analyze();
      print(spectrum.length);
    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if(song.isPlaying() == true){
         song.pause();
      }
      else {
        song.play();
      }

    }


`analyze()` returns an array that essentially splits up the frequencies of the song into a set number of bins ( the default is 1024 )

Each bin contains the amplitude of the frequencies in that bin.

Let's now map the results onto the canvas.

    var song;
    var toggleButton;
    var fft;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10,10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
      fft = new p5.FFT();

      createCanvas(windowWidth, windowHeight);
    }

    function draw() {
      background(0);
      noStroke();
      fill(255);
      var spectrum = fft.analyze();
      print(spectrum.length);
      for(var i=0;i<spectrum.length;i++){
        var x = map(i,0,spectrum.length,0,windowWidth);
        var y = windowHeight - map(spectrum[i],0,255,0,windowHeight);
        rect(x,y,5,windowHeight-y);
      }
    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if(song.isPlaying() == true){
         song.pause();
      }
      else {
        song.play();
      }

    }

We can tweak this to make it a radial analyzer with some colours quite easily.

    var song;
    var toggleButton;
    var fft;


    function preload() {
      //load the sound file
      song = loadSound('test.wav');
      print('music file loaded');  
    }

    function setup() {
      toggleButton = createButton('Play/Pause');
      toggleButton.position(10,10);
      //call the fnction play when the mouse is pressed
      toggleButton.mousePressed(toggleMusic);
      fft = new p5.FFT();

      createCanvas(windowWidth, windowHeight);
    }

    function draw() {
      background(0);
      colorMode(RGB);
      fill(255);
      colorMode(HSB);
      noFill();
      var spectrum = fft.analyze();
      for(var i=0;i<spectrum.length;i++){
        var rad = map(i,0,spectrum.length,0,windowHeight);
        //print(spectrum[i]);
        var brightness = map(spectrum[i],0,255,0,100);
        var hue = map(rad,0,windowHeight,0,360);
        stroke(hue,40,brightness);
        ellipse(width/2,height/2,rad,rad);
      }
    }

    //function called when play/pause button is pressed
    function toggleMusic() {
      if(song.isPlaying() == true){
         song.pause();
      }
      else {
        song.play();
      }

    }



### Recording with mic

Let's start with a basic setup to record.
Two buttons - one which records while it is pressed and another that plays back the recording.

    var recordButton, playButton;

    function setup() {
      recordButton = createButton('Record');
      recordButton.position(10,10);
      recordButton.mousePressed(startRecord);
      recordButton.mouseReleased(stopRecord);
      playButton = createButton('Play');
      playButton.position(10,30);
      playButton.mousePressed(play);
    }

    function draw() {

    }

    function startRecord() {
      print('start recording');
    }

    function stopRecord() {
      print('stop recording');
    }

    function play() {
      print('playing');
    }

Now, to actually create a mic and start recording into a file we need to create 3 p5 objects `p5.AudioIn` for the mic component, `p5.SoundRecorder` to record the input and  `p5.SoundFile` to hold the recorded file.

    var recordButton, playButton;
    var mic, recorder, sound;

    function setup() {
      recordButton = createButton('Record');
      recordButton.position(10,10);
      recordButton.mousePressed(startRecord);
      recordButton.mouseReleased(stopRecord);
      playButton = createButton('Play');
      playButton.position(10,30);
      playButton.mousePressed(play);

      mic = new p5.AudioIn();
      mic.start();

      recorder = new p5.SoundRecorder();
      recorder.setInput(mic);

      sound = new p5.SoundFile();
    }

    function draw() {

    }

    function startRecord() {
      print('start recording');
    }

    function stopRecord() {
      print('stop recording');
    }

    function play() {
      print('playing');
    }

Now, we have to add functionalities into `startRecord()` `stopRecord()` and `play()`  and voila!

    var recordButton, playButton;
    var mic, recorder, sound;

    function setup() {
      recordButton = createButton('Record');
      recordButton.position(10,10);
      recordButton.mousePressed(startRecord);
      recordButton.mouseReleased(stopRecord);
      playButton = createButton('Play');
      playButton.position(10,30);
      playButton.mousePressed(play);

      mic = new p5.AudioIn();
      mic.start();

      recorder = new p5.SoundRecorder();
      recorder.setInput(mic);

      sound = new p5.SoundFile();
    }

    function draw() {

    }

    function startRecord() {
      print('start recording');
      sound = new p5.SoundFile();
      recorder.record(sound);

    }

    function stopRecord() {
      print('stop recording');
      recorder.stop();
    }

    function play() {
      print('playing');
      sound.amp(1);
      sound.play();
    }
