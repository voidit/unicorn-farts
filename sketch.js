"use strict";

let unicorn = new Unicorn;

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(15);
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
      unicorn.fart();
    case DOWN_ARROW:
    default:
      brek;
  }
  return false;
}