class StringUtils{
    //找出一个字符串的元音数量
    countVowels(str:string):number{
        const vowels = ["a","e","i","o","u"];
        let count = 0
        for(let c of str.toLocaleLowerCase()){
            if(vowels.includes(c)) count++;
        }
        return count;
    }
    //反转一个字符串
    reverse(str:string):string{
        let reverseArr = [];
        for(let i = str.length - 1 ;i >= 0; i--){
            reverseArr.push(str[i]);
        }
        return reverseArr.join("");
    }
    //反转一个字符串语句 i love you -> you love i
    reverseWord(str:string):string{
       const arr =  str.split(" ");
       console.log(arr);
       
       const arr2 = [];
       for(let i = arr.length - 1;i>=0;i--){
         arr2.push(arr[i])
       }
       return arr2.join(" ");
    }
    //删除重复的字符 aabbcc -> abc
    removeDuplicates(str:string):string{
        const arr = [];
        for(let i = 0 ;i<str.length;i++){
            if(!arr.includes(str.charAt(i))) arr.push(str.charAt(i));
        }
        return arr.join("");
    }
    //找到字符串出现次数最多的字符
    findMostStr(str:string):string{
        const obj = {};
        for(let i = 0 ;i < str.length ;i++){
            if(Object.keys(obj).includes(str.charAt(i))){
                obj[str.charAt(i)] = obj[str.charAt(i)] + 1
            }else{
                obj[str.charAt(i)] = 1;
            }
        }
        let maxCount  = 0;
        let maxStr = '';
        for(let key in obj){
            if(obj[key]>maxCount){
                maxCount = obj[key];
                maxStr = key;
            }
        }
        return maxStr;
    }
    //将每个字符串首字符大写
    capitailize(str:string):string{
        const arr = str.split(" ");
        console.log(arr.entries().next());
        for(let [index,value] of arr.entries()){
            console.log(index);
            
            if(value){
                arr[index] = value[0].toLocaleUpperCase()+value.substr(1);
            }
        }
        return arr.join(" ")
    }
    //判断回文字符串 ABBA
    isPalindrome(str:string):boolean{
        let left = 0;
        let right = str.length - 1;
        while(left < right){
            if(str[left] !== str[right])
                return false;
            left++;
            right--;    
        }
        return true;
    }
}

const strUtils = new StringUtils();
// console.log(strUtils.countVowels("yanqingguoO"));
// console.log(strUtils.reverse("yanqingguoO"));
// console.log(strUtils.reverseWord("  yan qing  guo  "));
// console.log(strUtils.removeDuplicates("aabb cc"));
// console.log(strUtils.findMostStr("aaaabbbbccc"));
// console.log(strUtils.capitailize("yan qing guo ! como on !"));
console.log(strUtils.isPalindrome("ABAABA"));




