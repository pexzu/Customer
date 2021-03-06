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

it('renders without crashing', () => {
  shallow(<E.CustomerContainer />);
});

it('renders without crashing', () => {
  shallow(<E.CustomerPrimaryButton />);
});

it('renders without crashing', () => {
  shallow(<E.CustomerSecondaryButton />);
});
