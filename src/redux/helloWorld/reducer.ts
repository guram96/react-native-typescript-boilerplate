import { HelloWorldState, HelloWorldActions, HELLO_WORLD, HELLO_WORLD_SUCCESS } from './types'

const initialState: HelloWorldState = {
  message: '',
  success: false,
  loading: false
}

const reducer = (
  state: HelloWorldState = initialState,
  action: HelloWorldActions,
): HelloWorldState => {
  switch (action.type) {
    case HELLO_WORLD: {
        return {
            loading: action.payload.loading,
            ...state
        }
    }
    case HELLO_WORLD_SUCCESS:  {
        return {
            loading: false,
            success: action.payload.success,
            message: action.payload.message
        }
    }
    default: {
      return state
    }
  }
}

export { reducer as helloWorldReducer }
