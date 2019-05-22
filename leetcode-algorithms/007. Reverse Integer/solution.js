/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = ''
    let abs  = ''
    if(x.toString()[0] !== '-') {
        abs = ''
    }else{
        abs = '-'
    }
    x = Math.abs(x).toString().split("")
    for(let i = 0;i < parseInt(x.length/2);i++){
        temp = x[i]
        x[i] = x[x.length - i - 1]
        x[x.length - i - 1] = temp
    }
    let fin = abs + x.join("")
    
    if(fin< -2147483648 || fin > 2147483647) {
        return 0
    }else{
        return (fin)
    }
    
};