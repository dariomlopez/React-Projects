import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ButtonMinus, ButtonPlus, ButtonYes, ButtonGenerate } from "./components/buttons";

function App() {

  const [numberSpan, changeNumberSpan] = useState({
    defaultNum: 7,
    symbol: true,
    numbers: true,
    capitals: true
  });

  /**Incrementing the number in the span with a function */
  const incrementNumSpan = () => {
    changeNumberSpan((previousState) => {
      const newState = {...previousState}
      newState.defaultNum += 1;
      return newState;
    });
  };

  /**Decrementing the number in the span with a function */
  const decrementNumSpan = () => {
    if(numberSpan.defaultNum >= 5){
      changeNumberSpan((previousState) => {
        const newState = {...previousState};
        newState.defaultNum -= 1;
        return newState;
      });
    } else if(numberSpan.defaultNum < 5)  {
      alert(`Passwords with less than five character are not safe`)
    }
  };

  const buttonNo = () => {
    changeNumberSpan((previousState) => {
      const newState = {...previousState};
      newState.symbol = !newState.symbol;
      return newState;
    })
  };

  const buttonNumbers = () => {
    changeNumberSpan((previousState) => {
      const newState = {...previousState};
      newState.numbers = !newState.numbers;
      return newState;
    })
  };

  const buttonCap = () => {
    changeNumberSpan((previousState) => {
      const newState = {...previousState};
      newState.capitals = !newState.capitals;
      return newState;
    })
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
    <h1 className="title">Password Generator</h1>
    
      <form onSubmit={onSubmit}>
        <Row>
          <label>Número de caracteres:</label>
          <Control>
            <ButtonMinus click={decrementNumSpan}/>
            <span>{numberSpan.defaultNum}</span>
            <ButtonPlus click={incrementNumSpan}/>
          </Control>
        </Row>
        <Row>
          <label>Include symbols?</label>
          <ButtonYes selected={numberSpan.symbol} click={buttonNo}/>
        </Row>
        <Row>
          <label>Include numbers?</label>
          <ButtonYes selected={numberSpan.numbers} click={buttonNumbers}/>
        </Row>
        <Row>
          <label>Include capital letters?</label>
          <ButtonYes selected={numberSpan.capitals} click={buttonCap}/>
        </Row>
        <Row>
          <ButtonGenerate/>
          <Input type="text"/>
        </Row>
      </form>
    
    </div>
  );
}

export default App;

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