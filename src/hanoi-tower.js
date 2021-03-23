const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  //The minimal number of moves required to solve a Tower of Hanoi puzzle is 2^n − 1, where n is the number of disks
  result.turns = (2 ** disksNumber) - 1;
  result.seconds = Math.floor(result.turns * (3600 / turnsSpeed));
  return result;
};
