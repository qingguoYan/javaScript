class Sort{
    bubbleSort(arr:number[]):number[]{
        for(let i = 0 ; i < arr.length - 1; i++){
            for(let j = 0; j < arr.length - 1 - i; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            console.log(`第${i+1}轮:`+arr);
            
        }
        return arr;
    }

    insertSort(arr:number[]):number[]{
        for(let i = 1;i<arr.length;i++){
            let j = i-1;
            while(j>=0){
                if(arr[j]>arr[j +1]){
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
                j--;
            }
            console.log(arr);         
        }
        return arr;
    }

}

const sort = new Sort();
console.log(sort.insertSort([8,7,6,6,5]));
// 8 7 6
// 7 8 6
// 7 6 8