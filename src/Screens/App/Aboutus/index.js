import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const AboutUs = ({ navigation }) => {
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
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>About Us</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 20 }}>
                <Text style={{ marginStart: 20, fontFamily: Font4, fontSize: hp(2.7), color: Colors.Black }}>About Us</Text>
            </View>
            <View style={{ marginVertical: 0, alignItems: 'center', }}>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'Takreebat is an event app where you can find the best eventservice vendors, with prices and reviews at the click of a button. Whether you\'re looking for a venue, catering, Transportservices, or Photographers for your event. Takreebat will help you! With favorites and a detailed vendor list -you won\'t need to spend hours planning your event anymore.Takreebat was created because of two problems that everyparty planner or client faces when finding vendors:Not being able to find the right venue/catering/transport service etc. Having trouble communicating with the right people. We want to be your one stop shop so that you can plan everything without having any trouble.All it takes is 3 easy steps: Search for your desired service by typing keywords in our search bar, filter through venues from all over world by location and budget constraints then view more details about each vendor and even make an inquiry.'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontFamily: Font4, fontSize: hp(2), color: Colors.Black }}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontFamily: Font4, fontSize: hp(1.7), color: Colors.MidGrey }}>{'If you have any questions about this Privacy Policy, please contact us by email: info@Takreebat.com.'}</Text>
                </TouchableOpacity>
            </View>

            {/* </KeyboardAwareScrollView> */}
        </View>
    )
};

export default AboutUs;

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