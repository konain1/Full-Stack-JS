

// const products = [{ name: "T-Shirt", price: 25 }
// ,{ name: "Headphones", price: 125 },
// { name: "Keyboard", price: 75 },
// { name: "Monitor", price: 200 },];

// let price = products.filter(function(i){
//     return i.price > 99;
// }).map(function(i){
//     console.log(i.price)

// })


//Get the movie Names from this Array of Objects//method
//  and only get the movie name which has rating higher than or equal to 8
 // use Filter and map chaining to achaive the objectivevar


//  var newReleases = [{"id": 1,"title": "Die Hard","rating":9},
//  {"id": 2,"title": "Bad Boys","rating":7},
//  {"id": 3,"title": "The Chamber","rating": 10},];

//  let highratedMovie = newReleases.filter(function(movie){
//      return movie.rating > 7;
//  }).map(function(i){

//    let movieName =  i.title ;
//     return movieName;
//  })

//  console.log(highratedMovie)



//You have to use map function and have to get all the students name in upperCase//Map Questionlet 

//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord//use filter method to approach the problemlet

var studentRecords = [ {name: 'Abhishek', id: 123, marks : 98 },
{name: 'Udai', id: 101, marks : 90 }
,{name: 'Himanshu', id: 200, marks : 96 }
,{name: 'Mrinal', id: 115, marks : 75 } ]

let nameUppercase = studentRecords.map(function(student){
    return student.name.toUpperCase();
})

console.log(nameUppercase)


 var studentMarksRecords = [ {name: 'Abhishek', id: 123, marks : 98 },
 {name: 'Udai', id: 101, marks : 90 },{name: 'Himanshu', id: 200, marks : 96 }
 ,{name: 'Mrinal', id: 115, marks : 75 } ]

 let studentDetails = studentMarksRecords.filter(function(marks){
     return marks.id > 119 && marks.marks >=50;
 })

 console.log(studentDetails)