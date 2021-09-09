import React, { useState } from "react";

function Question1() {
  // Declare a new state variable, which we'll call "count"

  const [index, setindex] = useState("Hello World!");


  return (
    <div>
      <p
        onClick={() => {
          index === "Hello World!"
            ? setindex("Hello Palestine")
            : setindex("Hello World!");
        }}
      >
        
        {index}
      </p>

    
    </div>
  );
}
export default Question1;
// var  a = (aa) =>{
//     return <p>{ aa}</p>
// }
