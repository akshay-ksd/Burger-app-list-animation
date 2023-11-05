import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Animated, { ZoomInEasyDown } from 'react-native-reanimated'
import Header from '../../molecules/header/header'
import Title from '../../molecules/title/title'
import MenuBar from '../../organization/menu-bar/menu-bar'
import Banner from '../../organization/banner/banner'
const DetailsPage = () => {
  return (
    <Animated.View style={styles.container} entering={ZoomInEasyDown.duration(500)}>
      <Header/>
      <Title/>
      <MenuBar/>
      <Banner/>
      <View style={styles.round}/>
    </Animated.View>
  )
}

export default DetailsPage