/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var isDiv = function(num) {
  let numArr = num.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    if (num % numArr[i] !== 0) return false;
  }
  return true;
};
var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (i % 10 === 0) continue;
    if (isDiv(i)) result.push(i);
  }
  return result;
};
