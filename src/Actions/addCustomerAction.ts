import * as Redux from 'redux';

export const addCustomerAction = () => (dispatch: Redux.Dispatch) => {
  dispatch({
    type: 'ADD_CUSTOMER',
    payload: 'result_of_simple_action',
  });
};
