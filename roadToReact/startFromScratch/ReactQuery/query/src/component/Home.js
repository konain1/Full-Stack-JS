import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'




function Home() {

    const {catData} = useQuery(['cat'],()=>{
        return axios.get('https://catfact.ninja/fact').then((res)=>res.data)
    })
    // console.log(catData?.fact)
  return (
    <div>
      <h1>i'm coming Home {catData}</h1>


    </div>
  )
}

export default Home
