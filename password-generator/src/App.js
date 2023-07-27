import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ButtonMinus, ButtonPlus, ButtonYes, ButtonGenerate } from "./components/buttons";
import passworGen from "./functionality/passGenerator";


function App() {

  /**Default states for the buttons */
  const [defaultConfig, changeDefaultConfig] = useState({
    defaultNum: 7,
    symbol: true,
    numbers: true,
    capitals: true
  });

  const [passwordGenerated, changePassword] = useState ("");

  /**Incrementing the number in the span with a function */
  const incrementNumSpan = () => {
    changeDefaultConfig((previousState) => {
      const newState = {...previousState}
      newState.defaultNum += 1;
      return newState;
    });
  };

  /**Decrementing the number in the span with a function */
  const decrementNumSpan = () => {
    if(defaultConfig.defaultNum > 5){
      changeDefaultConfig((previousState) => {
        const newState = {...previousState};
        newState.defaultNum -= 1;
        return newState;
      });
    } else if(defaultConfig.defaultNum <= 5)  {
      alert(`Passwords with less than five character are not safe`)
    }
  };

  /**Changing the state of defaultConfig.symbol to false if clicked */
  const buttonSymbols = () => {
    changeDefaultConfig((previousState) => {
      const newState = {...previousState};
      newState.symbol = !newState.symbol;
      return newState;
    })
  };

  /**Changing the state of defaultConfig.numbers to false if clicked */
  const buttonNumbers = () => {
    changeDefaultConfig((previousState) => {
      const newState = {...previousState};
      newState.numbers = !newState.numbers;
      return newState;
    })
  };

  /**Changing the state of defaultConfig.capital button to false if clicked */
  const buttonCap = () => {
    changeDefaultConfig((previousState) => {
      const newState = {...previousState};
      newState.capitals = !newState.capitals;
      return newState;
    })
  };
  
  const onSubmit = (event) => {
    /**Preventing the page from reloading when clicking */
    event.preventDefault();

    changePassword(passwordGenerated(defaultConfig));
  };

  return (
    <div className="container">
    <h1 className="title">Password Generator</h1>
    
      <form onSubmit={onSubmit}>
        <Row>
          <label>Número de caracteres:</label>
          <Control>
            {/* Receives the function with parameter { click } in button.js. Line 4 to 14*/}
            <ButtonMinus click={decrementNumSpan}/>
            <span>{defaultConfig.defaultNum}</span>
            <ButtonPlus click={incrementNumSpan}/>
          </Control>
        </Row>
        <Row>
          <label>Include symbols?</label>
          {/* Receives the function with two parameters {selectec, click} in button.js. Line 16 to 26 */}
          <ButtonYes selected={defaultConfig.symbol} click={buttonSymbols}/>
        </Row>
        <Row>
          <label>Include numbers?</label>
          {/* Receives the function with two parameters {selectec, click} in button.js. Line 16 to 26 */}
          <ButtonYes selected={defaultConfig.numbers} click={buttonNumbers}/>
        </Row>
        <Row>
          <label>Include capital letters?</label>
          {/* Receives the function with two parameters {selectec, click} in button.js. Line 16 to 26 */}
          <ButtonYes selected={defaultConfig.capitals} click={buttonCap}/>
        </Row>
        <Row>
          <ButtonGenerate/>
          <Input type="text" value={passwordGenerated}/>
        </Row>
      </form>
    
    </div>
  );
}

export default App;

/**Styled components */
/**Row component */
const Row = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33257E;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-radius: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all .5s ease;

  &:hover {
    box-shadow: 0px 0px 0px 1.5px;
  }
`;