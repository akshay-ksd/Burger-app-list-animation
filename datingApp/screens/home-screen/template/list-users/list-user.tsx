import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, Animated } from 'react-native'
import React, { useRef } from 'react'
import styles from './style'
import Ionicons from '../../../../../Components/atom/Ionicons/Ionicons'

interface userType {
    id: number;
    name: string;
    image_url: string
}
const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const ListUser = () => {
    const data: userType[] = [{ id: 1, name: "Isha", image_url: "https://cdn.pixabay.com/photo/2023/09/07/15/20/ai-generated-8239294_1280.png" },
    { id: 1, name: "Maneesha", image_url: "https://static.vecteezy.com/system/resources/previews/023/135/770/large_2x/beautiful-indian-girl-young-hindu-woman-neural-network-ai-generated-photo.jpg" },
    { id: 1, name: "Sree", image_url: "https://img.freepik.com/premium-photo/cute-girls-picture-ai-generated_1003721-392.jpg" },
    { id: 1, name: "Steev", image_url: "https://thumbs.dreamstime.com/b/girl-beach-sunset-view-generate-ai-girl-beach-sunset-view-horizon-female-generate-ai-ai-generated-294104657.jpg" },
    { id: 1, name: "Isha", image_url: "https://cdn.pixabay.com/photo/2023/09/07/15/20/ai-generated-8239294_1280.png" },
    { id: 1, name: "Maneesha", image_url: "https://static.vecteezy.com/system/resources/previews/023/135/770/large_2x/beautiful-indian-girl-young-hindu-woman-neural-network-ai-generated-photo.jpg" },
    { id: 1, name: "Sree", image_url: "https://img.freepik.com/premium-photo/cute-girls-picture-ai-generated_1003721-392.jpg" },
    { id: 1, name: "Steev", image_url: "https://thumbs.dreamstime.com/b/girl-beach-sunset-view-generate-ai-girl-beach-sunset-view-horizon-female-generate-ai-ai-generated-294104657.jpg" }]

    const scrollX = useRef(new Animated.Value(0)).current
    const renderItem = ({ item, index }: any) => {
        const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
        ]

        const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 2,0,width*2]
        })
        return (
            <View style={styles.singleRender}>
                <View style={styles.box}>
                    <Animated.Image style={[styles.image,{transform:[{translateX}]}]} source={{ uri: item.image_url }} />
                    <View style={styles.nameView}>
                        <Animated.View style={[styles.nameBox,{transform:[{translateY:translateX}]}]}>
                            <Text style={styles.name}>{item?.name}</Text>
                        </Animated.View>
                        <TouchableOpacity style={styles.like}>
                            <Ionicons name='heart-outline' color='#000' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Animated.FlatList data={data}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x:scrollX}}}],
                    {useNativeDriver:true}
                )}
            />
        </View>
    )
}

export default ListUser