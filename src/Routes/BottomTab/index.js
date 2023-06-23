
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'
import Home from '../../Screens/App/Home';
import Favourite from '../../Screens/App/Favourite';
import Profile from '../../Screens/App/Profile';
import { Icons } from '../../Assets/Icons';
import { Colors } from '../../Utils';
import Vendor from '../../Screens/App/Vendors';
import EditProfile from '../../Screens/App/EditProfile';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                        key={index + 1}
                    >
                        <View style={styles.tabContent}>
                            <Image
                                source={
                                    label == 'Home'
                                        ? Icons.Home
                                        : label == 'Vendors'
                                            ? Icons.Vendor
                                            : label == 'Favourite'
                                                ? Icons.Favourite
                                                : label == 'Profile'
                                                    ? Icons.ProfileB
                                                    : null
                                }
                                style={[{
                                    ...Platform.select({
                                        ios: {
                                            width: 25,
                                            height: 25,
                                        },
                                        android: {
                                            width: 30,
                                            height: 30,
                                        },
                                    }),
                                    resizeMode: "contain",
                                    tintColor: isFocused ? Colors.Blue : Colors.LightGrey
                                }]}
                            />
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: hp(1.4), color: isFocused ? Colors.Blue : Colors.LightGrey }}>{label}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const horizontalAnimation = {
    gestureDirection: 'horizontal',
    headerShown: false,
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

// Auth Stack ------------------------------
const ProfileStack = createStackNavigator();
const ProfileStackScreens = () => (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen initial={true} name="Profile" >
            {props => <Profile {...props} />}
        </ProfileStack.Screen>
        <ProfileStack.Screen name="EditProfile" >
            {props => <EditProfile {...props} />}
        </ProfileStack.Screen>
        {/* <ProfileStack.Screen initial={true} name="Profile" component={Profile} />
        <ProfileStack.Screen name="EdiProfile" component={EditProfile} /> */}
    </ProfileStack.Navigator>
);


function BottomTabs({ navigation }) {
    return (
        <Tab.Navigator screenOptions={horizontalAnimation}
            tabBar={props => <MyTabBar {...props} />}
            initialRouteName="Home"
            backBehavior="initialRoute"
        >
            <Tab.Screen name="Home" >
                {props => <Home {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Vendors" >
                {props => <Vendor {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Favourite" >
                {props => <Favourite {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Profile"  >
                {props => <Profile {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.White,
        height: Platform.OS == 'android' ? hp(9) : hp(9),
    },
    tabContent: {
        flexDirection: 'column',
        alignItems: 'center',
        height: hp(7),
        marginTop: 5,
        justifyContent: 'space-around',
    },
    iconStyle: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
})