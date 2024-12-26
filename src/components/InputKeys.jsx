import React from 'react'

const InputKeys = ({handleButton}) => {
    const scientificKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√ "]; 

    const calculatorKeys = [
        '7', '8', '9', '*','/',
        '4', '5', '6','-','(',
        '1', '2', '3','+',')',
        '.', '0', 'DEL', 'AC','='
    ];
  return (
    <div className='input-keys'>
        <div className="scientific-keys">
            {scientificKeys.map((key, index) => 
            <button key={index} onClick={() => handleButton(key)} >{key}</button>
            )}
        </div>
            <div className="divider"></div>
        <div className="calculator-keys">
            {calculatorKeys.map((key, index) => 
            <button key={index} className={`${key >= "0" && key <= "9" ? "number" : ""} ${key === "=" && "equal"}`}
                onClick={() => handleButton(key)}
            >
            {key}
            </button>
            )}
        </div>
    </div>
  )
}

export default InputKeys