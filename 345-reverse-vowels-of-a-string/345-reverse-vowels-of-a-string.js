/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(s) {
    let vowels = ['a','A','e','E','i','I','o','O','u','U'];
    
    let pointer1 = 0;
    let pointer2 = s.length-1;
    let answer = s.split('');
    while(pointer1 < pointer2){
        if(vowels.includes(s[pointer1]) && vowels.includes(s[pointer2])){
           // [answer[pointer1],answer[pointer2]] = [answer[pointer2],answer[pointer1]];
            let temp = answer[pointer1];
            answer[pointer1] = answer[pointer2];
            answer[pointer2] = temp;
            pointer1++;
            pointer2--;
        
        }else if (!vowels.includes(s[pointer1])){
            pointer1++;
        }else{
            pointer2--;
        }
    }
    
   return answer.join(''); 
};