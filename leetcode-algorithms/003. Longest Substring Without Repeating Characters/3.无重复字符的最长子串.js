/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 思路：维护一个滑块 如果滑块内不存在当前字符扩大滑块（右边界加一）， 存在使滑块起始点为重复元素（滑块内）的后一位
  const map = {};
  var left = 0; // 滑块左边界
  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left; // 判断重复值的索引是否在滑块内
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};
