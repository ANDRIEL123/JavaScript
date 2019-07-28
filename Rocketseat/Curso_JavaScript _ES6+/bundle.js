"use strict";

var arr = [1, 5, 11, 22, 30];

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 5));
var arr1 = [1, 3, 6];
var arr2 = [2, 4, 5];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
