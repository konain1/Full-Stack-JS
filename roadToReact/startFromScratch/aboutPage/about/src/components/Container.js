import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <>
      <div class="container-fluid myCont" style={{border:'1px solid black'}}>
  <div class="row ">
    <div class="col-sm myFirstColumn" style={{height:'70vh'}}>
      <div> <h3>Content is the</h3>
      <h2 style={{color:'yellowgreen'}}>Queens</h2></div>
    </div>
    <div class="col-sm" style={{height:'70vh'}}>
     <div className='frontImg' > <img src='./study.svg' />  </div>
     <div><button type="button" class="btn btn-warning" >Explore</button></div>
    </div>
    <div class="col-sm  myFirstColumn" style={{height:'70vh'}}>
      <div><p style={{padding:'14px'}}>Creativity and psychosis often go hand in hand. Or, for that matter, genius and madness. Or, for that matter, creation and curation.</p></div>
    </div>
  </div>
</div>
        
      </>
    )
  }
}

export default Container
