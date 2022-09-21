// let arr = [ -2, 45, 0, 11, -9 ];
let arr = [8, 22, 7, 9, 31, 5, 13]

let count = 0
function bubble(arr){


    for(let i = 1;i<arr.length;i++){
        // let flag = false

        for(let j = 0;j<(arr.length-i);j++){

            if(arr[j] > arr[j+1]){
                let temp  = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                count++
                // flag = true
                
            }
            // if(flag == false){
            //     break;
            // }
        }
    }
}
bubble(arr);
console.log(count)
console.log(arr)