/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let temp_obj = {} 
    let temp_value = 0
    let val = null
    function loop(aaa) {
        temp_value = 0
        let arr = aaa.toString().split("")
        for(let i = 0;i < arr.length;i++){
            temp_value += Math.pow(arr[i],2)   
        }
        if(temp_value === 1) {
            val = true
            return true
        }else{

            if(temp_obj[temp_value] == true){
                val = false
                return false
            } 
            temp_obj[temp_value] = true
            loop(temp_value)
        }
    }
    loop(n)
    return val
};