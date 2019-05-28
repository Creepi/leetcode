/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
const arrObj = {
  I: {
    IV: 4,
    IX: 9
  },
  X: {
    XL: 40,
    XC: 90
  },
  C: {
    CD: 400,
    CM: 900
  }
};
const roma = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
var dirCheck = (sArr, i) => {
  if (sArr[i + 1] && arrObj[sArr[i]]) {
    let temp = sArr[i] + sArr[i + 1];
    if (arrObj[sArr[i]][temp]) {
      return temp;
    } else {
      return sArr[i];
    }
  } else {
    return sArr[i];
  }
};
var romanToInt = function(
  s) {
  let result = 0;
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    let value = dirCheck(sArr, i);
    if (value.length != 1) {
      result += arrObj[value[0]][value];
      i++;
    } else {
      result += roma[value];
    }
  }
  return result;
};
