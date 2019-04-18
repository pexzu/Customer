import * as React from 'react';
import * as E from './CardStyle';
import { TCustomer } from 'src/global';

interface CardProps {
  customer: TCustomer;
  onDeleteClick: (customer: TCustomer) => void;
  onEditClick: (customer: TCustomer) => void;
}
interface CardState {}
export default class Card extends React.Component<CardProps, CardState> {
  render() {
    return (
      <E.CardContainer>
        <E.CardDeleteButton onClick={() => this.props.onDeleteClick(this.props.customer)}>
          Delete
        </E.CardDeleteButton>
        <E.CardEditButton onClick={() => this.props.onEditClick(this.props.customer)}>
          Edit
        </E.CardEditButton>
        <E.CardRow>{this.props.customer.firstName}</E.CardRow>
        <E.CardRow>{this.props.customer.lastName}</E.CardRow>
        <E.CardRow>{this.props.customer.dob}</E.CardRow>
      </E.CardContainer>
    );
  }
}
