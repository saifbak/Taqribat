import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Messenger = ({ navigation }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Message</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            {/* <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 5, marginTop: 20 }}>
                <Text style={{ marginStart: 20, fontFamily: Font4, fontSize: hp(2.7), color: Colors.MidBlack }}>Contact Us</Text>
            </View> */}
            <View style={{marginBottom:10,justifyContent:"center",padding:10, backgroundColor:Colors.Grey,width:('70%'),height:55,alignSelf: 'flex-start',marginStart:20,borderTopRightRadius:10, borderTopLeftRadius:10, borderBottomRightRadius:10, marginTop: 20}}>
                    <Text style={{ fontFamily: Font1 , fontSize: hp(1.8), color: Colors.MidBlack }}>Hi there, Welcome to our App!</Text>
            </View>
            <View style={{ justifyContent:"center",padding:10, backgroundColor:Colors.Grey,width:('60%'),height:55,alignSelf: 'flex-start',marginStart:20,borderTopRightRadius:10, borderTopLeftRadius:10, borderBottomRightRadius:10}}>
                    <Text style={{ fontFamily: Font1 , fontSize: hp(1.8), color: Colors.MidBlack }}>How can we assist you?</Text>
            </View>
            <View style={{flexDirection:'row',backgroundColor: Colors.MidGrey, position:"absolute", width:wp('100%'), bottom:0, height:55,alignItems: 'center',justifyContent: 'space-around'}}>
            <View style={inputView}>
                <TextInput placeholder={'Text Message'} placeholderTextColor={Colors.MidGrey} style={inputField} />
            </View>
                <Image source={Icons.Sent} style={{ width: 20, height: 20, resizeMode: 'contain', marginEnd: 8 }} onPress={() => navigation.navigate('Profile', { screen: 'EditProfile' })} />
            </View>
        </View>
    )
};

export default Messenger;

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
        // position: "absolute",
        // bottom: 0,
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

    // inputView: {
    //     position:"absolute",
    //     bottom: 0,
    //     width: wp('72%'),
    //     backgroundColor: Colors.White,
    //     height: 50,
    //     borderRadius: 8,
    //     paddingHorizontal: 10,
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //     shadowColor: Colors.White, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10

    // },
    // inputField: {
    //     width: wp('70%'),
    //     height: 50,
    //     fontFamily: 'Poppins-Regular',
    //     fontSize: hp(2.4),
    //     color: Colors.MidGrey
    // },
});