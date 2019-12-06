import { HELLO_WORLD, HelloWorld, HelloWorldSuccess, HELLO_WORLD_SUCCESS } from './types';

export const helloWorldAction: (loading: boolean) => HelloWorld = (loading) => {
    return {
      type: HELLO_WORLD,
      payload: {
        loading
      },
    }
}
export const helloWorldSuccessAction: (message: string, success: boolean) => HelloWorldSuccess = (message, success) => {
    return {
      type: HELLO_WORLD_SUCCESS,
      payload: {
        message,
        success
      },
    }
}