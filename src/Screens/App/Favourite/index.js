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
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Photographers, Videographers, Pre Wed..' },
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Catering services, sweets, Desi foods...' },
        { label: 'Floral Decoration', value: 'floral decoration', icon: Images.SP1, details: 'Decorators' },
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
    ]
    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={()=>navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Favourities</Text>
                    <View style={{width:20}} />
                </View>
            </View>
                <View style={{ marginVertical: 10, }}>
                    <FlatList
                        data={vendorCategory}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    marginVertical: 10,
                                    shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10
                                }}>
                                    <Image source={item.icon} style={{ width: wp('90%'), height: 120, resizeMode: 'cover', borderRadius: 10 }} />
                                    <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: wp('90%'), height: 120, position: "absolute", borderRadius: 10 }} />
                                    <View style={{ position: 'absolute', bottom: 15, left: 20, alignItems: 'flex-start' }}>
                                        <Text style={{ color: Colors.White, fontFamily: Font4, fontSize: hp(2.2), marginBottom: -2 }}>{item.label}</Text>
                                        <Text style={{ color: Colors.White, fontFamily: Font1, fontSize: hp(1.7), marginBottom: -5 }}>{item.details}</Text>
                                    </View>
                                    <View activeOpacity={0.6} style={{ position: 'absolute', top: 10, right: 10, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
                                        <Icon name="star" color={'yellow'} size={22} />
                                        <Text style={{fontFamily: Font1, fontSize: hp(1.8), color: Colors.White,marginStart:3,}}>5.0</Text>
                                    </View>
                                </View>
                            )
                        }}
                        contentContainerStyle={{alignSelf:'center', marginTop:10,}}
                    />

                </View>
            {/* </KeyboardAwareScrollView> */}
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