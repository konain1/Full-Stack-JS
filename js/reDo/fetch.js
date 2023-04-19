 fetch("https://api-ninjas.com/api/cats").then((res)=>res.json).then((data)=>{
    console.log(data)
 })