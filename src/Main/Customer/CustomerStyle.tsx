import styled from 'react-emotion';
import { css } from 'emotion';

export const CustomerContainer = styled('div')`
  label: CustomerContainer;
  display: flex;
  background-color: #f5f5f5;
  padding: 40px;
  position: absolute;
  flex-flow: column;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const CustomerContainerTitle = styled('div')`
  label: CustomerContainerTitle;
  padding: 9px 0;
`;

export const CustomerInnerBlock = styled('div')`
  label: CustomerInnerBlock;
  padding: 12px 0;
`;

export const CustomerAddBlock = styled('div')`
  label: CustomerAddBlock;
  padding: 12px;
  background: #ffffff;
  margin: 12px;
`;

export const CustomerSearchBlock = styled(CustomerAddBlock)`
  label: CustomerSearchBlock;
`;

export const CustomerSearchBlockSpecialNote = styled('span')`
  label: CustomerSearchBlockSpecialNote;
  font-size: 14px;
  padding: 0 12px;
  color: #8b0000;
`;

export const CustomerPrimaryButton = styled('button')`
  label: PrimaryButton;
  padding: 6px 15px;
  border-radius: 5px;
  background: #e2e2e2;
  box-shadow: 0 0 1px #000000;
`;

export const AddCustomerContainer = styled('div')`
  label: AddCustomerContainer;
  padding: 12px 9px;
`;

export const AddCustomerTitle = styled('div')`
  label: AddCustomerTitle;
  font-size: 16px;
`;

export const AddCustomerMandatoryNote = styled('div')`
  label: AddCustomerMandatoryNote;
  font-size: 14px;
  padding: 12px 0;
  color: #8b0000;
`;

export const SearchCustomerContainer = styled('div')`
  label: SearchCustomerContainer;
  padding: 12px 9px;
`;

export const SearchCustomerTitle = styled('div')`
  label: SearchCustomerTitle;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const CustomerSecondaryButton = styled('button')`
  label: CustomerSecondaryButtons;
  padding: 3px 12px;
  border-radius: 3px;
  background: #e2e2e2;
  box-shadow: 0 0 1px #000000;
  margin: 0 6px;
`;

export const CustomerSecondaryButtonGroup = styled('div')`
  label: CustomerSecondaryButtonGroup;
  display: flex;
  margin-left: 20%;
  padding: 21px;
`;
