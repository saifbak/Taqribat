import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native'
import { Images } from '../../../Assets/images';
import { Colors, Font3, Font4 } from '../../../Utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Checkbox } from 'react-native-paper';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import { Icon } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { Services } from '../../../Config/Services';

const theme = {
    roundness: 2,
    colors: {
        primary: Colors.Blue,
        accent: Colors.DarkBlue,
    },
};
export default Signup = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [valideEmail, setValideEmail] = useState(false);

    const emailValidator = async (text) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        setValideEmail(reg.test(text))
        setEmail(text)

    };

    const handleUnsub = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSignup = async (signup) => {
        // setLoading(true)
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
        if (confirmPassword == '') {
            Toast.show({
                type: 'error',
                text1: "Attention",
                text2: 'Confirm password cannot be empty',
                autoHide: true,
                position: 'top',
                visibilityTime: 2000,
            });
            return false;
        }
        if (password !== confirmPassword) {
            Toast.show({
                type: 'error',
                text1: "Attention",
                text2: `Passwords do not match.`,
                autoHide: true,
                position: 'top',
                visibilityTime: 2000,
            });
            return false;
        }
        await Services.SignUp(email, password, setLoading, navigation, handleUnsub);
        // else {
        //     auth()
        //         .createUserWithEmailAndPassword(email, password)
        //         .then((res) => {
        //             setLoading(false);
        //             console.log('SignUp res===>', res)
        //             // navigation.navigate('Login');
        //             // setEmail('');
        //             // setPassword('');
        //             // setConfirmPassword('');
        //             // console.log('User account created & signed in!');
        //         })
        //         .catch(error => {
        //             setLoading(false)

        //             if (error.code === 'auth/email-already-in-use') {
        //                 console.log('That email address is already in use!');
        //             }

        //             if (error.code === 'auth/invalid-email') {
        //                 console.log('That email address is invalid!');
        //             }

        //             console.error(error);
        //         });
        // }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <StatusBar barStyle={'dark-content'} backgroundColor={Colors.Snow} />
                <ScrollView contentContainerStyle={{ flex: 1 }} >
                    <View style={{ flex: 1.5, padding: 15, alignItems: "flex-start", justifyContent: "flex-end", }}>
                        <View style={{ padding: 10, marginVertical: 10 }}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: hp(4.4), color: Colors.Black, }}>Sign Up</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: '#4B4A4A', textAlign: "left", fontSize: hp(2) }}>Email or Username</Text>
                            <View style={{ flexDirection: "row", width: wp('85%'), height: 50, backgroundColor: Colors.White, marginTop: 5, marginBottom: 5, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey }}>
                                <TextInput onChangeText={emailValidator} value={email} style={{ flex: 1, paddingHorizontal: 15, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }} placeholder="abc@example.com" placeholderTextColor={Colors.MidGrey} />
                            </View>
                            <Text style={{ fontFamily: "Poppins-Medium", fontStyle: "italic", color: Colors.MidGrey, textAlign: "left", fontSize: hp(1.4) }}>eg: abc@example.com</Text>
                        </View>
                        {/* <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: '#4B4A4A', textAlign: "left", fontSize: hp(2) }}>Phone number</Text>
                            <View style={{ flexDirection: "row", width: wp('85%'), height: 50, backgroundColor: Colors.White, marginTop: 5, marginBottom: 5, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey }}>
                                <TextInput onChangeText={setConfirmPassword} style={{ flex: 1, paddingHorizontal: 15, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.MidGrey }} placeholder="123456789" placeholderTextColor={Colors.MidGrey} secureTextEntry={true} />
                            </View>
                        </View> */}
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: '#4B4A4A', textAlign: "left", fontSize: hp(2) }}>Password</Text>
                            <View style={{ flexDirection: "row", alignItems: 'center', width: wp('85%'), height: 50, paddingHorizontal: 15, backgroundColor: Colors.White, marginTop: 5, marginBottom: 5, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey }}>
                                <TextInput onChangeText={setPassword} value={password} style={{ flex: 1, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }} placeholder="********" placeholderTextColor={Colors.MidGrey} secureTextEntry={visible === true ? false : true} />
                                <Icon name={visible === true ? "eye" : "eye-off"} type="ionicon" color={visible === true ? Colors.Blue : Colors.LightGrey} onPress={() => setVisible(!visible)} />
                            </View>
                            <Text style={{ fontFamily: "Poppins-Medium", fontStyle: "italic", color: Colors.MidGrey, textAlign: "left", fontSize: hp(1.4) }}>eg: password must be greater than 8 digits. Use special charachters @$#&.</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: '#4B4A4A', textAlign: "left", fontSize: hp(2) }}>Confirm Password</Text>
                            <View style={{ flexDirection: "row", alignItems: 'center', width: wp('85%'), height: 50, paddingHorizontal: 15, backgroundColor: Colors.White, marginTop: 5, marginBottom: 5, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey }}>
                                <TextInput onChangeText={setConfirmPassword} value={confirmPassword} style={{ flex: 1, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }} placeholder="********" placeholderTextColor={Colors.MidGrey} secureTextEntry={visible2 === true ? false : true} />
                                <Icon name={visible2 === true ? "eye" : "eye-off"} type="ionicon" color={visible2 === true ? Colors.Blue : Colors.LightGrey} onPress={() => setVisible2(!visible2)} />
                            </View>
                            {/* <Text style={{ fontFamily: "Poppins-Medium", fontStyle: "italic", color: Colors.MidGrey, textAlign: "left", fontSize: hp(1.4) }}>eg: password must be greater than 8 digits. Use special charachters @$#&.</Text> */}

                        </View>
                    </View>
                    <View />
                    {/* Button View */}
                    <View style={{ height: hp('32%'), padding: 10, alignItems: "center", }}>
                        <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('70%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10 }}
                            onPress={handleSignup}
                        >
                            {!loading ?
                                <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.White, fontSize: hp(2.4) }}>Sign Up</Text>
                                : <ActivityIndicator size="small" color="white" />
                            }
                        </TouchableOpacity>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.MidBlack, fontSize: hp(2.2) }}>or Continue with</Text>
                        </View>
                        <View style={{ flexDirection: "row", }}>
                            <Image source={Icons.FBIcon} style={{ width: 50, height: 40, resizeMode: 'cover', marginEnd: 5 }} />
                            <Image source={Icons.GGIcon} style={{ width: 32, height: 40, resizeMode: 'contain', marginStart: 5 }} />
                        </View>
                        <View style={{ height: 70, padding: 10, alignItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.MidBlack, fontSize: hp(2) }}>Already have an account? </Text>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: Colors.Blue, fontSize: hp(2.1), }} onPress={() => navigation.navigate('Login')}>Sign In</Text>
                        </View>
                    </View>
                </ScrollView>

            </KeyboardAwareScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Snow,
        justifyContent: "space-between"
    },
});