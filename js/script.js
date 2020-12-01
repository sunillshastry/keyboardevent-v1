"use strict";

var key = document.getElementById("key");
var keyCode = document.getElementById("keycode");
var code = document.getElementById("code");
var copyOutput = document.querySelector(".copy-output");
var cardKey = document.querySelector(".card-key");
var cardCode = document.querySelector(".card-code");
var cardKeyCode = document.querySelector(".card-keycode");
var enterKey = document.querySelector(".enter-key");
window.addEventListener("keydown", getValues);
var string = "Hello World!";

function getValues(e) {
  var userKey = e.key;
  var userCode = e.code;
  var userKeyCode = e.keyCode;
  key.innerHTML = userKey;
  keyCode.innerHTML = userKeyCode;
  code.innerHTML = userCode;
}

cardKey.addEventListener("click", function () {
  if (key.textContent !== "") {
    createAndCopy(key.textContent);
  } else {
    showEnterKey();
  }
});
cardCode.addEventListener("click", function () {
  if (code.textContent !== "") {
    createAndCopy(code.textContent);
  } else {
    showEnterKey();
  }
});
cardKeyCode.addEventListener("click", function () {
  if (keyCode.textContent !== "") {
    createAndCopy(keyCode.textContent);
  } else {
    showEnterKey();
  }
});

function showEnterKey() {
  enterKey.classList.add("enter-key--open");
  setTimeout(function () {
    enterKey.classList.remove("enter-key--open");
  }, 1300);
}

function createAndCopy(value) {
  var element = document.createElement("textarea");
  element.value = value;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  element.remove();
  copyOutput.classList.add("copy-output--open");
  setTimeout(function () {
    copyOutput.classList.remove("copy-output--open");
  }, 1500);
}