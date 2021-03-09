import store from 'store'
import { all, takeEvery, put, call } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
// import { login, currentAccount, logout } from 'services/firebase.auth.service'
import * as jwt from 'services/jwt'
import actions from './actions'


export function* LOGIN({ payload }) {
  const { email, password } = payload
  console.log(email, password);
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // console.log(jwt.login);
  const success = yield call(jwt.login, email, password)
  console.log(success);

  if (success) {
    // yield put({
    //   type: 'user/LOAD_CURRENT_ACCOUNT',
    // })
    const {data} = yield call(jwt.currentAccount)
    // console.log(data);
    yield history.push('/')
    notification.success({
      message: 'Logged In',
      description: `Hello! ${data.userName}  You have successfully logged in`,
    })
  }
  // yield call(generate token api)
  // yield put({
  //   //update get token status
  // })
  // yield call(forwardTo, '/xxx')
}

export function* REGISTER(payload) {
  const { email, password } = payload
  yield call(jwt.register, email, password)
 
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const response = yield call(jwt.currentAccount)
  if (response) {
    // const { uid: id, email, photoURL: avatar } = response
    const {
      account,
      cellPhone,
      email,
      gender,
      pictureUrl,
      roleId,
      userId,
      userName
    } = response
    yield put({
      type: 'user/SET_STATE',
      payload: {
        // id,
        // name: 'Administrator',
        // email,
        // avatar,
        // role: 'admin',
        // authorized: true,
        account,
        cellPhone,
        email,
        gender,
        pictureUrl,
        roleId,
        userId,
        userName
      },
      
    })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield call(jwt.logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      account:'',
      cellPhone:'',
      email:'',
      gender:'',
      pictureUrl:'',
      roleId:'',
      userId:'',
      userName:''
    },
  })
}

export function* AUTO_LOGOUT() {
  console.log('AUTO_LOGOUT:Check')
  if(!store.get('accessToken')){
    yield call(jwt.logout)
    console.log('AUTO_LOGOUT:LogOut')
    yield put({
      type: 'user/SET_STATE',
      payload: {
        account:'',
        cellPhone:'',
        email:'',
        gender:'',
        pictureUrl:'',
        roleId:'',
        userId:'',
        userName:''
      },
    })
    history.push('/auth/login')
    notification.success({
      message: 'Auto Logged Out',
      description: `Bye! You have been auto logged out because of staying too long`,
    })
  }
  
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.REGISTER, REGISTER),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    AUTO_LOGOUT()
    // LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
