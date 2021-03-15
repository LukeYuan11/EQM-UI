import { all, put, call, takeEvery } from 'redux-saga/effects'
import * as DataService from 'services/service'
import actions from './actions'

export function * GET_CLASS_DATA ({ payload }) {
  const { StartDate, EndDate } = payload
  const resData = yield call(DataService.ClassData, StartDate, EndDate)
  // console.log(`class resData : ${resData}`)
  yield put({
    type: actions.SET_CLASS_STATE,
    payload: {
      classData: resData.data,
    },
  })
}

export default function * rootSaga () {
  yield all([takeEvery(actions.GET_CLASS_DATA, GET_CLASS_DATA)])
}
