import { View, Text,FlatList, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import useGetData from './api/useGetData'
const TestScreen = () => {
    const [value,setValue] = useState(0)
    const [count]:any = useGetData(value);


  return (
    <View style={{flex:1}}>
        <Button title='increment' onPress={()=>setValue((prv)=>prv+1)}/>
        <Text>{count}</Text>
        <Text>{value}</Text>
    </View>
  )
}

export default TestScreen