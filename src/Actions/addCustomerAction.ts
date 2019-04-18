import * as Redux from 'redux';
import { TCustomer } from 'src/global';

export const addCustomerAction = (customer: TCustomer) => (dispatch: Redux.Dispatch) => {
  dispatch({
    type: 'ADD_CUSTOMER',
    payload: customer,
  });
};
