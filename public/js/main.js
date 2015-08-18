'use strict';

var markdown = require('markdown').markdown;

function Editor(input, preview) {
  this.update = function() {
    preview.innerHTML = markdown.toHTML(input.value);
  };
  input.editor = this;
  this.update();
}

var $ = function(id) {
  return document.getElementById(id);
};

new Editor($("text-input"), $("preview"));

// Check if local Storage is supported
function isLocalStorage() {
  return !!window.localStorage;
}

// Save data to the localStorage
$("text-input").addEventListener('keyup', function(e) {
  if (isLocalStorage()) {
    localStorage.copy = this.value;
  }
});

// Fetch Data from localStorage if it was saved before
window.onload = function() {
  if (isLocalStorage() && localStorage.copy) {
    $("text-input").innerHTML = localStorage.copy;
    new Editor($("text-input"), $("preview"));
  }
};
