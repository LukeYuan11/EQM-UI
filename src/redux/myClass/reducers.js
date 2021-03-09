import actions from './actions'

// const initialState = {
//   classList: [1, 2, 3, 4, 5],
// }
const initialState = {
  myclass: []
}

export default function myClassReducer (state = initialState, action) {
  switch (action.type) {
    case actions.SET_CLASS_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
