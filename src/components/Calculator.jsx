import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import InputKeys from './InputKeys';

const Calculator = () => {
    const [symbol, setSymbol] = useState("");
    const [displayEXP, setDisplayEXP] = useState("");
    const [finalResult, setFinalResult] = useState("0");

    const scienceFunc = {
        sin: "Math.sin",
        cos: "Math.cos",
        tan: "Math.tan",
        log: "Math.log10",
        ln: "Math.log",
        π: "Math.PI",
        e: "Math.E",
        "^": "**",
        "√": "Math.sqrt",
    }

    const calculateResult = () => {
        if (symbol.length !== 0) {
          try {
            // Extract the number following the √ symbol
            const sqrtRegex = /√\((.*?)\)/;
            const matches = symbol.match(sqrtRegex);
      
            if (matches) {
              // Replace √(...) with Math.sqrt(...)
              symbol = symbol.replace(sqrtRegex, `Math.sqrt($1)`);
            }
      
            let compute = eval(symbol);
            compute = parseFloat(compute.toFixed(3));
            setFinalResult(compute);
          } catch (error) {
            setFinalResult("Error occurred! Try Again!");
          }
        } else {
          setFinalResult("An error Occurred!");
        }
      };
    const handleButton = (value) => {
        if (value === "AC") {
            setSymbol("");
            setDisplayEXP("");
            setFinalResult("0");
        } else if (value === "DEL") {
            setDisplayEXP(displayEXP.slice(0, -1));
            setSymbol(symbol.slice(0, -1)); 
        }

        else if(scienceFunc.hasOwnProperty(value)){
            setDisplayEXP(displayEXP + value)
            setSymbol(symbol + scienceFunc[value])
        }
        
        else if (value === "!"){
            const LastNum = extractLastNumber(symbol)
            if(LastNum != null){
                const num = parseFloat(LastNum)
                setDisplayEXP(displayEXP+ value)
                setSymbol(symbol.replace(LastNum, factorial(num)))
            }
        }
        else if (value === "=") {
            calculateResult();
        } else {
            setSymbol(symbol + value);
            setDisplayEXP(displayEXP + value);
        }
    };

    const factorial = (n) => {
        let result = 1;
        for (let i = 1; i <= n; i++)
            {result *= i;}
        return result;
        
    }

    const extractLastNumber = (exp) => {
        const numbers = exp.match(/\d+/g)
        return numbers ? numbers[numbers.length-1] : null
    }

    return (
        <div className='calculator'>
            <CalculatorDisplay symbol={displayEXP} finalResult={finalResult} />
            <InputKeys handleButton={handleButton} />
        </div>
    );
};

export default Calculator;