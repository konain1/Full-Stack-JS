import React from "react";
import { tests } from "./Test_data";
import './Course_card_box.css'
import Buttons from "./Buttons";




function Course_card_box() {
  return (
    <div className="course-card-box">
      {tests.map((items, index) => {
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

            <div className="live"> {items.Live}</div>

            {/* <div className="btn">{<Buttons details={items.buttonDetails}/>}</div> */}

            <div className="btn">{items.buttonDetails}</div>

            </div>
          </>
        );
      })}
    </div>
  );
}

export default Course_card_box;
