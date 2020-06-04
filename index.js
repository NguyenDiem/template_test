function findJewelAmount(j, s) {
  if (s.length > 50 || j.length > 50) return false;
  const jTypes = j.split("");
  const sElements = s.split("");
  const amount = sElements.reduce((res, item) => {
    if (jTypes.includes(item)) {
      return res + 1;
    }
    return res;
  }, 0);
  return amount;
}

var j = "Aa";
var s = "aAAbbbb";
console.log(findJewelAmount(j, s));

j = "z";
s = "ZZ";
console.log(findJewelAmount(j, s));

j = "z";
s =
  "abnbcnbdghfdfhgfjsklashdgfhdghfgdjgfjdgfhjsdgjfjsjfgjhdfgjsdgfzzkjkjkjkjkj";
console.log(findJewelAmount(j, s));
