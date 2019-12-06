import { takeLatest, delay, put } from '@redux-saga/core/effects'
import { HELLO_WORLD, HelloWorld } from './types'
import { helloWorldSuccessAction } from './actions';

export function* helloWorldSaga(action: HelloWorld) {
    yield delay(3000);
    console.log(action);
    yield put(helloWorldSuccessAction('Hello World!', true));
}

export function* helloWorldWatcher() {
    yield takeLatest(HELLO_WORLD, helloWorldSaga)
}