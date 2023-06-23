import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native'
import { Images } from '../../../Assets/images';
import { Colors } from '../../../Utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Checkbox } from 'react-native-paper';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import { Icon } from 'react-native-elements';
import { Services } from '../../../Config/Services';
import Toast from 'react-native-toast-message';

const theme = {
    roundness: 2,
    colors: {
        primary: Colors.Blue,
        accent: Colors.DarkBlue,
    },
};
export default Login = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valideEmail, setValideEmail] = useState(false);

    const emailValidator = async (text) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        setValideEmail(reg.test(text))
        setEmail(text)

    };

    const handleUnsub =()=>{
        setEmail('');
        setPassword('');
    }
    // console.log(isSelected)
    const handleLogin = async () => {
        if (email == '') {
            Toast.show({
                type: 'error',
                text1: "Attention",
                text2: 'Email cannot be empty',
                autoHide: true,
                position: 'top',
                visibilityTime: 2000,
            });
            return false;
        }
        if (valideEmail != true) {
            Toast.show({
                type: 'error',
                text1: "Attention",
                text2: 'Please enter valid email',
                autoHide: true,
                position: 'top',
                visibilityTime: 2000,
            });
            return false;
        }
        if (password == '') {
            Toast.show({
                type: 'error',
                text1: "Attention",
                text2: 'Password cannot be empty',
                autoHide: true,
                position: 'top',
                visibilityTime: 2000,
            });
            return false;
        }
        await Services.Login(email, password, setLoading, navigation, isSelected, handleUnsub);
    }

    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.Snow} />
            <View style={styles.container}>
                <KeyboardAwareScrollView enableOnAndroid={true} style={{}}>
                    <View style={{ height: hp('55%'), padding: 15, alignItems: "flex-start", justifyContent: "flex-end", paddingBottom: 0, }}>
                        <View style={{ padding: 10, marginVertical: 10 }}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: hp(4.4), color: Colors.Black, }}>Sign In</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: '#4B4A4A', textAlign: "left", fontSize: hp(2) }}>Email</Text>
                            <View style={{ flexDirection: "row", width: wp('85%'), height: 50, backgroundColor: Colors.White, marginTop: 5, marginBottom: 10, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey }}>
                                <TextInput onChangeText={emailValidator} value={email} style={{ flex: 1, paddingHorizontal: 15, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }} placeholder="abc@example.com" placeholderTextColor={Colors.MidGrey} />
                            </View>
                            <Text style={{ fontFamily: "Poppins-Medium", fontStyle:"italic",color: Colors.MidGrey, textAlign: "left", fontSize: hp(1.4) }}>eg: abc@example.com</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: '#4B4A4A', textAlign: "left", fontSize: hp(2) }}>Password</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", width: wp('85%'), height: 50, paddingHorizontal: 15, backgroundColor: Colors.White, marginTop: 5, marginBottom: 10, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey }}>
                                <TextInput onChangeText={setPassword} value={password} style={{ flex: 1, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }} placeholder="********" placeholderTextColor={Colors.MidGrey} secureTextEntry={visible === true ? false : true} />
                                <Icon name={visible === true ? "eye" : "eye-off"} type="ionicon" color={visible === true ? Colors.Blue : Colors.LightGrey} onPress={() => setVisible(!visible)} />
                            </View>
                            <Text style={{ fontFamily: "Poppins-Medium", fontStyle:"italic",color: Colors.MidGrey, textAlign: "left", fontSize: hp(1.4) }}>eg: password must be greater than 8 digits. Use special charachters @$#&.</Text>

                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
                            <View style={{ alignItems: 'flex-end', width: wp('85%') }}>
                                <Text style={{ fontFamily: "Poppins-Regular", fontStyle: "italic", color: Colors.Blue, fontSize: hp(1.8), marginEnd: 5 }} onPress={() => navigation.navigate('ForgetPassword')}>Forget Password?</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 10, flexDirection: 'row', width: wp('85%'), alignItems: "center", justifyContent: "flex-start", }}>
                            <Checkbox.Android
                                uncheckedColor={Colors.LightGrey}
                                color={Colors.Blue}
                                theme={theme}
                                status={isSelected ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setSelection(!isSelected);
                                }}
                                style={{ width: 10, height: 10 }}
                            />
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.MidBlack, fontSize: hp(2), alignSelf: 'center', }}>Remember me?</Text>
                        </View>
                    </View>
                    <View />
                    {/* Button View */}
                    <View style={{ height: hp('45%'), padding: 10, alignItems: "center", justifyContent: "space-around", }}>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('70%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10 }}
                                onPress={handleLogin}
                            >{!loading ?
                                <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.White, fontSize: hp(2.4) }}>Sign In</Text>
                                : <ActivityIndicator size="small" color="white" />
                                }
                            </TouchableOpacity>
                            <View style={{ marginTop: 15, marginBottom: 10 }}>
                                <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.MidBlack, fontSize: hp(2.2) }}>or Continue with</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <Image source={Icons.FBIcon} style={{ width: 60, height: 40, resizeMode: 'cover', marginEnd: 5 }} />
                                <Image source={Icons.GGIcon} style={{ width: 40, height: 40, resizeMode: 'contain', marginStart: 5 }} />
                            </View>
                        </View>
                        <View style={{ flex: .5, padding: 10, alignItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.MidBlack, fontSize: hp(2) }}>Don't have an account? </Text>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.Blue, fontSize: hp(2.1), }} onPress={() => navigation.navigate('Signup')}>SignUp</Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        // flex:1,
        backgroundColor: Colors.Snow,
        justifyContent: "space-between",
    },
});