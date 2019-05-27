/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x >= 0) {
    let len = 1; 
    let x_left = 0;
    let x_right = 0;
    while (x / len > 10) { //（排除10*n的情况拿不到右边的值）
      len *= 10;
    }
    while (x > 0) {
      x_left = Math.trunc(x/len)
      x_right = x % 10
      if(x_left !== x_right){
        return false
      }else{
        x = Math.trunc((x%len)/10) // 去除左右两边各一位
        len /= 100
      }
    }
    return true
  } else {
    return false;
  }
};
