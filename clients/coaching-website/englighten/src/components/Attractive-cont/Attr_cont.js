import React from 'react'
import { attr__data } from './AttrData'
function Attr_cont() {
  return (
    <>
        <div className='attr'>

        <div className='attr__child'>
            <ul>
            {attr__data.slice(0,4).map((value,index)=>{
                <li key={index} className={value.cName}>{value.title}</li>
                console.log(value.title)
            })}
            </ul>
        </div>
        <div className='attr__child'></div>
        <div className='attr__child'></div>


        </div>
    </>
  )
}

export default Attr_cont
