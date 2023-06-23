import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList, PermissionsAndroid } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


const EditProfile = ({ navigation }) => {
    const isFocused = useIsFocused()

    const { container, inputView, inputField, sc1Item2 } = styles;
    const [switchBioMetric, setSwitchBioMetric] = useState(false);
    const [filePath, setFilePath] = useState('');
    useEffect(() => {
        AsyncStorage.getItem('@dp')
            .then((item) => {
                let val = JSON.parse(item);
                setFilePath(val != null ? val :'')
                console.log(JSON.parse(item))
            })

    }, [isFocused])
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.log(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.log(err);
                alert('Write permission err', err);
            };
            return false;
        } else return true;
    };

    const captureImage = async (type) => {
        // setOptions(false);
        let options = {
            maxWidth: 300,
            maxHeight: 550,
            quality: 0.8,
            includeBase64: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, async (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    return;
                } else if (response.errorCode == 'permission') {
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                };
                const source = `data:image/jpeg;base64,` + response.assets[0].base64;
                setFilePath(source);
                // setOptions(false);
                // const data = {
                //     profile_type: '2',
                //     name: userDetails != null ? userDetails.name : '',
                //     username: userDetails != null ? userDetails.username : '',
                //     email: userDetails != null ? userDetails.email.toLowerCase() : '',
                //     image: source,
                //     dob: userDetails != null ? userDetails.dob : '',
                // };
                // await Service.updateMainProfile(data, apiToken, adduserData, setloading, getProfileImage);
            });
        };
    };

    const chooseFile = (type) => {
        // setOptions(false);
        let options = {
            maxWidth: 300,
            maxHeight: 550,
            quality: 0.8,
            includeBase64: true,
        };
        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                return;
            } else if (response.errorCode == 'permission') {
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            const source = `data:image/jpeg;base64,` + response.assets[0].base64;
            setFilePath(source);
            await AsyncStorage.setItem('@dp', JSON.stringify(source));
            // setOptions(false);

            // const data = {
            //     profile_type: '2',
            //     name: userDetails != null ? userDetails.name : '',
            //     username: userDetails != null ? userDetails.username : '',
            //     email: userDetails != null ? userDetails.email.toLowerCase() : '',
            //     image: source,
            //     dob: userDetails != null ? userDetails.dob : '',
            // };
            // await Service.updateMainProfile(data, apiToken, adduserData, setloading, getProfileImage);
        });
    };



    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner2} style={{ width: wp('100%'), height: hp(50), resizeMode: "cover", }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3), color: Colors.White }}>Edit Profile</Text>
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
                <TouchableOpacity
                    onPress={chooseFile}
                    style={{ position: "absolute", top: 15, right: 140, backgroundColor: 'lightgrey', width: 30, height: 30, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="edit" color={Colors.Blue} />

                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: -90, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.5), color: Colors.LightGrey, marginEnd: 5 }}>Ali</Text>
                </View>
                <View>

                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between', marginTop: 20, }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(2.2), color: Colors.MidGrey }}>Set Email address Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(2.2), color: Colors.MidGrey }}>Set Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, marginTop: 10 }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(2.2), color: Colors.MidBlack }}>Get updates on whatsapp</Text>

                        <ToggleSwitch
                            isOn={switchBioMetric}
                            onColor="#5ed34b"
                            offColor="lightgrey"
                            size="medium"
                            onToggle={isOn => {
                                setSwitchBioMetric(isOn)
                                // if (isOn == false) AsyncStorage.removeItem('@biometric');
                                // if (isOn == true && switchBioMetric == false) setShowAlert(true)
                            }}
                            animationSpeed={200}

                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={{ fontFamily: Font4, fontSize: hp(2.2), color: Colors.MidGrey }}>Delete my account</Text>
                        {/* <Icon name={'arrow-forward-ios'} color={Colors.MidGrey} size={14} onPress={() => navigation.goBack()} /> */}
                    </TouchableOpacity>
                </View>
                {/* <View>
                    <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', width: wp('90%'), padding: 5, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 15, marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
                        <Image source={Icons.Logout} style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: Colors.Blue }} />
                        <Text style={{ marginStart: 10, fontFamily: Font4, fontSize: hp(1.6), color: Colors.MidBlack }}>Logout</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
};

export default EditProfile;

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