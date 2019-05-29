/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = "";
  const roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  let len = 1;
  while (num / len > 10) {
    len *= 10;
  }
  while (num > 0) {
    let current = Math.trunc(num / len) * len;
    let currnetTrunc = Math.trunc(num / len);
    if (roman[current]) {
      result += roman[current];
    } else {
      if (currnetTrunc == 4 || currnetTrunc == 9) {
        result += roman[len] + roman[current + len];
      } else {
        let temp = 0;
        if (currnetTrunc > 5) {
          temp = currnetTrunc - 5;
          result += roman[5 * len];
        } else {
          temp = currnetTrunc;
        }
        for (let i = 0; i < temp; i++) {
          result += roman[len];
        }
      }
    }
    num -= current;
    len /= 10;
  }
  return result;
};
