import styled from 'react-emotion';
import { css } from 'emotion';

export const RegisterContainer = styled('div')`
  label: RegisterContainer;
  background-color: orange;
  text-align: center;
  font-weight: bold;
  font-size: xx-large;
  padding: 40px;
`;

export const RegisterTitle = styled('div')`
  label: RegisterTitle;
  color: black;
  text-align: center;
  font-weight: bold;
`;

export const RegisterForm = css`
  label: RegisterForm;
  background: grey;
  display: flex;
  flex-direction: column;
`;

export const RegisterFormField = css`
  label: RegisterFormField;
  margin: 30px;
`;

export const RegisterFormSubmitButton = styled('button')`
  label: RegisterFormSubmitButton;
  background: skyblue;
  width: 30%;
  margin: 5px 30px;
`;

export const RegisterFormErrorMessage = css`
  label: RegisterFormErrorMessage;
  color: red;
  font-weight: 100;
  font-size: medium;
`;
