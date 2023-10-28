import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home-screen';
import Ionicons from "react-native-vector-icons/Ionicons"

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

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'fast-food' : 'fast-food-outline';
                    } else if (route.name === 'My Network') {
                        iconName = focused ? 'globe' : 'globe-outline';
                    } else if (route.name === 'Post') {
                        iconName = focused ? 'reader' : 'reader-outline';
                    } else if (route.name === 'Notification') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                {/* <Tab.Screen name="My Network" component={MyNetwork} options={{ headerShown: false }} /> */}
                {/* <Tab.Screen name="Post" component={POst} options={{ headerShown: false }} /> */}
                <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={SettingsScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
