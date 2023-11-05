import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './molecules/header/header'
import styles from './styles'
import DetailsPage from './template/details-page/details-page'
import { useIsFocused } from '@react-navigation/native'
const HomeScreen = () => {
    const isFocused = useIsFocused();

    return (
        <View style={styles.container}>
            {isFocused && (
                <DetailsPage />
            )}
        </View>
    )
}

export default HomeScreen