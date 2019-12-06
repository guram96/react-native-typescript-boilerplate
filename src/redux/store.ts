import { createStore, compose, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import AsyncStorage from '@react-native-community/async-storage'
import { rootSaga } from './saga'
import { HelloWorldState } from './helloWorld/types';
import { createReducers } from './reducers';
import { createLogger } from 'redux-logger';
export interface ApplicationState {
  helloWorldState: HelloWorldState
}

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT_ACTION') {
    state = undefined
    // AsyncStorage.removeItem('persist:storageService')
  }

  return createReducers(state, action)
}

export function configureStore(): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, createLogger({ diff: false })))
  )
  sagaMiddleware.run(rootSaga)

  return store;
}