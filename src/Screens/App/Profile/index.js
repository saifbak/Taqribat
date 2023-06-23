import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';

const Profile = ({ navigation, route }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;
    const isFocused = useIsFocused()
    const [filePath, setFilePath] = useState('')
    useEffect(() => {
        AsyncStorage.getItem('@dp')
            .then((item) => {
                let val = JSON.parse(item);
                setFilePath(val != null ? val :'')
                console.log(JSON.parse(item))
            })

    }, [isFocused])

    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner2} style={{ width: wp('100%'), height: hp(50), resizeMode: "cover", }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3), color: Colors.White }}>Profile</Text>
                    <View style={{ width: 20 }}></View>
                </View>
            </View>
            <View style={{ backgroundColor: Colors.Snow, top: -195, height: hp('100%'), borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, }}>
                {filePath == '' ? <View style={{ width: 140, height: 140, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', padding: 20, top: -110, backgroundColor: Colors.LightBlue, borderRadius: 200 }}>
                    <Image source={Icons.ProfileWhite} style={{ width: 60, height: 60, resizeMode: "contain", tintColor: Colors.White }} />
                </View>
                    :
                    <Image source={{ uri: `${filePath}` }} style={{ width: 140, height: 140, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', padding: 20, top: -110, backgroundColor: Colors.LightBlue, borderRadius: 200 }} />

                }
                <Text style={{ fontFamily: Font4, fontSize: hp(3.5), color: Colors.LightGrey, marginTop: -90, alignSelf: 'center', }}>Ali</Text>
                <View>
                    <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, borderBottom: 1.5, borderBottomWidth: 1, borderColor: Colors.MidGrey, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 10, marginTop: 5 }}>
                        <Image source={Icons.ProfileWhite} style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.Blue }} />
                        <Text style={{ marginStart: 10, fontFamily: Font4, fontSize: hp(2), color: Colors.MidBlack }}>Account</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>Edit Profile</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('EditProfile')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('BookingDetails')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>Booking Details</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('BookingDetails')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:support@taqribat.com')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>Inbox</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, borderBottom: 1.5, borderBottomWidth: 1, borderColor: Colors.MidGrey, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 10, marginTop: 10 }}>
                        <Image source={Icons.More} style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.Blue }} />
                        <Text style={{ marginStart: 10, fontFamily: Font4, fontSize: hp(2), color: Colors.MidBlack }}>More</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>Privacy Policy</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('PrivacyPolicy')} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>Send feedbacks</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('AboutUs')} />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('FAQ')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>FAQ</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('FAQ')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>About us</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('AboutUs')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Help')} activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(1.5), color: Colors.MidGrey }}>Help</Text>
                        <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.navigate('Help')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 15, marginTop: 10 }} onPress={() => navigation.navigate('ConfirmLogout')}>
                        <Image source={Icons.Logout} style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.Blue }} />
                        <Text style={{ marginStart: 10, fontFamily: Font4, fontSize: hp(1.6), color: Colors.MidBlack }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default Profile;

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