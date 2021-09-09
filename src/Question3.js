import React, { useState } from "react";

function Question3() {
  // Declare a new state variable, which we'll call "count"
  const [sentence, setsentence] = useState([
    "sentence number 1",
    "sentence number 2",
    "sentence number 3",
    "sentence number 4",
    "sentence number 5",
    "sentence number 6",
    "sentence number 7",
    "sentence number 8",
    "sentence number 9",
    "sentence number 10",
  ]);
     const [index, setindex] = useState(0);

  // const handleChange = (prop) => (event) => {
  //   setsentence({ ...sentence, [prop]: event.target.value });
  //   // console.log(event.target.value,'this is the value in handle change')
  // };
  var selectRondomNumber = () => {
    return setindex(Math.floor(Math.random() * 10))
 
  };
  return (
    <div>
      <p>{sentence[index]}</p>

      <button
        onClick={() => {
         selectRondomNumber();
        }}
        //   <p>{sentence[4]}</p>}
      >
        change sentence
      </button>
    </div>
  );
}
export default Question3;
// var  a = (aa) =>{
//     return <p>{ aa}</p>
// }