const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1,                   //**********************************************************//
      separator = options.separator || '+',                     //принимаем входное значение ИЛИ(||) используем по умолчанию//
      additionRepeatTimes = options.additionRepeatTimes || 1,   //                                                          //
      additionSeparator = options.additionSeparator || '|',    //**********************************************************//
      arr = [],
      additionInput;
  

if (options.addition === null) {
  additionInput = 'null';
} else if (options.addition == false) {
  additionInput = 'false';
} else {
  additionInput = options.addition || '';
}

for (let j = 0; j < additionRepeatTimes; j++) {
  arr.push(`${additionInput}`);
}

let subStr = arr.join(additionSeparator),
    res = [];

for (let j = 0; j < repeatTimes; j++) {
  res.push(`${str}${subStr}`);
}
return res.join(separator);
};