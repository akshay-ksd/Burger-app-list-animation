import { View, Text, FlatList, ViewToken } from 'react-native'
import React from 'react'
import styles from './style'
import MenuList from '../../molecules/menu-list/menu-list'
import ItemSingleRender from '../../molecules/item-single-render/item-single-render'
import { useSharedValue } from 'react-native-reanimated';

interface MenuItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  bg: string
}
const Menu = () => {
  const data = [
    { id: 0, name: "Cheese Burger", imageUrl: require("../../../../assets/images/bg.png"), price: 100, bg: "#FEB163" },
    { id: 1, name: "Spicy Burger", imageUrl: require("../../../../assets/images/bg2.png"), price: 150, bg: "#90EE90" },
    { id: 2, name: "Hum Burger", imageUrl: require("../../../../assets/images/bg3.png"), price: 150, bg: "#FEB163" },
    { id: 3, name: "Crispy Burger", imageUrl: require("../../../../assets/images/bg4.png"), price: 150, bg: "#90EE90" }
  ]
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <MenuList />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item,index }) => {
          return <ItemSingleRender item={item} index={index} viewableItems={viewableItems} />;
        }}
         />
    </View>
  )
}

export default Menu