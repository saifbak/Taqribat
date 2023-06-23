import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Help = ({ navigation }) => {
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
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Help</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 5, marginTop: 20 }}>
                <Text style={{ marginStart: 20, fontFamily: Font4, fontSize: hp(2.7), color: Colors.MidBlack }}>Contact Us</Text>
            </View>
            <View style={{ marginVertical: 0, alignItems: 'center',marginLeft:30, }}>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Image source={Icons.Call} style={{width:20,height: 20, resizeMode: 'contain', marginEnd:8 }} onPress={() => navigation.navigate('Profile', { screen: 'EditProfile' })} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(1.7), color: Colors.MidGrey }}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={Icons.Mail} style={{width:20,height: 20, resizeMode: 'contain', marginEnd:8 }} onPress={() => navigation.navigate('Profile', { screen: 'EditProfile' })} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(1.7), color: Colors.MidGrey }}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={Icons.Text} style={{width:20,height: 20, resizeMode: 'contain', marginEnd:8 }} onPress={() => navigation.navigate('Profile', { screen: 'EditProfile' })} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(1.7), color: Colors.MidGrey }}>Send Message</Text>
                </TouchableOpacity>
            </View>

            {/* </KeyboardAwareScrollView> */}
        </View>
    )
};

export default Help;

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