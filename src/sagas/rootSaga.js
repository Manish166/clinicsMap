import {all } from 'redux-saga/effects'
import watcherSaga from './watcherSaga'

export default function* rootSaga() {
    yield all(
        [
            watcherSaga()
        ])
  }