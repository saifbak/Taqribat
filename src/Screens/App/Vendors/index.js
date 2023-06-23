import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Vendor = ({navigation}) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    const vendorCategory = [
        { label: 'Venues', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Caters', value: 'daim caters', icon: Images.Caters, details: 'Catering services, sweets, Desi foods...' },
        { label: 'Photography', value: 'bee events', icon: Images.Photography, details: 'Photographers, Videographers, Pre Wed..' },
        { label: 'Decorations / Flowers', value: 'daim caters', icon: Images.FlowerDecoration, details: 'Decorators' },
        { label: 'Transport', value: 'floral decoration', icon: Images.Transport, details: 'Transport Services' },
        // { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
    ]
    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={()=>navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Vendors Categories</Text>
                    <View style={{width:20}}></View>
                </View>
            </View>
            <View style={sc1Item2}>
                <View style={inputView}>
                    <Icon name="search" color={Colors.LightGrey} size={25} />
                    <TextInput placeholder={'Search Cities'} placeholderTextColor={Colors.LightGrey} style={inputField} />
                </View>
                <View style={{ height: 2, width: wp('80%'), backgroundColor: Colors.MidGrey, marginVertical: 15, }} />
                <View style={{ flexDirection: 'row', width: wp('80%'), alignItems: 'flex-start', justifyContent: "flex-start", }}>
                    <Image source={Icons.Location} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                    <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.LightGrey, marginStart: 10 }} onPress={() => console.warn('hello')}>Use Current Location</Text>
                </View>
            </View>
            <KeyboardAwareScrollView>
                <View style={{  paddingHorizontal:20, alignItems: 'center',}}>
                    <FlatList
                        data={vendorCategory}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ marginVertical: 10,shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10}}
                                onPress={()=>navigation.navigate('Services')}
                                >
                                    <Image source={item.icon} style={{ width: wp('88%'), height: 85, resizeMode: 'cover', borderRadius: 10 }} />
                                    <LinearGradient colors={['transparent', Colors.MidBlack,]} style={{ width: wp('88%'), height: 85, position: "absolute", borderRadius: 10 }} />
                                    <View style={{ position: 'absolute', bottom: 15, left: 20, alignItems: 'flex-start' }}>
                                        <Text style={{ color: Colors.White, fontFamily: Font4, fontSize: hp(2.2), marginBottom: -2 }}>{item.label}</Text>
                                        <Text style={{ color: Colors.White, fontFamily: Font1, fontSize: hp(1.7), marginBottom: -5 }}>{item.details}</Text>
                                    </View>
                                    {/* <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', top: 10, right: 10, alignItems: 'center', justifyContent: 'center', }}>
                                        <Icon name="chevron-thin-down" type={'entypo'} color={Colors.White} size={22} />
                                    </TouchableOpacity> */}
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>
            </KeyboardAwareScrollView>
        </View>
    )
};

export default Vendor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Snow,
    },
    inputView: {
        width: wp('80%'),
        backgroundColor: Colors.White,
        height: 45,
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 10,
    },
    inputField: {
        width: wp('70%'),
        height: 50,
        fontFamily: 'Poppins-Regular',
        fontSize: hp(2),
        color: Colors.MidGrey
    },
    sc1Item2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        padding: 20,
        top: -50,
        marginBottom: -50,
    },
});