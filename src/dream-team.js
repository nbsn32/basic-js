const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length == 0) {
    return null;
}
  let mArr = [];
  if (Array.isArray(members) == "false") { 
    return false;
  }
  else {
   if (Array.isArray(members)) {
    members.forEach((item)=>{
      if (typeof item =='string' ){
        mArr.push(item.trim().charAt(0).toUpperCase());
      }
    });
   }
  }
    return  mArr.sort().join('');
  
};
