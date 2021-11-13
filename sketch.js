"use strict";

let bg, bgMasked, maskImage, hellow;
let unicorn = {};
let dorbell = {};
let unicornFont = {};

function setup() {
// function preload() {
  unicornFont = loadFont('assets/UnicornFarts-Regular.otf');
  // soundFormats('mp3', 'ogg');
  dorbell = loadSound('assets/doorbell.mp3');
  bg = loadImage("assets/suminagashi-1.jpg");
  bgMasked = loadImage("assets/suminagashi-blur.jpg");
  maskImage = loadImage("assets/mask.png");

  // // create hellow mask
  // hellow = createImage(230, 230);
  // bgMasked.filter(BLUR, 3);
// }

// function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
  background(bg);
  // imageMode(CORNERS); //either CORNER, CORNERS, or CENTER
  onFontLoaded();
}

function updateMask() {
  bgMasked.loadPixels();
  maskImage.loadPixels();

  for (let x = 0; x < maskImage.width; x++) {
    for (let y = 0; y < maskImage.height; y++) {
      let fromPixel = bgMasked.get(x, y);
      let r = bgMasked.get(x, y);
      let g = bgMasked.get(x, y);
      let b = bgMasked.get(x, y);
      let a = maskImage.get(x, y);
      // writeColor(maskImage, x, y, r, g, b, a);
      maskImage.set(x, y, r, g, b, a);
    }
  }
  maskImage.updatePixels();
}

function onFontLoaded() {
  unicorn = new Unicorn(unicornFont);
  return unicorn.setup();
}

function draw() {
  // start all over again on each frame
  // imageMode(CORNER);
  background(bg);
  // imageMode(CENTER); //either CORNER, CORNERS, or CENTER
  bgMasked.mask(maskImage);
  image(bgMasked, unicorn.magnet.x, unicorn.magnet.y, width, height);

  // if (unicorn.song.isPlaying()) {
  //   // move hellow mask along with mouse
  //   image(hellow, unicorn.x - hellow.width / 2, unicorn.y - hellow.height / 2);
  // }

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
      unicorn.goUp();
      unicorn.sparkle();
      break;
    case DOWN_ARROW:
      unicorn.goDown();
      unicorn.fart();
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
