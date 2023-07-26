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

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #684BFF;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    background: #866FFD;
  }
`;