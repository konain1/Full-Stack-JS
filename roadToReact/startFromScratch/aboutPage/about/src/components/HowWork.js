import React, { Component } from "react";

export class HowWork extends Component {
  render() {
    return (
      <>
        <div class="container-fluid howWorkCont" >
          <div className="howMomentWork">
            <h1>How MomentByte works</h1>
          </div>

          <div class="myCont2">
            <div class="row myRow2"  >
              <div class="col-sm myColumn2"style={{border:'1px solid black',height:'20rem'}} >
              <div className="col-circle"> <img src=""/></div>
              <div>Accesseble</div>
              <div  className="description">Almost all the great tools and content pools that Gurucool makes are available to all the learners and educators.</div>
              </div>

              <div class="col-sm myColumn2"style={{border:'1px solid black',height:'20rem'}} >
              <div className="col-circle"> lorem</div>
              <div>Accesseble</div>
              <div  className="description">Almost all the great tools and content pools that Gurucool makes are available to all the learners and educators.</div>
              </div>  


              <div class="col-sm myColumn2"style={{border:'1px solid black',height:'20rem'}} >
              <div className="col-circle"> lorem</div>
              <div>Accesseble</div>
              <div  className="description" >Almost all the great tools and content pools that Gurucool makes are available to all the learners and educators.</div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HowWork;
