import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { FC, useRef, useState } from 'react';
import styles from './style';
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface MenuItem {
    id: number;
    name: string;
}

const data: MenuItem[] = [
    { id: 1, name: "Burger" },
    { id: 2, name: "Pizza" },
    { id: 3, name: "Pasta" },
    { id: 4, name: "Salad" },
];
const AnimatedPress = Animated.createAnimatedComponent(TouchableOpacity)
const MenuList: FC = () => {
    const translateX = useSharedValue(0);
    const totalWidth = useRef(0);
    const [activeIndex,setActiveIndex] = useState(0)
    const selectMenu = (event: any, index: number) => {
        setActiveIndex(index)
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const renderItem = (item: { item: MenuItem, index: number }) => {
        const bg = activeIndex == item?.index?"#FFD580":"#fff";
        const br = activeIndex == item?.index?"#FFA500":"#fff";

        return (
            <AnimatedPress
                style={[styles.singleRender, { backgroundColor: bg, borderWidth: 0.5, borderColor: br }]}
                onPress={(e) => selectMenu(e, item.index)}
                entering={FadeIn.duration(1000).delay(item?.index *200)}
            >
                <Text style={styles.content}>{item.item.name}</Text>
            </AnimatedPress>
        )
    }

    return (
        <View style={styles.container} onLayout={(e) => { totalWidth.current = e.nativeEvent.layout.width }}>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default MenuList;
