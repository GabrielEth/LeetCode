/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    
    //check is object contains current value
       // if yes return true
       // add current value to object
    //return false
    
    let objectN = []
    for (const i of nums){
        if(objectN.includes(i)) return true;
        objectN.push(i);
    } return false
};