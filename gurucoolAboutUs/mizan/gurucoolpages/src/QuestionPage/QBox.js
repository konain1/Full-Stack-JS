import React from "react";
import "./Qbox.css";

function QBox(props) {
  return (
    <>
      {props.data.map((item, key) => {
        const optionKeys = Object.keys(item?.option);
        {/* console.log(item.option); */}

        return (
          <div id={item.serialNo} className="Qbox">
            {/* <div className="subject"> {item.subject}</div> */}
            <div  className="serialNo">{item.serialNo}</div>

            <div className="Qdiv">
              <div id={item.serialNo} className="Thequestion" >{item.question}</div>
              <div className="options">
                {optionKeys.map((option, index) => {
                  return (
                    <div className="option">
                      {/* {console.log(item.option[option])} */}
                      <p>
                        {" "}
                        <span style={{ fontSize: "18px" }}>
                          {option}
                        </span> : {item.option[option]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default QBox;
