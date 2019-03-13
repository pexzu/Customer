import styled from 'react-emotion';
import { css } from 'emotion';

export const CalculatorContainer = styled('div')`
  label: CalculatorContainer;
  background-color: orange;
  padding: 40px;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 50px;
  display: inline-flex;
  align-items: center;
`;

export const CalculatorNumberField = styled('input')`
  label: CalculatorNumberField;
  background-color: white;
  padding: 3px;
  margin: 3px 6px;
`;

export const CalculatorOperator = styled('select')`
  label: CalculatorOperator;
  cursor: pointer;
`;

export const CalculatorButton = styled('button')`
  label: CalculatorButton;
  background-color: red;
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 1px black;
  color: white;
  margin: 3px 12px;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const CalculatorResult = styled('span')`
  label: CalculatorResult;
`;
