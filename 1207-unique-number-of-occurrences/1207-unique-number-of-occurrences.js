/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = function(arr) {
    let newMap = new Map();
    for(const [index,value] of arr.entries()){
        if (newMap.has(value)){
            newMap.set(value,newMap.get(value)+1);
        }else{
            newMap.set(value,1);
        }
    }
    let arrayOfOcc = [];
    for(const [index,value] of newMap.entries()){
       arrayOfOcc.push(value); 
    }
    let sortedArr = arrayOfOcc.sort();
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[i+1])return false;
    }
    return true;
    //if more than one key the same value
    //if none have the sme vlue
};