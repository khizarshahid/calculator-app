import React from 'react'

const CalculatorDisplay = ({symbol, finalResult}) => {
  return (
    <div className='calculator-display'>
        <p className='symbols'>{symbol}</p>
        <p className='final-result'>{finalResult}</p>
    </div>
  )
}

export default CalculatorDisplay