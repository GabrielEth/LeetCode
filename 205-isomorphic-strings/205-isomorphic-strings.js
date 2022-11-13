/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
    let maps = new Map();
    let mapt = new Map();
    for(let [index,value] of Array.from(s).entries()){
        if(!maps.has(value)  && !mapt.has(t[index])){
            maps.set(value,t[index]);
            mapt.set(t[index], value);
        }else if(maps.get(value) != t[index]) return false
        else if(mapt.get(t[index]) != value) return false
        }
    return true
    
    
};