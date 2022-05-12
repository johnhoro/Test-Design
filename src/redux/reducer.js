const initialState = {
  channel: 0,
  currentPage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "dashboard":
      return { ...state, currentPage: action.payload };
    case "order":
      return { ...state, currentPage: action.payload };
    case "configuration":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export default reducer;
