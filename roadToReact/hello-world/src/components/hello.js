import React, { createElement } from "react";

const Hello  = () => {

    // with jsx
    // return  (
    //     <div>
    //     <h1>Hello jsx</h1>
    //     </div>
    // )

    // without jsx

    return React.createElement('div',{id:'helicopter'},createElement('h1',{className:'drone'},'this is from createElement'));

}

export default Hello