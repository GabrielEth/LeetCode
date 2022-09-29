/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    
    let aIndex = -1;
    for (const [index,value] of nums.entries()){
        if(value === target){
            aIndex = index;
        }
    }
    return aIndex;
    
};