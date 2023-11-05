import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import styles from './style'
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const MenuBar = () => {
    const AnimatedPress = Animated.createAnimatedComponent(TouchableOpacity)
    const [selected,setSelected] = useState(1)
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const barStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
        }
    })

    const Menu: FC<{ title: string,index:number }> = ({ title,index }) => {
        const menuRef = useRef(null);

        const handlePress = () => {
            setSelected(index)
            if (menuRef.current) {
                menuRef.current.measure((x, y, width, height, pageX, pageY) => {
                   translateX.value = withTiming((x-25),{duration:500});
                });
            }
        };



        return (
            <AnimatedPress
                ref={menuRef}
                style={styles.menu}
                onPress={handlePress}
                // entering={FadeInUp.duration(1000).delay(index*100)}
            >
                <Text style={[styles.text,{color:selected == index?"white":"gray"}]}>{title}</Text>
            </AnimatedPress>
        );
    }
    return (
        <Animated.View style={styles.container} >
            <Animated.View style={[styles.bar,barStyle]} entering={FadeInUp.duration(1000).delay(1000)}/>
            <Menu title={"Trending"} index={1}/>
            <Menu title={"Abstract"} index={2}/>
            <Menu title={"Bitcoin"} index={3}/>
        </Animated.View>
    )
}

export default MenuBar