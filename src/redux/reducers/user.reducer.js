const initialState = {
  credential: null,
};

const UserReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
export default UserReducer;
