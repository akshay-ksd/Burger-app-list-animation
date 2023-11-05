import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from '../../../../../Components/atom/Ionicons/Ionicons'
import Animated, { BounceInDown, BounceInLeft, FadeIn, FadeInLeft, SlideInLeft } from 'react-native-reanimated'
const Header = () => {
    const Dot:any = ({index}) => {
        
        return (
            <Animated.View style={styles.dot} entering={SlideInLeft.delay(index*50).duration(1500)}/>
        )
    }
    return (
        <View style={styles.container} >
            <Animated.View style={styles.menu} entering={FadeIn.duration(2000).delay(500)}>
                <View style={styles.subView}>
                    <Dot index={1}/>
                    <Dot index={2}/>
                </View>
                <View style={styles.subView}>
                    <Dot index={3}/>
                    <Dot index={4}/>
                </View>
            </Animated.View>

            <View style={styles.menu}>
                <Ionicons name='notifications-outline' size={24} color='#000'/>
            </View>
        </View>
    )
}

export default Header