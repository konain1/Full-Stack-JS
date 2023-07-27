


function Api({datas}) {

    console.log(datas)

    

  return (
    <div style={{display:'flex' }}>
      {
        datas?.slice(0,10).map((data,index)=>{
            return ( <div style={{ margin:'20px 20px' , display:'flex' , border:'1px solid black'}}>
                <p key={index}>{data.login}</p> 

                <img key={data.id} src={data.avatar_url} style={{height:'40px' , width:'40px' , borderRadius:'50%'}} / > 
            </div>

                )

        })
      }

      
    </div>
  )
}

export default Api
