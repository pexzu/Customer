type TReduxAction = any;
export type TWithReduxDispatch = { dispatch: TReduxDispatch };
type TReduxDispatch = (action: TReduxAction) => void;

export type TCustomer = { firstName: string; lastName: string; dob: string };

export interface IState {
  customer: customer;
}

interface customer {
  currentCustomer: [{ firstName: ''; lastName: ''; dob: '' }];
  customerListSearched: [{ firstName: ''; lastName: ''; dob: '' }];
}
