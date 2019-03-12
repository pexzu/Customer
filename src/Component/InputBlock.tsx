import * as React from 'react';
// import { HomeContainer } from './HomeStyle';

interface InputBlockProps {
  fieldName: string;
}
interface InputBlockState {}
export default class InputBlock extends React.Component<InputBlockProps, InputBlockState> {
  render() {
    return (
      <div>
        <span>{this.props.fieldName} :</span>
        <span>
          <input />
        </span>
      </div>
    );
  }
}
