const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                    if(i + 1 < arr.length) {
                        ++i;  
                        if(arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev')
                            ++i;                                                              
                        break;
                }
            case '--double-next':
                if(i + 1 < arr.length)
                    res.push(arr[i + 1]); 
                    break;
            case '--discard-prev':
                if(res.length)
                res.pop(); 
                break;
            case '--double-prev':
                if(res.length)
                res.push(res[res.length - 1]); 
                break;
            default:
                res.push(arr[i]); 
                break;
        }
  }
  return res;
};
// `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
// `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
// `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// `--double-prev` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

