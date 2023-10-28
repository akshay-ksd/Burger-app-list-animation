import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Home from './Components/template/home/Home'
import Tab from "./navigation/tab/tab-navigations"
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
       <Tab />
    </SafeAreaView>
  )
}

export default App