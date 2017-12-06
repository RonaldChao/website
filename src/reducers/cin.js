const cin = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CIN_LIST':
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default cin
