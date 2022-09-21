let arr = [1,2,3,4,5,6,7,8,9,10]
let x = 3

let high = arr.length-1
let low = 0

while(low <= high){

    let mid = parseInt((high+low) / 2)

    if(arr[mid] == x){
        console.log( mid)
        
    }

    if(arr[mid] > x){
        high = mid -1
    }else{
        low = mid +1
    }
   
}

if(!arr.includes(x)){
    console.log('-1')
}


