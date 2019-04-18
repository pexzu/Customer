import * as Redux from 'redux';
import { TCustomer } from 'src/global';

export const addCustomerAction = (customer: TCustomer) => (dispatch: Redux.Dispatch) => {
  dispatch({
    type: 'ADD_CUSTOMER',
    payload: customer,
  });
};

export const searchCustomerAction = (customerSearchName: string) => (dispatch: Redux.Dispatch) => {
  dispatch({
    type: 'SEARCH_CUSTOMER',
    payload: customerSearchName,
  });
};

export const deleteCustomerAction = (customer: TCustomer) => (dispatch: Redux.Dispatch) => {
  dispatch({
    type: 'DELETE_CUSTOMER',
    payload: customer,
  });
};
