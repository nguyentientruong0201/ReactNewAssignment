import "./counter.css";
import { useState } from 'react';
import React, { useEffect } from "react";

function Counter() {
  const [value, setValue] = useState(1);
  useEffect(()=>{
    document.title = "counter value: ${ value }"
 })
  const handleAdd = () => {
    console.log("add button clicked")
    setValue(value+1);
  }
  const handleMinus = () => {
    console.log("minus button clicked")
    setValue(value-1);
  }
  return (
    <div>
      <button onClick={handleMinus} className="counter__btn">-</button>
      <span className="counter__value">{ value }</span>
      <button onClick={ handleAdd } className="counter__btn">+</button>
    </div>
  );
}

export default Counter;