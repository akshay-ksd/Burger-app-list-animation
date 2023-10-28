import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp, SlideInDown, SlideInLeft, ZoomIn, ZoomInRight } from 'react-native-reanimated'
import Ionicons from '../../../../Components/atom/Ionicons/Ionicons';
const SearchBox = () => {
    const text = 'Burger Launch';

    return (
        <View style={styles.container}>
            <View style={styles.textView} >

                {text.split('').map((letter, index) => (
                    <Animated.Text style={styles.brandName} key={index} entering={FadeInRight.duration(1500).delay(index * 50)}>{letter}</Animated.Text>
                ))}
                <Animated.Text style={[styles.brandName, { marginLeft: "4%" }]} entering={SlideInLeft.duration(500)}>🍔</Animated.Text>
            </View>
            {/* <Animated.View style={styles.searchView} entering={FadeInUp.duration(1000).delay(1000)}>
                <View style={styles.box}>
                    <Ionicons name='search' size={22} color='gray' />
                    <TextInput placeholder='Search Item' style={styles.input} />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name='filter' size={22} color='gray' />
                </TouchableOpacity>
            </Animated.View> */}
        </View>
    )
}

export default SearchBox