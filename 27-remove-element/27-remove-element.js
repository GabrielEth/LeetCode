/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    for(const [i,value] of nums.entries()){
        if(value === val){
            nums.splice(i,1);
            let el = removeElement(nums,val);
        }
    }
    return nums.length;
};