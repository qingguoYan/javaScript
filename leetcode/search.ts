class Search {
    binarySearch(arr:number[],target:number):number{
        //[ 0,1 ,2,3,4,5,6,7,8]
        let left = 0;
        let right = arr.length -1;
        while(left <= right){
            console.log((left+right)/2);    
            let middle = parseInt((String((left+right)/2)));
            console.log(middle);
            if(arr[middle] === target) return middle;
            if(arr[middle]<target)
                left = middle+1 ;
            
            if(arr[middle]>target)
            right = middle-1;
        }
       return -1;
    }
    binarySearchRec(arr:number[],target:number):number{
        function search(arr:number[],target:number,left:number,right:number):number{
            if(left > right) return -1;
            let middle = parseInt((String((left+right)/2)));
            if(arr[middle] === target) return middle;
            if(arr[middle] < target) return search(arr,target,middle + 1,right);
            return search(arr,target,left,middle - 1)
        }
        return search(arr,target,0,arr.length - 1);
    }
}

const search = new Search();
console.log(search.binarySearchRec([1,2,3,4,5,6,7,8,9],9));
