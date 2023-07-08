
let url = 'https://catfact.ninja/fact'

const fetchData =()=>{

   const data = fetch(url).then((respronse) => respronse.json())
   .then((data) =>  console.log(data.fact))

    
}

fetchData();