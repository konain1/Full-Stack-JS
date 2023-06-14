import React from "react";
import { tests } from "./Test_data";
function Course_card_box() {
  return (
    <div className="course-card-box">
      {tests.map((items, index) => {
        return (
          <>
            {" "}
            <div key={index} className="upper-strip">
              {" "}
              {items.testTitle} {items.Date} 
            </div>
            <div className="questions-quntity">{items.Questions} </div>

            <div className="live"> {items.Live}</div>

            <div className="btn">{items.buttonDetails}</div>
          </>
        );
      })}
    </div>
  );
}

export default Course_card_box;
