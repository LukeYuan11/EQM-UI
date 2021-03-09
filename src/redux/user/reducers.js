import actions from './actions'

const initialState = {
  id: '',
  name: '',
  role: '',
  email: '',
  avatar: '',
  authorized: true,
  loading: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// const initialState = {
//   id: '',
//   name: '',
//   role: '',
//   email: '',
//   avatar: '',
//   authorized: false,
//   loading: false,
// }
// const initialState = {
//   id: 'USER_ID',
//   name: 'USER_NAME',
//   role: 'USER_ROLE',
//   email: 'USER@EMAIL.COM',
//   avatar: '',
//   authorized: true, // user is authorized
//   loading: false, // handles user fetching state, eg. set Sign In button to loading state
// }