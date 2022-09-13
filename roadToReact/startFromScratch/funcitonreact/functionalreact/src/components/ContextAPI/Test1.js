import ChildA from "./ChildA";

import React, { useState, useContext } from "react";
import ChildB from "./ChildB";

export const  Context = React.createContext(null);

function Test1() {
  const [naam, setNaam] = useState("neeru");
  return (
    <Context.Provider value={{ naam }}>
      <h1>this is coming from test</h1>
      <ChildB />
    </Context.Provider>
  );
}

export default Test1;
