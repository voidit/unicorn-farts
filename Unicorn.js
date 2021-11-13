"use strict";

class Unicorn {

  constructor(font) {
    this.font = font;
    this.font;
    this.letters = "ABCDEFGHIJKLMNOPQRSTUfghijklmnopqrstuvwxyz"; // missing letters VWXYZabcde
    this.letter = 'A';
    this.location = createVector(0, 0);
    this.magnet = createVector(0, 0);
    this.myColor = null;
    this.song = null;
    this.fontsize = 240;
    this.lettersize = 60;
    this.bounds; // holds x, y, w, h of the text's bounding box

    this.star = null;
  }

  goLeft() {
    this.location.x -= this.lettersize;
    this.letter = this.letters.charAt((frameCount % 20) + 20);
  }

  goRight() {
    this.location.x += this.lettersize;
    this.letter = this.letters.charAt(frameCount % 20);
  }

  goDown() {
    this.location.y += this.lettersize;
    this.letter = this.letters.charAt(frameCount % 20);
  }

  goUp() {
    this.location.y -= this.lettersize;
    this.letter = this.letters.charAt((frameCount % 20) + 20);
  }

  sparkle() {
    noFill();
    stroke(this.myColor);
    strokeWeight(4);
    this.star.draw(this.location.x, this.location.y);
    noStroke();
    fill(this.myColor);
  }

  fart() {
    // Works in Safari, WebAudioAPI issues in Chrome
    if(this.song) {
      if (this.song.isPlaying()) { // .isPlaying() returns a boolean
        this.song.stop();
      } else {
        this.song.play();
      }
    }
  }

  tikle() {
    let halfLetter = this.lettersize / 2;
    this.bounds = {
      x: this.location.x - halfLetter,
      y: this.location.y - halfLetter,
      w: this.location.x + halfLetter,
      h: this.location.y + halfLetter
    };
    // check if the mouse is inside the bounding box and tickle if so
    if (mouseX >= this.bounds.x && mouseX <= this.bounds.x + this.bounds.w &&
      mouseY >= this.bounds.y && mouseY <= this.bounds.y + this.bounds.h) {
      this.location.x += random(-5, 5);
      this.location.y += random(-5, 5);
    }
    return true;
  }

  setup() {
    this.myColor = color(random(255), random(255), random(255));
    fill(this.myColor);
    textFont(this.font);
    textSize(this.fontsize);
    this.location.y = height / 2;
    text(this.letter, this.location.x, this.location.y);
    this.song = loadSound('assets/lucky_dragons.mp3');
    // this.song = null;
    this.star = new Star(this.x, this.y, 5, 70, 7);
  }

  draw() {


    if (mouseIsPressed) {
      this.myColor = color(random(255), random(255), random(255));
      fill(this.myColor);
      if (mouseX > width / 2) {
        this.letter = this.letters.charAt(frameCount % 20);
      } else {
        this.letter = this.letters.charAt((frameCount % 20) + 20);
      }
      this.magnet.x = (mouseX - this.location.x) / PI;
      this.magnet.y = (mouseY - this.location.y) / PI;
      this.location.add(this.magnet);
    } else {
      this.magnet.x = 0;
      this.magnet.y = 0;

      if (frameCount % 20 < 3) {
        this.myColor = color(random(255), random(255), random(255));
        this.sparkle();
        if (frameCount % 20 == 0)
          this.letter = this.letters.charAt(frameCount % (this.letters.length - 1));
      }
    }

    text(this.letter, this.location.x, this.location.y);
  }

}
