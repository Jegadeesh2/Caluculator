"use strict";

//Getting Elements By ID

const displayEle = document.getElementById("display");

//Functions

function ac() {
  let toClear = (displayEle.value = "");
}

function del() {
  let toDelete = displayEle.value;
  displayEle.value = toDelete.substring(0, toDelete.length - 1);
}

function keys(value) {
  let displayValue = (displayEle.value += value);
}

function operator(value) {
  let displayOperator = (displayEle.value += value);
}

function equalTo() {
  let toEqual = displayEle.value;
  displayEle.value = eval(toEqual).toFixed(3);
}
