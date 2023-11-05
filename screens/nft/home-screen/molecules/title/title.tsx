import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Animated, { BounceInLeft, FadeInLeft, FadeInRight, SlideInLeft } from 'react-native-reanimated'

const Title = () => {
    const text = "TO FIND NFT WORLD"
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Best Way</Text>
            <View style={{width:"100%",flexDirection:"row"}}>
                {text.split('').map((letter, index) => (
                    <Animated.Text style={styles.title} key={index} entering={FadeInLeft.duration(1500).delay(index * 50)}>{letter}</Animated.Text>
                ))}
            </View>

        </View>
    )
}

export default Title