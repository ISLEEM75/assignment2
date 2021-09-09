import React, { useState } from 'react';

function Question2() {
    
  // Declare a new state variable, which we'll call "count"
    const [inputText, setinputText] = useState({
      username: " <username> ",
      email: " <email>",
    });
    
 const handleChange = (prop) => (event) => {
   setinputText({ ...inputText, [prop]: event.target.value });
   // console.log(event.target.value,'this is the value in handle change')
 };
 
  return (
    <div>
      {/* <p>You clicked {count} times</p> */}
      <h1>{inputText.username } </h1>
      <h1> {inputText.email }</h1>
      <br />
      <label> Enter Email </label>
      <input type="text" onChange={handleChange("email")} />
      <br />
      <label> Enter Username </label>
      <input type="text" onChange={handleChange("username")} />
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
export default Question2;
