import * as React from 'react';
import * as E from './CustomerStyle';
import InputBlock from '../../Component/InputBlock/InputBlock';
import { connect } from 'react-redux';
import {
  addCustomerAction,
  searchCustomerAction,
  deleteCustomerAction,
} from '../../Actions/addCustomerAction';
import * as Redux from 'redux';
import { TWithReduxDispatch, TCustomer } from '../../global';
import Card from 'src/Component/Card/Card';

interface CustomerProps {}
interface CustomerState {
  addCustomer: boolean;
  deleteCustomer: boolean;
  editCustomer: boolean;
  searchCustomer: boolean;

  firstName: string;
  lastName: string;
  dob: string;
  customerSearchName: string;
}

interface ConnectedCustomerProps {
  customerListSearched: TCustomer[];
}

type TCustomerCombinedProps = TWithReduxDispatch & CustomerProps & ConnectedCustomerProps;

class Customer extends React.Component<TCustomerCombinedProps, CustomerState> {
  constructor(props: TCustomerCombinedProps) {
    super(props);
    this.state = {
      addCustomer: false,
      deleteCustomer: false,
      editCustomer: false,
      searchCustomer: false,
      firstName: '',
      lastName: '',
      dob: '',
      customerSearchName: '',
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

  searchCustomer = (event: any) => {
    this.props.dispatch(searchCustomerAction(this.state.customerSearchName));
  };

  cancelCustomerSearch = (event: any) => {
    this.setState({
      searchCustomer: !this.state.searchCustomer,
    });
  };

  deleteCustomer = (item: TCustomer) => {
    this.props.dispatch(deleteCustomerAction(item));
  };

  editCustomer = (item: TCustomer) => {};

  updateCustomerFirstName = (event: any) => {
    this.setState({
      firstName: event.target.value.trim(),
    });
  };

  updateCustomerLastName = (event: any) => {
    this.setState({
      lastName: event.target.value.trim(),
    });
  };

  updateCustomerDOB = (event: any) => {
    this.setState({
      dob: event.target.value.trim(),
    });
  };

  updateCustomerSearchName = (event: any) => {
    this.setState({
      customerSearchName: event.target.value.trim(),
    });
  };

  render() {
    console.log(this.props.customerListSearched);
    const { addCustomer, deleteCustomer, editCustomer, searchCustomer } = this.state;
    const oneButtonisActive = addCustomer || deleteCustomer || editCustomer || searchCustomer;

    return (
      <E.CustomerContainer>
        <E.CustomerContainerTitle>Select an Operation to Perform</E.CustomerContainerTitle>
        <div>
          <span>
            <button onClick={this.toggleAddCustomer} disabled={oneButtonisActive}>
              Add new customer
            </button>
            {this.state.addCustomer && this.renderAddCustomer()}
          </span>
          <span>
            <button onClick={this.toggleSearchCustomer} disabled={oneButtonisActive}>
              Search for a customer
            </button>
            {this.state.searchCustomer && this.renderSearchCustomer()}
          </span>
        </div>
      </E.CustomerContainer>
    );
  }

  renderAddCustomer = () => {
    const { firstName, lastName, dob } = this.state;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    let validDOB = false;
    if (pattern.test(this.state.dob)) {
      validDOB = true;
    }
    return (
      <div>
        <div>Please provide customer details</div>
        <div>(required to fill all the fields to save the details)</div>
        <InputBlock
          fieldName='FirstName'
          placeholder='FirstName'
          onChange={this.updateCustomerFirstName}
        />
        <InputBlock
          fieldName='LastName'
          placeholder='lastName'
          onChange={this.updateCustomerLastName}
        />
        <InputBlock
          fieldName='Date of Birth'
          placeholder='dd-mm-yyyy'
          onChange={this.updateCustomerDOB}
        />
        <button onClick={this.addCustomer} disabled={!(firstName && lastName && validDOB)}>
          Save
        </button>
        <button onClick={this.toggleAddCustomer}> Cancel </button>
      </div>
    );
  };

  renderSearchCustomer = () => {
    return (
      <div>
        <div>Please enter customer's first or last name</div>
        <InputBlock
          fieldName='Customer Name'
          placeholder='CustomerName'
          onChange={this.updateCustomerSearchName}
        />
        <button onClick={this.searchCustomer}>Search</button>
        <button onClick={this.cancelCustomerSearch}>Cancel</button>
        {this.state.searchCustomer &&
          this.props.customerListSearched.map(item => (
            <Card
              key={item.dob + item.firstName}
              customer={item}
              onDeleteClick={this.deleteCustomer}
              onEditClick={this.editCustomer}
            />
          ))}
      </div>
    );
  };
}

function mapStateToProps(state: any) {
  return { customerListSearched: state.customer.customerListSearched || [] };
}

export default connect(mapStateToProps)(Customer);
