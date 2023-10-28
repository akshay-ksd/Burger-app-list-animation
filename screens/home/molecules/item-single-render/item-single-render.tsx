import { View, Text, Image, TouchableOpacity, ViewToken } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './style'
import Ionicons from '../../../../Components/atom/Ionicons/Ionicons'
import Animated, { FadeInLeft, useAnimatedStyle, withTiming } from 'react-native-reanimated'
interface MenuItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  bg: string;
}
interface itemType {
  item: MenuItem,
  index: number,
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

const AnimatedImage = Animated.createAnimatedComponent(Image)
const ItemSingleRender: FC<itemType> = ({ item,index,viewableItems }) => {
  const [isFav,setIsFav] = useState(false)
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[styles.container,rStyle,]}>
      <View style={[styles.topPiece, { backgroundColor: item?.bg }]} />
      <View style={[styles.box, { backgroundColor: item?.bg }]}>
        <AnimatedImage entering={FadeInLeft.duration(500).delay(index*100)} source={require("../../../../assets/images/bg2.png")} style={styles.image} />
        <Text style={styles.productName}>{item?.name}</Text>
        <TouchableOpacity style={styles.saveButton} onPress={()=>setIsFav((p)=>!p)}>
          <Ionicons name={isFav?'heart':'heart-outline'} size={28} color='black' />
        </TouchableOpacity>
        <Text style={styles.description}>Classic cheese burger</Text>
        <View style={styles.priceView}>
          <View style={styles.price}>
              <Text style={styles.priceText}>₹{item?.price}</Text>
          </View>
        </View>

      </View>
    </Animated.View>
  )
}

export default ItemSingleRender