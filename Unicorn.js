"use strict";

class Unicorn {

  constructor() {
    this.font = 'UnicornFarts-Regular';
    this.font;
    this.letters = "ABCDEFGHIJKLMNOPQRSTUfghijklmnopqrstuvwxyz"; // missing letters VWXYZabcde
    this.letter = 'A';
    this.x = 60;
    this.y = 60;
    this.myColor = null;
    // this.song = null;
  }
  
  goLeft() {
    this.x = this.x - 60;
    this.letter = this.letters.charAt((frameCount % 20) + 20);
  }
  
  goRight() {
    this.x = this.x + 60;
    this.letter = this.letters.charAt(frameCount % 20);
  }

  fart() {
    // this.song.play();
  }

  setup() {
    // soundFormats('mp3');
    // this.font = loadFont('assets/UnicornFarts-Regular.otf');
    // this.song = loadSound('assets/doorbell.mp3');
    this.myColor = color(random(255), random(255), random(255));
    fill(this.myColor);
    textFont(this.font);
    textSize(240);
    this.y = height / 2;
    text(this.letter, this.x, this.y);
  }

  draw() {
    if (mouseIsPressed) {
      this.y = mouseY;
      this.myColor = color(random(255), random(255), random(255));

      this.letter = this.letters.charAt(frameCount % 20);
      this.x = mouseX - 60;
      fill(this.myColor);
    }

    text(this.letter, this.x, this.y);
  }
}