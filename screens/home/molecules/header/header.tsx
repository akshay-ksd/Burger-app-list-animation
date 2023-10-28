import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from '../../../../Components/atom/Ionicons/Ionicons'

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name='menu' size={26} color='black'/>
       {/* <Text style={styles.location}>kochi,kakkanad-671121</Text> */}
       <Ionicons name='cart-outline' size={26} color='black'/>
    </View>
  )
}

export default Header