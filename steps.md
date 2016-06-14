# Step-by-step guide

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
