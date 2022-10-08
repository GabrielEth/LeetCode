/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    
    let maxProfit = 0;
    let minSoFar = 10000;
    
    for(const [i,value] of prices.entries()){
        if (value < minSoFar){
           minSoFar = value; 
        }else{
          maxProfit = Math.max(maxProfit, value - minSoFar);  
        }
    }
    return maxProfit;
};
    
    
