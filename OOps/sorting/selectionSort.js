

let arr = [5,1,3,4,2]

// search smallest value and out on 0th index

for(let i = 0;i<arr.length;i++){
    // let min = i;

    for(let j = i+1;j<arr.length;j++){
        if(arr[j] < arr[i]){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
         }
    }
}
console.log(arr)