// import { useState } from "react";


// export const ButtonsComponent = () => {
//   const [input,setinput]=useState('')

//   const handleButtonClick=(value)=>{
//     setinput(input+value)
//   }
  
//   return (
//     <div className="container">
//       <p>Calculator</p>
//       <div></div>
//       <div className="buttons">
//         <input className="calc-input" value={input}></input>

//         <button>C</button>
//         <button>x</button>
//         <button>()</button>
//         <button>+</button>

//         <button onClick={()=>handleButtonClick('7')}>7</button>
//         <button>8</button>
//         <button>9</button>
//         <button>-</button>

//         <button>4</button>
//         <button>5</button>
//         <button>6</button>
//         <button>*</button>

//         <button>.</button>
//         <button>0</button>
//         <button>%</button>
//         <button>=</button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import * as math from "mathjs"; // Import math.js library

export const ButtonsComponent = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    try {
      const result = math.evaluate(input); // Use math.evaluate for safe mathematical evaluation
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <p>Calculator</p>
      <div className="buttons">
        <input className="calc-input" value={input} readOnly />

        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleButtonClick("*")}>x</button>
        <button onClick={() => handleButtonClick("(")}>(</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        

        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleEquals()}>=</button>
      </div>
    </div>
  );
};
