/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let List = new ListNode(0);
  let current = List;
  let temp = 0;
  let res = 0;
  while (l1 !== null || l2 !== null || temp) {
    if (l1 !== null) {
      res += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      res += l2.val;
      l2 = l2.next;
    }
    res += temp
    temp = Math.trunc(res / 10);
    current.next = new ListNode(res - temp * 10);
    current = current.next;
    res = 0;
  }
  return List.next;
};
