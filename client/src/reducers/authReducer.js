const authReducer = (state = [], action) => {
  switch (action.type) {
    case "Auth":
      localStorage.setItem("profile", JSON.stringify({ ...action.data }));
      console.log(JSON.stringify({ ...action.data }));
  }
};

export default authReducer;
