import React from 'react'
import { attr__data } from './AttrData'
import "./Attr_cont.scss"


function Attr_cont() {
  return (
    <>
        <div className='attr'>

        <div className='attr__child'>
            <ul>
            {attr__data.slice(0,3).map((value,index)=>{
                    return(
                        <li key={index} className={value.cName}>  <i class="fa-solid fa-star-of-life" ></i>  {value.title}</li>
                    )
                
            })}
           
            </ul>
        </div>
        <div className='attr__child'>

        <ul>
            {attr__data.slice(3,6).map((value,index)=>{
                return(<li key={index} className={value.cName}> <i class="fa-solid fa-star-of-life" ></i>   {value.title}</li>
               
                )
            })}
            </ul>
        </div>

        <div className='attr__child'>

        <ul>
         {attr__data.slice(6,9).map((value,index)=>{
        return(<li key={index} className={value.cName}> <i class="fa-solid fa-star-of-life" ></i>   {value.title}</li>
       
            )
            })}
    </ul>
</div>


        </div>
    </>
  )
}

export default Attr_cont
