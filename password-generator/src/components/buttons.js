import React from "react";
import styled from "styled-components";

export const ButtonMinus = ({click}) => {
  return (
    <Button onClick={click}>-</Button>
  )
};

export const ButtonPlus = ({click}) => {
  return (
    <Button onClick={click}>+</Button>
  )
};

export const ButtonYes = ({selected, click}) => {
  if(selected){
    return (
      <Button onClick={click}>Yes</Button>
    )
  } else {
     return (
      <Button onClick={click}>No</Button>
     )
   }
};

export const ButtonGenerate = () => {
  return(
    <Button type="submit">Generate</Button>
  )
};

const Button = styled.button`
  width: 100%;
  background: #684BFF;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  display: inline-flex;
  justify-content: center;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    background: #866FFD;
  }
`;

// const ButtonNo = styled(Button)`

// `;