/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let index_max = 0
    let value = 0
    let temp_max = height[0]
    let temp_left =  temp_max
    let temp_right =  height[height.length - 1]
    for(let i = 0;i<height.length;i++){
        if(height[i] > temp_max){
            index_max = i
            temp_max = height[i]
        }
    }
    for(let j = 0;j < height.length - 1;j++){
        if( j < index_max) {
            if(height[j + 1] < temp_left) {
                value += temp_left - height[j + 1]
            }else{
                temp_left = height[j + 1]
            }
        }else{
            if(height[height.length - j + index_max - 1] < temp_right) {
                value += temp_right - height[height.length - j + index_max - 1]
            }else{
                temp_right = height[height.length - j + index_max - 1]
            }
        }

    }
    
    return value
};