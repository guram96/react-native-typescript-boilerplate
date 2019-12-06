export const HELLO_WORLD = 'HELLO_WORLD'
export const HELLO_WORLD_SUCCESS = 'HELLO_WORLD_SUCCESS'

export interface HelloWorldState {
    message: string
    success: boolean
    loading: boolean
}

export interface HelloWorld {
    type: typeof HELLO_WORLD
    payload: {
        loading: boolean
    }
}

export interface HelloWorldSuccess {
    type: typeof HELLO_WORLD_SUCCESS;
    payload: {
        success: boolean,
        message: string
    }
}

export type HelloWorldActions =  HelloWorld | HelloWorldSuccess