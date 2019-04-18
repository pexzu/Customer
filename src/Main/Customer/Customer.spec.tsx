import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Customer from './Customer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as E from './CustomerStyle';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Customer />);
});

// it('renders without crashing', () => {
//   shallow(<E.CalculatorOperator />);
// });

// it('renders without crashing', () => {
//   shallow(<E.CalculatorNumberField />);
// });

// it('renders without crashing', () => {
//   shallow(<E.CalculatorResult />);
// });

// it('renders without crashing', () => {
//   shallow(<E.CalculatorContainer />);
// });

test('Adding 1 + 1 equals 2', () => {
  expect(1 + 1).toBe(2);
});
test('Multiplying 1 * 1 equals 1', () => {
  expect(1 * 1).toBe(1);
});
test('Subtracting 1 - 1 equals 0', () => {
  expect(1 - 1).toBe(0);
});
test('Dividing 1 / 1 equals 1', () => {
  expect(1 / 1).toBe(1);
});
