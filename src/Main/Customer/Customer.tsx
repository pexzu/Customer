import * as React from 'react';
import * as E from './CustomerStyle';
import InputBlock from '../../Component/InputBlock';
import { connect } from 'react-redux';
import { addCustomerAction } from '../../Actions/addCustomerAction';
import * as Redux from 'redux';
import { TWithReduxDispatch } from '../../global';

interface CustomerProps {}
interface CustomerState {
  addCustomer: boolean;
  deleteCustomer: boolean;
  editCustomer: boolean;
  searchCustomer: boolean;

  firstName: string;
  lastName: string;
  dob: string;
}

type CustomerCombinedProps = TWithReduxDispatch & CustomerProps;

class Customer extends React.Component<CustomerCombinedProps, CustomerState> {
  constructor(props: CustomerCombinedProps) {
    super(props);
    this.state = {
      addCustomer: false,
      deleteCustomer: false,
      editCustomer: false,
      searchCustomer: false,
      firstName: '',
      lastName: '',
      dob: '',
    };
  }

  toggleAddCustomer = () => {
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

  addCustomer = (event: any) => {
    const { firstName, lastName, dob } = this.state;
    this.props.dispatch(addCustomerAction({ firstName: firstName, lastName: lastName, dob: dob }));
    this.toggleAddCustomer();
  };

  updateCustomerFirstName = (event: any) => {
    debugger;
    this.setState({
      firstName: event.target.value,
    });
  };

  updateCustomerLastName = (event: any) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  updateCustomerDOB = (event: any) => {
    this.setState({
      dob: event.target.value,
    });
  };

  render() {
    const { addCustomer, deleteCustomer, editCustomer, searchCustomer } = this.state;
    const oneButtonisActive = addCustomer || deleteCustomer || editCustomer || searchCustomer;

    return (
      <E.CustomerContainer>
        <div>Select an Operation to Perform</div>
        <div>
          <span>
            <button onClick={this.toggleAddCustomer} disabled={oneButtonisActive}>
              Add new customer
            </button>
            {this.state.addCustomer && this.renderAddCustomer()}
          </span>
          <span>
            <button disabled={oneButtonisActive}> Remove a customer</button>
          </span>
          <span>
            <button disabled={oneButtonisActive}> Edit customer details</button>
          </span>
          <span>
            <button disabled={oneButtonisActive}> Search for a customer</button>
          </span>
        </div>
      </E.CustomerContainer>
    );
  }

  renderAddCustomer = () => {
    return (
      <div>
        <div>Please provide customer details</div>
        <InputBlock fieldName='FirstName' onChange={this.updateCustomerFirstName} />
        <InputBlock fieldName='LastName' onChange={this.updateCustomerLastName} />
        <InputBlock fieldName='Date of Birth' onChange={this.updateCustomerDOB} />
        <button onClick={this.addCustomer}> Save </button>
        <button onClick={this.toggleAddCustomer}> Cancel </button>
      </div>
    );
  };

  renderRemoveCustomer = () => {};

  renderSearchCustomer = () => {
    return (
      <div>
        <div>Please enter customer's first or last name</div>
        {/* <InputBlock fieldName='Customer' /> */}
        <button>Search</button>
      </div>
    );
  };
}

const mapStateToProps = (state: any) => (
  console.log(state),
  {
    ...state,
  }
);

export default connect(mapStateToProps)(Customer);
