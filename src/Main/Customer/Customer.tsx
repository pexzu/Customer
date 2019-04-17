import * as React from 'react';
import * as E from './CustomerStyle';
import InputBlock from '../../Component/InputBlock';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface CustomerProps {}
interface CustomerState {
  addCustomer: boolean;
  deleteCustomer: boolean;
  editCustomer: boolean;
  searchCustomer: boolean;
}
export default class Calculator extends React.Component<CustomerProps, CustomerState> {
  constructor(props: CustomerProps) {
    super(props);
    this.state = {
      addCustomer: false,
      deleteCustomer: false,
      editCustomer: false,
      searchCustomer: false,
    };
  }

  toggleAddCustomer = () => {
    debugger;
    this.setState({
      addCustomer: !this.state.addCustomer,
    });
  };

  toggleEditCustomer = () => {
    this.setState({
      editCustomer: !this.state.editCustomer,
    });
  };

  toggleDeleteCustomer = () => {
    this.setState({
      deleteCustomer: !this.state.deleteCustomer,
    });
  };

  toggleSearchCustomer = () => {
    this.setState({
      searchCustomer: !this.state.searchCustomer,
    });
  };

  render() {
    return (
      <E.CustomerContainer>
        <div>Select an Operation to Perform</div>
        <div>
          <span>
            <button onClick={this.toggleAddCustomer}> Add new customer</button>
            {this.state.addCustomer && this.renderAddCustomer()}
          </span>
          <span>
            <button> Remove a customer</button>
          </span>
          <span>
            <button> Edit customer details</button>
          </span>
          <span>
            <button> Search for a customer</button>
          </span>
        </div>
      </E.CustomerContainer>
    );
  }

  renderAddCustomer = () => {
    return (
      <div>
        <div>Please provide customer details</div>
        <InputBlock fieldName='FirstName' />
        <InputBlock fieldName='LastName' />
        <InputBlock fieldName='Date of Birth' />
        <button> Save </button>
      </div>
    );
  };

  renderSearchCustomer = () => {
    return (
      <div>
        <div>Please enter customer's first or last name</div>
        <InputBlock fieldName='Customer' />
        <button>Search</button>
      </div>
    );
  };
}
