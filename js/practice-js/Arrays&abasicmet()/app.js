// <h1>Array</h1>

// <p> Array is DS and order collection of Data</p>


// <hr>
// <p>
//     let arr = [1,2,3,4,5,6,7]
//     undefined
//     arr
//     [1, 2, 3, 4, 5, 6, 7]
// </p>

// <h3>random array</h3>
// <p>
//     let randomArr = [1,"orange",4.65 , true , undefined , null] <br>
//     randomArr <br>
//     [1, "orange", 4.65, true, undefined, null] <br>
// </p>

// <h3>concat</h3>
// <p>  
//     let arr = [1,2,3] <br>
//     undefined <br>
//     let arr2 = ["one","two","three"] <br>
//     undefined <br>
//     let arr3 = arr.concat(arr2) <br>
//     undefined <br>
//     arr3 <br>
//     [1, 2, 3, "one", "two", "three"]
// </p>
// <hr>
// <h2>Basic Methods of Array</h2>

//     <h5>shift() method  remove a index from the front of the array</h5>

//     <p>
//         let fruits = ["mango","orange","banana"] <br>
//         undefined <br>
//         console.log(fruits); <br>
//         (3) ["mango", "orange", "banana"]0: "mango"1: "orange"2: "banana"length: 3__proto__: Array(0) <br>
//         undefined <br>
//         console.log(fruits.shift()) <br>
//         1 mango <br>
//         undefined <br>
//         fruits <br>
//         (2) ["orange", "banana"]0: "orange"1: "banana"length: 2__proto__: Array(0)
//     </p>

   

//     <h5>push() method add a index at the end of the array</h5>
//     <p>
//     let a = ["green","yellow","red"] <br>
//     undefined <br>
//     a <br>
//     (3) ["green", "yellow", "red"] <br>
//     a.push("brown") <br>
//     4 <br>
//     a <br>
//     (4) ["green", "yellow", "red", "brown"]
//   </p>

//   <h5>unshift() add a index at the front of the array</h5>

//   <p>
//     let a = ["audi","bmw","marcedege"] <br>
//     undefined <br>
//     a <br>
//     (3) ["audi", "bmw", "marcedege"] <br>
//     a.unshift("maruti") <br>
//     4 <br>
//   </p>

//   <h5>pop() methdo remove a index at the end of the array</h5>
//   <p>
//     let a = [1,2,3,4,5] <br>
//     undefined <br>
//     a <br>
//      [1, 2, 3, 4, 5] <br>
//     a.pop(); <br>
//     5 <br>
//   </p>

//   <h5>Includes() method to know value exist or not</h5>
//   <p>
//     let a = [1,2,3,4,5,6,7] <br>
//     undefined <br>
//     a <br>
//     (7) [1, 2, 3, 4, 5, 6, 7] <br>
//     a.includes(4) <br>
//     true <br>
//     a.includes(9) <br>
//     false
//   </p>
//   <h5>reverse() method to reverse the value of a array</h5>
//   <p>
//     let a = [1,2,3,4,5] <br>
//     undefined <br>
//     a <br>
//     (5) [1, 2, 3, 4, 5] <br>
//     a.reverse() <br>
//     (5) [5, 4, 3, 2, 1] <br>