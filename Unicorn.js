"use strict";

class Unicorn {

  constructor(font) {
    this.font = font;
    this.font;
    this.letters = "ABCDEFGHIJKLMNOPQRSTUfghijklmnopqrstuvwxyz"; // missing letters VWXYZabcde
    this.letter = 'A';
    this.x = 60;
    this.y = 60;
    this.myColor = null;
    this.song = null;
    this.fontsize = 240;
    this.lettersize = 60;
    this.bounds; // holds x, y, w, h of the text's bounding box
  }

  goLeft() {
    this.x = this.x - this.lettersize;
    this.letter = this.letters.charAt((frameCount % 20) + 20);
  }

  goRight() {
    this.x = this.x + this.lettersize;
    this.letter = this.letters.charAt(frameCount % 20);
  }

  fart() {
    // Works in Safari, WebAudioAPI issues in Chrome
    if (this.song.isPlaying()) { // .isPlaying() returns a boolean
      this.song.stop();
    } else {
      this.song.play();
    }
  }

  tikle() {
    let halfLetter = this.lettersize / 2;
    this.bounds = {
      x: this.x - halfLetter,
      y: this.y - halfLetter,
      w: this.x + halfLetter,
      h: this.y + halfLetter
    };
    // check if the mouse is inside the bounding box and tickle if so
    if (mouseX >= this.bounds.x && mouseX <= this.bounds.x + this.bounds.w &&
      mouseY >= this.bounds.y && mouseY <= this.bounds.y + this.bounds.h) {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
    return true;
  }

  setup() {
    this.myColor = color(random(255), random(255), random(255));
    fill(this.myColor);
    textFont(this.font);
    textSize(this.fontsize);
    this.y = height / 2;
    text(this.letter, this.x, this.y);
    this.song = loadSound('assets/lucky_dragons.mp3')
  }

  draw() {
    if (mouseIsPressed) {
      this.y = mouseY;
      this.myColor = color(random(255), random(255), random(255));

      this.letter = this.letters.charAt(frameCount % 20);
      this.x = mouseX - 60;
      fill(this.myColor);
    } else {
      this.tikle();
    }

    text(this.letter, this.x, this.y);
  }

}