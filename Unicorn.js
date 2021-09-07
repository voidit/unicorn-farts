"use strict";

class Unicorn {
  
  constructor(){
      this.font = 'UnicornFarts-Regular';
      this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.letter = 'A';
      this.x = 60;
      this.y = 60;
      this.myColor = null;
  }

  // preload() {
    // font = loadFont('http://unicorns.irenas.art/assets/UnicornFarts-Regular.otf');
  // }

  setup() {
    this.myColor = color(random(255), random(255), random(255));
    fill(this.myColor);
    textFont(this.font);
    textSize(120);
    this.y = height / 2;
    text(this.letter, this.x, this.y);
  }

  draw() {
    if (mouseIsPressed) {
      this.y = mouseY;
      this.myColor = color(random(255), random(255), random(255));
      
      this.letter = this.letters.charAt(frameCount % 20);
      if (mouseButton == LEFT) {
        this.x = mouseX;
      } else {
        this.x = mouseX - 60;
      }
      
      fill(this.myColor);
    }
    
    text(this.letter, this.x, this.y);
  }
}