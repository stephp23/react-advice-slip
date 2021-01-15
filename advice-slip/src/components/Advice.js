import React from "react";

const Advice = ({ word, clickButton }) => (
  <div>
    <h1>Get Advice</h1>
    <input type="text" />
    <button>get advice </button>
    <button onClick= {clickButton}>random advice</button>
    <h1>{ word }</h1>
  </div>
  

)

export default Advice;