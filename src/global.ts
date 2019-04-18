type TReduxAction = any;
export type TWithReduxDispatch = { dispatch: TReduxDispatch };
type TReduxDispatch = (action: TReduxAction) => void;

export type TCustomer = { firstName: string; lastName: string; dob: string };
