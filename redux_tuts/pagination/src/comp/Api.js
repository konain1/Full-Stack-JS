import { useState } from "react";
import { useSelector } from "react-redux"

function Api({datas,length}) {

const [page,SetPoint] = useState(1)

    let elements =[]

    for (let i = 0; i < length; i++) {
        elements.push(i+1);
      }
   
    const pageNumberHandler = ()=>{

        let x = page

        SetPoint(x+1)

    }
    // not working as i wished

    console.log(page)



  return (
    <div style={{display:'grid' }}>
      {
        datas?.slice(0,length).map((data,index)=>{
            return ( <div style={{ margin:'20px 20px' , display:'flex' , border:'1px solid black'}}>
                <p key={index}>{data.login}</p> 

                <img key={data.id} src={data.avatar_url} style={{height:'40px' , width:'40px' , borderRadius:'50%'}} / > 

            </div>

                )

        })
      }

      <div style={{display:'flex' ,justifyContent:'center'}}> 
      {/* {
        elements.map((n,i)=>{
            return <button onChange={(e)=>{pageNumberHandler(e.target.value)}} style={{margin:'10px 2px'}} key={i}> {n}</button>
        })
      } */}

      <button onChange={()=>{pageNumberHandler()}}>next</button>
      </div>

      
    </div>
  )
}

export default Api
