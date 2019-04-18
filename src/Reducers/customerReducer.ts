export default (state = { customer: [{}] }, action: any) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        customer: [...state.customer, action.payload],
      };
    default:
      return state;
  }
};
