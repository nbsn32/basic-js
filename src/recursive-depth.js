const CustomError = require("../extensions/custom-error");
function getArrayDepth(obj) {
  let sum = 1;
  let depth = 1;
    for (let i = 0; i < obj.length; i++) {
      if (Array.isArray(obj[i])) {
        sum += this.calculateDepth(obj[i]);
        if (sum > depth) {
          depth = sum;
        }
      }
      sum = 1;
    }
    return depth;
}
module.exports = class DepthCalculator {
  calculateDepth(obj) {
    let sum = 1;
    let dep = 1;
      for (let i = 0; i < obj.length; i++) {
        if (Array.isArray(obj[i])) {
          sum += this.calculateDepth(obj[i]);
          if (sum > dep) {
            dep = sum;
          }
        }
        sum = 1;
      }
      return dep;
    }
};