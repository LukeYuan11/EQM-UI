import { all, put, call, takeEvery } from 'redux-saga/effects'
import * as DataService from 'services/service'
import actions from './actions'


export function * GET_CLASS_DATA () {
  const classData = yield call(DataService.ClassData)
  console.log(`classData:${classData}`)
  yield put({
    type: actions.SET_CLASS_STATE,
    payload: {
      classData,
    },
  })
}

export default function * rootSaga () {
  yield all([takeEvery(actions.GET_CLASS_DATA, GET_CLASS_DATA)])
}
