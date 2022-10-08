// === PSUEDO CODE ===
// import useState
// create a function for calculator
// define and set different usestates. such as, for when an operator is clicked, operator clicked should be false.
// set state for two different values or number input. that should be empty
// the state for numbers to be displayed should be set to a zero.
// create a function to handle display of numbers
// use a conditional statement to identify the different cases for there to be a number displayed
// create a function that handles the different mathematical operators
// create a function to handle the calculations such as for addition, subtration etc.
// create a function to clear the operations.

import { useState } from "react";


export default function Calc() {
    const [operatorCLicked, setOperatorClicked]= false
    const[secondValue, setSecondValue] = ""
    const [operator, setOperator] = null
    const[displayNum, serDisplayNum] = useState('0')


    //display numbers clicked by users in the display screen
  const handleDisplay = (e) => {
    if (operatorClicked === false) {
      if (displayNum === "0" && e.target.value !== ".") {
        setDisplayNum(e.target.value)
      } else if (displayNum === "0" && e.target.value === ".") {
        setDisplayNum((prev) => prev + e.target.value)
      } else if (displayNum.includes(".") && e.target.value === ".") {
        setDisplayNum((prev) => prev)
      } else {
        setDisplayNum((prev) => prev + e.target.value)
      }
    } else if (operatorClicked === true) {
        setSecondValue(displayNum)
        setDisplayNum(e.target.value)
        setOperatorClicked(false)
      }
    }
  
    const handleOperator = (e) => {
      if (e.target.value === "=") {
        handleCal()
        setSecondValue(0)
        setOperator(null)
        console.log(operator, secondValue, displayNum)
  
      }
      else {
        setOperatorClicked(true)
        setOperator(e.target.value)
        console.log(operator, secondValue, displayNum)
        if (operator !== null) {
          handleCal()
          setSecondValue(0)
          console.log(operator, secondValue, displayNum)
        }
      }
    }
  
    const handleCal = () => {
  
      if (operator === "+") {
        return setDisplayNum(`${Number(secondValue) + Number(displayNum)}`)
  
      } else if (operator === "-") {
        return setDisplayNum(`${Number(secondValue) - Number(displayNum)}`)
  
      } else if (operator === "x") {
        return setDisplayNum(`${Number(secondValue) * Number(displayNum)}`)
  
      } else if (operator === "/") {
        return setDisplayNum(`${Number(secondValue) / Number(displayNum)}`)
  
      }
  
    }
  
    const handleClear = () => {
      setDisplayNum("0")
      setOperator(null)
      setSecondValue("")
      setOperatorClicked(false)
    }
  
    return (
      <>
        <section className="container">
          <section className="header">
            <h3>Achez calculator</h3>
          </section>
  
          <section className="screen-container">
            <div className='main-display'>
              {displayNum}
            </div>
          </section>
  
  
  
          <section className='buttons'>
            <div className="flex-container">
              <button className="on" value="7" onClick={(e) => handleDisplay(e)}>7</button>
              <button className="on" value="8" onClick={(e) => handleDisplay(e)}>8</button>
              <button className="on" value="9" onClick={(e) => handleDisplay(e)}>9</button>
              <button className="orange"
                value="/"
                onClick={(e) => handleOperator(e)}>&divide;</button>
            </div>
  
            <div className="flex-container">
              <button className="darkgray-btn" value="4"
                onClick={(e) => handleDisplay(e)}>4</button>
              <button className="darkgray-btn" value="5"
                onClick={(e) => handleDisplay(e)}>5</button>
              <button className="darkgray-btn" value="6"
                onClick={(e) => handleDisplay(e)}>6</button>
              <button className="orange"
                value="x"
                onClick={(e) => handleOperator(e)}
              >x</button>
            </div>
  
            <div className="flex-container">
              <button className="darkgray-btn" value="1"
                onClick={(e) => handleDisplay(e)}>1</button>
              <button className="darkgray-btn" value="2"
                onClick={(e) => handleDisplay(e)}>2</button>
              <button className="darkgray-btn" value="3"
                onClick={(e) => handleDisplay(e)}>3</button>
              <button className="orange"
                value="-"
                onClick={(e) => handleOperator(e)}>-</button>
            </div>
  
            <div className="flex-container">
              <button id="zero" className="darkgray-btn" value="0"
                onClick={(e) => handleDisplay(e)}>0</button>
              <button className="darkgray-btn" value="."
                onClick={(e) => handleDisplay(e)}
              >.</button>
              <button className="orange" value="+" onClick={(e) => handleOperator(e)}>+</button>
            </div>
  
            <div className="flex-container">
              <button id="clear" className="darkgray-btn" onClick={(e) => handleClear(e)}>C</button>
              <button className="orange" value="=" onClick={handleOperator}>=</button>
            </div>
          </section>
        </section>
      </>
  
    )
}