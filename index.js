"use strict";

function locate(array, target) {
  // do work here
  answer = false;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      locate(array[i], target);
    }
    if (array[i] == target) {
      answer = true;
    }
  }

  return answer;
}

module.exports = locate;
