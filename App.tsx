import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import TabBar from './datingApp/routers/tab-navigation/tab-navigation'
import { color } from './constants/color'
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:color.lightGreen }}>
      <TabBar />
    </SafeAreaView>
  )
}

export default App