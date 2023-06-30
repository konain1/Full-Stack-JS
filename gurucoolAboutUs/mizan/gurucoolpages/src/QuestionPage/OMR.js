import './OMR.css'
import {Link} from 'react-router-dom'



function OMR(props) {


    
  return (

     
    <div className='omrSheet'>
    <div className='omrSheetArea'>
    
     {props.data.map((items,key)=>{
        return(
            <div >
           
            <button key={key} className='QNO'> <a href={`#${items.serialNo}`}> {items.serialNo}</a> </button>
            </div>
        )
     })}
     </div>
     {/* <div className='result'>
        <div className='correct'> <p>correct</p> 22</div>
        <div className='wrong'><p>wrong</p> 7</div>
        <div className='unAttempted'><p>UnAttempted</p> 11 </div>
     </div> */}
    </div>
  )
}

export default OMR
