let menu = [ "khadhai chicken","butter chicken", "onion slice","egg biryani","chicken biryani","mutton biryani","chana masala"
,"aaloo paranthe","kadhai paneer","dal makhni","egg roll","aaloo gobi","razma chawal","nan chole", "salad"];

function isVeg(food){
    if(food.toLowerCase().indexOf('chicken') !== -1 ||  food.toLowerCase().indexOf('egg') !== -1  || food.toLowerCase().indexOf('mutton') !== -1  ) {
        return false 
    }
    return true;
}
 function  isNonVeg(food){
     if(food.indexOf('chicken') >=0 ) // 0 is false and >=1 is true
         return true;
     
     return false;
 }

// console.log(isVeg)
// console.log(menu)

// let order = menu.filter(isVeg);S
let nonVeg = menu.filter(isNonVeg)
console.log(nonVeg)
console.log("Update")