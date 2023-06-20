// import { tests } from "./Test_data";
import './Course_card_box.css'
import Buttons from "./Buttons";
import Menu from "../MenuHover/Menu";




function Course_card_box(props) {


  return (
    <div className="course-card-box">
      {console.log(props.val)}
      {props.val.map((items, index) => {

        const btnKeys = Object.keys(items?.button);
        {/* console.log(btnKeys) */}
        return (
          <>
            {" "}
            <div className="cards">
            <div key={index} className="upper-strip">
              {" "}
              <span>{items.testTitle} </span> <span> {items.Date} </span>
            </div>
            <div className="questions-quntity">{items.Questions} </div>
            <div className="time">{items.Time}</div>

            {/* <div className="live"> {items.Live}</div> */}
            {/* <Buttons Live={items.Live}/>


           <Buttons details={items.buttonDetails}/> */}
           
           {btnKeys?.map((btn,key) => <Buttons text={items.button[btn]}/>)}

           {/* {if items.} */}

            {/* <div className="btn">{items.buttonDetails}</div> */}

            </div>
          </>
        );
      })}
    </div>
  );
}

export default Course_card_box;
