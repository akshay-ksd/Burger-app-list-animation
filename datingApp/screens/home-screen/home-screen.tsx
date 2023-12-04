import { View, Text } from 'react-native'
import React from 'react'
import Header from './molecules/header/header'
import styles from './style'
import ListUser from './template/list-users/list-user'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <ListUser/>
    </View>
  )
}

export default HomeScreen