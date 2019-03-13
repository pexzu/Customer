import * as React from 'react';
import * as E from './CalculatorStyle';
import InputBlock from '../../Component/InputBlock';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface CalculatorProps {}
interface CalculatorState {
  firstNumber: string;
  secondNumber: string;
  operator: 'add' | 'sub' | 'multiply' | 'divide';
  result: string;
}
export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      operator: 'add',
      result: '',
    };
  }

  validateNumber = (number: string) => {
    console.log('here');
    const reg = '^[0-9]+[.]?[0-9]*$';
    if (number.match(reg)) {
      return true;
    } else {
      return false;
    }
  };

  updateFirstNumber = (e: any) => {
    if (e.target.value === '' || this.validateNumber(e.target.value)) {
      this.setState({
        firstNumber: e.target.value,
      });
    }
  };

  updateSecondNumber = (e: any) => {
    if (e.target.value === '' || this.validateNumber(e.target.value)) {
      this.setState({
        secondNumber: e.target.value,
      });
    }
  };

  updateOperator = (e: any) => {
    this.setState({
      operator: e.target.value,
    });
  };

  calculateNumbers = () => {
    const { firstNumber, secondNumber, operator } = this.state;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case 'add':
        this.addNumbers(num1, num2);
        break;
      case 'sub':
        this.subtractNumbers(num1, num2);
        break;
      case 'multiply':
        this.multiplyNumbers(num1, num2);
        break;
      case 'divide':
        this.divideNumbers(num1, num2);
        break;
    }
  };

  addNumbers = (num1: number, num2: number) => {
    this.setState({
      result: (num1 + num2).toString(),
    });
  };

  subtractNumbers = (num1: number, num2: number) => {
    this.setState({
      result: (num1 - num2).toString(),
    });
  };

  multiplyNumbers = (num1: number, num2: number) => {
    this.setState({
      result: (num1 * num2).toString(),
    });
  };

  divideNumbers = (num1: number, num2: number) => {
    this.setState({
      result: (num1 / num2).toString(),
    });
  };

  render() {
    const { firstNumber, secondNumber, operator, result } = this.state;
    return (
      <E.CalculatorContainer>
        <E.CalculatorNumberField
          type='text'
          value={firstNumber}
          onChange={this.updateFirstNumber}
          placeholder='First Number'
        />
        <E.CalculatorOperator value={operator} onChange={this.updateOperator}>
          <option value='add'>+</option>
          <option value='sub'>-</option>
          <option value='multiply'>*</option>
          <option value='divide'>/</option>
        </E.CalculatorOperator>
        <E.CalculatorNumberField
          type='text'
          value={secondNumber}
          onChange={this.updateSecondNumber}
          placeholder='Second Number'
        />
        <E.CalculatorButton
          onClick={this.calculateNumbers}
          disabled={!(firstNumber && secondNumber)}
        >
          Result
        </E.CalculatorButton>
        <E.CalculatorResult>{result}</E.CalculatorResult>
      </E.CalculatorContainer>
    );
  }
}
