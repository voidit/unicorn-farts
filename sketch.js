"use strict";

let bg, hellow;
let unicorn = {};
let dorbell = {};
let unicornFont = {};

function preload() {
  unicornFont = loadFont('assets/UnicornFarts-Regular.otf');
  // soundFormats('mp3', 'ogg');
  dorbell = loadSound('assets/doorbell.mp3');
  bg = loadImage("assets/suminagashi-1.jpg");

  // create hellow mask
  hellow = createImage(230, 230);
  hellow.loadPixels();
  for (let x = 0; x < hellow.width; x++) {
    for (let y = 0; y < hellow.height; y++) {
      let r = map(x + y, 0, hellow.height, 255, 0);
      let g = map(x + y, 0, hellow.height, 255, 0);
      let b = map(x + y, 0, hellow.height, 255, 0);
      let a = map(y, 0, hellow.height, 255, 0);
      hellow.set(x, y, [r, g, b, a]);
    }
  }
  hellow.updatePixels();
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
  onFontLoaded();
  // bg.mask(hellow);
  // imageMode(CENTER);
}

function onFontLoaded() {
  unicorn = new Unicorn(unicornFont);
  return unicorn.setup();
}

function draw() {
  // start all over again on each frame
  background(bg);

  if (unicorn.song.isPlaying()) {
    // move hellow mask along with mouse
    image(hellow, unicorn.x - hellow.width / 2, unicorn.y - hellow.height / 2);
  }

  // draw unicorn on top
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
      unicorn.fart();
      break;
    case DOWN_ARROW:
      unicorn.sparkle();
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