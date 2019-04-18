export default (
  state = {
    currentCustomer: [{ firstName: '', lastName: '', dob: '' }],
    customerListSearched: [{ firstName: '', lastName: '', dob: '' }],
  },
  action: any
) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        currentCustomer: [...state.currentCustomer, action.payload],
      };
      break;

    case 'SEARCH_CUSTOMER':
      let customerListSearched = state.currentCustomer.filter(
        item =>
          item.firstName.toLowerCase() === action.payload.toLowerCase() ||
          item.lastName.toLowerCase() === action.payload.toLowerCase()
      );
      return {
        ...state,
        customerListSearched: customerListSearched,
      };
      break;

    case 'DELETE_CUSTOMER':
      let currentCustomer = state.currentCustomer.filter(
        item =>
          item.firstName + item.lastName + item.dob !==
          action.payload.firstName + action.payload.lastName + action.payload.dob
      );

      let customerSearched = state.customerListSearched.filter(
        item =>
          item.firstName + item.lastName + item.dob !==
          action.payload.firstName + action.payload.lastName + action.payload.dob
      );
      return {
        ...state,
        currentCustomer: currentCustomer,
        customerListSearched: customerSearched,
      };
      break;

    default:
      return state;
  }
};
