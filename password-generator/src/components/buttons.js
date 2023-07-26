import React from "react";
import styled from "styled-components";

export const ButtonMinus = () => {
  return (
    <Button>-</Button>
  )
};

export const ButtonPlus = () => {
  return (
    <Button>+</Button>
  )
};

export const ButtonYes = () => {
  return (
    <Button>Yes</Button>
  )
};

export const ButtonGenerate = () => {
  return(
    <Button>Generate</Button>
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
