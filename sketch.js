"use strict";

let unicorn = {};
let dorbell = {};
let unicornFont = {};

// function preload() {
  // unicornFont = loadFont('assets/UnicornFarts-Regular.otf');
  // unicorn = new Unicorn(unicornFont);
  // soundFormats('mp3', 'ogg');
  // dorbell = loadSound('assets/doorbell', unicorn.setSong(dorbell), recordError(message));
// }

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
  
  unicornFont = loadFont('assets/UnicornFarts-Regular.otf');
  unicorn = new Unicorn(unicornFont);
  unicorn.setup();
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
      break;
    case DOWN_ARROW:
      break;
    default:
      break;
  }
  return false;
}

function recordError(message){
  print(message)
}

