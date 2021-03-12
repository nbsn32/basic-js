module.exports = function countCats(inx) {
  let cats = 0;
  for (let item of inx) {
    for (let el of item) {
      if (el==='^^') {
        cats++;
      }
    }
  }
  return cats;
};
