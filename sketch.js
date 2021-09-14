"use strict";

let unicorn = {};
let dorbell = {};
let unicornFont = {};

function preload() {
  unicornFont = loadFont('assets/UnicornFarts-Regular.otf');
  // soundFormats('mp3', 'ogg');
  dorbell = loadSound('assets/doorbell.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
  onFontLoaded();
}

function onFontLoaded() {
  unicorn = new Unicorn(unicornFont);
  unicorn.setup();

  // soundFormats('mp3', 'ogg');
  // dorbell = loadSound('assets/doorbell.mp3', onSoundLoaded(), recordError(message));

  // unicorn.setSong(dorbell);
  return unicorn;
}

function draw() {
  background('#fff');
  unicorn.draw();
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      unicorn.goLeft();
      break;
    case RIGHT_ARROW:
      unicorn.goRight();
      break;
    case UP_ARROW:
      // unicorn.fart();
      // break;
    case DOWN_ARROW:
      break;
    default:
      break;
  }
  return false;
}

function mousePressed() {
  if (unicorn.song && unicorn.song != 'undefined') {
    if (unicorn.song.isPlaying()) { // .isPlaying() returns a boolean
      unicorn.song.stop();
      background(255, 0, 0);
    } else {
      unicorn.song.play();
      background(0, 255, 0);
    }
  }
}

function recordError(message) {
  print(message)
}