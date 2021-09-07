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