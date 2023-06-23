import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const PrivacyPolicy = ({ navigation }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;
    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Privacy Policy</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                <Text style={{ marginStart: 20, fontFamily: Font4, fontSize: hp(2.2), color: Colors.Black }}>{'1. Introduction'}</Text>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'Welcome to Takreebat.'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'Takreebat (“us”, “we”, or “our”) operates Takreebat.com (hereinafter referred to as “Service”). Our Privacy Policy governs your visit to Takreebat.com, and explains how we collect, safeguard and disclose information that results from your use of our Service.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font4, fontSize: hp(2.1), color: Colors.Black }}>{'2. Information Collection and Use'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'Takreebat (“us”, “we”, or “our”) operates Takreebat.com (hereinafter referred to as “Service”). Our Privacy Policy governs your visit to Takreebat.com, and explains how we collect, safeguard and disclose information that results from your use of our Service.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'3. Types of Data Collected'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'Takreebat (“us”, “we”, or “our”) operates Takreebat.com (hereinafter referred to as “Service”). Our Privacy Policy governs your visit to Takreebat.com, and explains how we collect, safeguard and disclose information that results from your use of our Service.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'4. Security of Data'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'5. Your Data Protection Rights Under General Data Protection Regulation (GDPR)'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'6. Payments'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. '}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'7. Links to Other Sites'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'8. Changes to This Privacy Policy'}</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ marginStart: 20, fontFamily: Font2, fontSize: hp(2.1), color: Colors.Black }}>{'9. Contact Us'}</Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom:20}}>
                    <View activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.7), color: Colors.LightGrey }}>{'If you have any questions about this Privacy Policy, please contact us by email: info@Takreebat.com.'}</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
};

export default PrivacyPolicy;

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