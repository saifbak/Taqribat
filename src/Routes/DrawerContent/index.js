import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../Utils';

export default DrawerContent = ({ navigation, setProgress }) => {
    const userDetails = useSelector(state => state.UserReducer);
    const isDrawerOpen = useDrawerStatus() === 'open';
    const progress = useDrawerProgress();
    const [collapse, setCollapse] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [loading, setloading] = useState(false);
    const [walletAmount, setwalletAmount] = useState(0);
    const [filePath, setFilePath] = useState('');
    const [token, setToken] = useState('');


    const getImage = async () => {
        AsyncStorage.getItem('@dp')
            .then(async (result) => {
                setFilePath(JSON.parse(result))
            });

    }
    useEffect(() => {
        getImage();
    }, [isDrawerOpen]);


    return (
        <DrawerContentScrollView
            scrolable={true}
            contentContainerStyle={{ flex: 1, backgroundColor: Colors.Blue, }}
        >
            <View style={{
                flex: 1,
                paddingHorizontal: 14,
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: Platform.OS == 'ios' ? 5 : 14,
                    }}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 100 / 2,
                            borderWidth: 2,
                            backgroundColor: Colors.White,
                            borderColor: Colors.Blue,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: Colors.Grey,
                            shadowOffset: { width: 0, height: 8 },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10,
                        }}
                    >
                        <Image source={''} style={{
                            width: 78,
                            height: 78,
                            borderRadius: 100 / 2,
                            resizeMode: 'cover'
                        }} />
                    </View>
                    <View
                        style={{
                            marginLeft: 12,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: wp('40%')
                        }}
                    >
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{
                                color: Colors.White,
                                fontSize: hp(2),
                                fontFamily: 'Lato-Bold',
                            }}>{userDetails ? userDetails?.name : ''}</Text>
                            <Text style={{
                                color: Colors.LightGrey,
                                fontSize: hp(1.9),
                                fontFamily: 'Lato-Regular',
                            }}>{`${'userDetails'}`}</Text>

                        </View>
                        <View
                            style={{
                                height: 1,
                                marginVertical: 8,
                                backgroundColor: Colors.LightGrey
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Text style={{ color: Colors.White, fontSize: hp(2.4), fontFamily: 'Lato-Regular' }}>{'Profile'}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
};