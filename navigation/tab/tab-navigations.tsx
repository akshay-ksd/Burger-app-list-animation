import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import CustomBottomTab from '../../Components/molecules/CustomBottomTab/CustomBottomTab';
import HomeScreen from '../../screens/nft/home-screen/home-screen';
function MyNetwork() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My Network!</Text>
        </View>
    );
}

function POst() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Post!</Text>
        </View>
    );
}

function Notification() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notification!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
export type BottomTabParamList = {
    Home: undefined;
    Notification: undefined;
    Profile: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
    return <CustomBottomTab {...props} />;
};


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={CustomBottomTabs}
                screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={SettingsScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
