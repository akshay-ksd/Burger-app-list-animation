import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Animated, { BounceInRight, FadeIn, FadeInDown } from 'react-native-reanimated'

const Banner = () => {
    const AnimatedImage = Animated.createAnimatedComponent(Image)
  const Users:FC<{url:string,index:number}> = ({url,index}) =>{
    return(
        <AnimatedImage source={{uri:url}} style={[styles.thumb,{right:index==2?10:index==3?20:0}]} entering={BounceInRight.duration(2000).delay(index*300)}/>
    )
  }
  return (
    <View style={styles.container}>
      <Animated.View style={styles.box} entering={FadeInDown.duration(2500)}>
            <Image source={{uri:"https://img.pikbest.com/origin/09/25/22/22ypIkbEsT7Wv.jpg!w700wp"}} 
                   style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.title}>Splash Art</Text>
                <View style={styles.users}>
                    <Users url='https://cdn.pixabay.com/photo/2023/02/24/01/05/ai-generated-7809908_1280.jpg' index={0}/>
                    <Users url='https://www.northeasternchronicle.in/wp-content/uploads/2023/03/E48021C0-328D-4708-A6B9-63D90A439BAF-696x456.png' index={2}/>
                    <Users url='https://sm.mashable.com/t/mashable_in/photo/default/image-6_vfhd.720.jpg' index={3}/>
                </View>
            </View>
      </Animated.View>
    </View>
  )
}

export default Banner