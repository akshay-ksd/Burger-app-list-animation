import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.day}>November 8</Text>
                <Text style={styles.name}>Hello, Akshay</Text>
            </View>
            <View style={styles.imageView}>
                <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/007/043/161/non_2x/male-avatar-smiling-portrait-of-a-cheerful-young-man-with-a-happy-smile-vector.jpg"}}
                       style={styles.image}/>
                <View style={styles.dot}/>
            </View>
        </View>
    )
}

export default Header