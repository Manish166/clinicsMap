import { takeLatest } from 'redux-saga/effects'
import testingSaga from './workerSaga'
export default function* watcherSaga() {
  //("this is requested action", function called in workersSaga)
    yield takeLatest("GET_ALL_CLINICS", getAllClinicsWorker);
}