export default (state = {}, action: any) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        customer: action.payload,
      };
    default:
      return state;
  }
};
