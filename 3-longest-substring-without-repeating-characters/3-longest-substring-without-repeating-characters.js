/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    if (s.length == 1) return 1;
    if (s.length == 2 && s[0] != s[1]) return 2;
    if (s.length == 0) return 0
    
    let areCharDiff = function (string, startIndex, EndIndex){
        let arr = [];
        for(let i = startIndex; i <= EndIndex; i++){
            if(arr.includes(string[i])) return false
            else arr.push(string[i])
        }
        return true;
    }
    let answer = 0
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer2 < s.length){
        if(areCharDiff(s,pointer1,pointer2)){
            answer = (pointer2 - pointer1) + 1; 
            pointer2 ++;
            
        }else{
            pointer1++ 
            pointer2++ 
        } 
    }
    return answer;

};