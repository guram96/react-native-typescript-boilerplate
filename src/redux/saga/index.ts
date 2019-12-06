import { all, fork } from '@redux-saga/core/effects';
import { helloWorldWatcher } from '../helloWorld/saga';


export function* rootSaga() {
    yield all([
      fork(helloWorldWatcher),
    ])
  }
  