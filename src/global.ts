type TReduxAction = any;
export type TWithReduxDispatch = { dispatch: TReduxDispatch };
type TReduxDispatch = (action: TReduxAction) => void;
