import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ButtonMinus, ButtonPlus, ButtonYes, ButtonGenerate } from "./components/buttons";

function App() {
  return (
    <div className="container">
    <h1 className="title">Password Generator</h1>
    
      <form>
        <Row>
          <label>Número de caracteres:</label>
          <Control>
            <ButtonMinus/>
            <span>0</span>
            <ButtonPlus/>
          </Control>
        </Row>
        <Row>
          <label>Include symbols?</label>
          <ButtonYes/>
        </Row>
        <Row>
          <label>Include numbers?</label>
          <ButtonYes/>
        </Row>
        <Row>
          <label>Include capital letters?</label>
          <ButtonYes/>
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