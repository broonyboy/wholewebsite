const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method

TypeWriter.prototype.type = function () {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // get full text of current word
  const fullTxt = this.words[current];
  // Check if deleting
  if (this.isDeleting) {
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add a char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // insert txt into element

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // check if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // make a pause at end
    typeSpeed = this.wait;
    // set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // move to next word
    this.wordIndex = this.wordIndex + 1;
    // pause before start typing
    this.typeSpeed = 500;
  }


  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM load

document.addEventListener('DOMContentLoaded', init);

// Init app

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // init TypeWriter

  new TypeWriter(txtElement, words, wait);
}
