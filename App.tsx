/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *https://www.kinoafisha.ge/api/v1/session/main/list/
 * @format
 * @flow
 */

import React from 'react'

import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { helloWorldAction } from './src/redux/helloWorld/actions'
import { ApplicationState } from './src/redux/store'
import { HelloWorldState } from './src/redux/helloWorld/types';
import { connect } from 'react-redux'

interface propsFromState {
  helloWorldState: HelloWorldState
}

interface propsFromDispatch {
  helloWorld: typeof helloWorldAction
}

type componentProps = propsFromState & propsFromDispatch;

const App: React.FC<componentProps> = ({
  helloWorldState,
  helloWorld
}) => {

  React.useEffect(() => {
    helloWorld(true);
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <View>
        <Text>{helloWorldState.message}</Text>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = ({ helloWorldState }: ApplicationState): any => {
  return {
    helloWorldState,
  }
}


const mapDispatchToProps: propsFromDispatch = {
  helloWorld: helloWorldAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
