import { View, Text } from 'react-native'
import React from 'react'
import Header from './molecules/header/header'
import SearchBox from './molecules/search-box/search-box'
import Menu from './organizer/menu/menu'
const Home = () => {
  return (
    <View style={{height:"100%",width:"100%",backgroundColor:"white"}}>
      <Header/>
      <SearchBox/>
      <Menu/>
    </View>
  )
}

export default Home