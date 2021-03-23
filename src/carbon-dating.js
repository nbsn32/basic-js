const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let nSampleActivity = parseFloat(sampleActivity);
  let k = (0.693 / HALF_LIFE_PERIOD);
  let t = Math.ceil((Math.log(MODERN_ACTIVITY / nSampleActivity)) / k);
      
  if (typeof sampleActivity !== "string" || Object.is(NaN, nSampleActivity) || nSampleActivity <= 0 || 15 <= nSampleActivity) 
    return false;

  return t;
};
