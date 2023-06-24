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

        return (
          <>
            {" "}
            <div className="cards">
            <div key={index} className="upper-strip">
              {" "}
              <span>{items?.testTitle} </span> <span> {items?.Date} </span>
            </div>
            <div className="questions-quntity">{items.Questions} </div>
            <div className="time">{items?.Time}</div>

         
           
           {btnKeys?.map((btn,key) => <Buttons  text={items.button[btn]}/>  ) }

          

            </div>
          </>
        );
      })}
    </div>
  );
}

export default Course_card_box;
