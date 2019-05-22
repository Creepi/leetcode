/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] != val){
            nums[temp] = nums[i]
            temp++
        }
    }
    return temp
};