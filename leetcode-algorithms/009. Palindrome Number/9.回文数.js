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
  if (x < 0) return false;
  if (x < 10 || 0) return true;
  let result = 0;
  for (let i = 0; i < 15; i++) {
    if (x < Math.pow(10, i)) {
      const x_length = i;
      const x_odd = i % 2;
      const index_max = x_length - 1; // index边界
      const index_half = Math.floor(x_length / 2);
      let x_calc = x;
      for (let j = index_max; j >= index_half; j--) {
        const edge = Math.pow(10, j);
        if (x_calc < edge) continue;
        const num_current = parseInt(x_calc / edge);
        if (j === index_half && x_odd) {
          result += num_current * edge;
        } else {
          result +=
            num_current * edge + num_current * Math.pow(10, index_max - j);
        }
        x_calc = x_calc - num_current * edge;
      }
      break;
    }
  }
  return result === x;
};
