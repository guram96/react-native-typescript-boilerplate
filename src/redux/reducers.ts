import { combineReducers } from 'redux';
import { ApplicationState } from './store';
import { helloWorldReducer } from './helloWorld/reducer';

export const createReducers = combineReducers<ApplicationState>({
   helloWorldState: helloWorldReducer
})
  