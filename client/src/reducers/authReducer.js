const authReducer = (state = [], action) => {
  switch (action.type) {
    case "Auth":
      localStorage.setItem("profile", JSON.stringify({ ...action.data }));
      console.log(JSON.stringify({ ...state, authData: action.data }));
      return { ...state, authData: action.data };
    default:
      return state;
  }
};

export default authReducer;
