class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();
        if(s.length != t.length) return false;
        for(let i=0;i<s.length;i++){
            if(sMap.has(s[i])){
                let val = sMap.get(s[i])
                sMap.set(s[i],++val);
            }else{
                sMap.set(s[i],0);
            }
        }
        for(let i=0;i<s.length;i++){
            if(tMap.has(t[i])){
                let val = tMap.get(t[i])
                tMap.set(t[i],++val);
            }else{
                tMap.set(t[i],0);
            }
        }
        for(let[key,val] of sMap){
            if(tMap.get(key) != val) return false
        }
        return true;
    }
}
