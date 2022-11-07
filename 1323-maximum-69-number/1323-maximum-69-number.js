/**
 * @param {number} num
 * @return {number}
 */
let maximum69Number  = function(num) {
   let arrOfNum = Array.from(String(num),Number)
   for(let i = 0; i < arrOfNum.length; i++){
       if(arrOfNum[i] === 6){
           arrOfNum[i] = 9;
           return arrOfNum.join("");
       }
   }return num
    
};