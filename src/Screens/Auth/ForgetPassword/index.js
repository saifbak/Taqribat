import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgetPassword = ({ navigation }) => {
    const { container, sc1Item2, sc1ItemText, inputView, inputField } = styles;
    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.Snow} />
            <View style={container}>
                    <View style={{ height: hp('35%'), alignItems: 'center', justifyContent: "space-around" }}>
                        <View style={{ marginTop: 50, marginHorizontal: 13, alignItems: 'flex-start', justifyContent: "flex-start", paddingLeft: 15 }}>
                            <Text style={{ width: wp('90%'), fontFamily: Font4, fontSize: hp(4), color: Colors.Black }}>Reset Password</Text>
                            <Text style={{ width: wp('70%'), fontFamily: Font4, fontSize: hp(1.8), color: Colors.LightGrey }}>Please enter your email to receive a link to create a new password via link.</Text>
                        </View>
                        <View style={sc1Item2}>
                            <View style={inputView}>
                                <TextInput placeholder={'Email Address'} placeholderTextColor={Colors.MidGrey} style={inputField} />
                            </View>
                        </View>
                    </View>
                {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}

                    <View style={{ height: hp('55%'), padding: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('70%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10 }}
                            onPress={() => { navigation.navigate('NewPassword') }}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.White, fontSize: hp(2.5) }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                {/* </KeyboardAwareScrollView> */}
            </View>
        </>
    )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        // flex:1,
        height: "100%",
        backgroundColor: Colors.Snow,
    },
    sc1Item2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 30
    },
    sc1ItemText: {
        marginStart: 15,
        fontFamily: 'Poppins-SemiBold',
        fontSize: hp(3),
        color: Colors.White,
    },
    inputView: {
        width: wp('88%'),
        backgroundColor: Colors.White,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: Colors.LightGrey,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 10, shadowOpacity: 0.3,
        elevation: 10

    },
    inputField: {
        width: wp('83%'),
        height: 50,
        fontFamily: 'Poppins-Regular',
        fontSize: hp(2.4),
        color: Colors.MidGrey
    },
})