export default function reducer(state, action) {
  switch (action.type) {
    // if action type value is the value of `UPDATE_BOOKS`, return a new state object with an updated books array
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };
    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
}