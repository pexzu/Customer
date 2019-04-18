import * as React from 'react';
import * as E from './InputBlockStyle';
// import { HomeContainer } from './HomeStyle';

interface InputBlockProps {
  fieldName: string;
  onChange: (event: any) => void;
  placeholder: string;
  value: string;
}
interface InputBlockState {}
export default class InputBlock extends React.Component<InputBlockProps, InputBlockState> {
  render() {
    return (
      <E.InputBlockContainer>
        <E.InputBlockFieldName>{this.props.fieldName}</E.InputBlockFieldName>
        <E.InputBlockInputField>
          <input
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            value={this.props.value}
          />
        </E.InputBlockInputField>
      </E.InputBlockContainer>
    );
  }
}
