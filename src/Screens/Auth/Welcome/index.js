import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import { Images } from '../../../Assets/images';
import { Colors } from '../../../Utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 10,...Platform.OS == 'ios' && {marginTop:hp(8)} }}>
                <Image source={Images.BG1} style={{ width: '100%', height: 250, resizeMode: "contain" }} />
            </View>
            <View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
                <View style={{ padding: 10, }}>
                    <Text style={{fontFamily: 'Poppins-SemiBold',  fontSize: hp(4.2), color: Colors.Black, }}>Let's get started.</Text>
                </View>
                <View style={{ padding: 10, }}>
                    <Text style={{fontFamily: 'Poppins-SemiBold', color: Colors.LightGrey, textAlign: "center", fontSize: hp(2), }}>Lorem ipsum dolor sit amet, consectetur
                        elit. Pellentesque velit leo, pellentesque eu
                        faucibus vitae, iaculis et mauris
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{ backgroundColor: Colors.Blue, width: wp('70%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 8, marginVertical: 10 }}>
                    <Text style={{ color: Colors.White, fontFamily: 'Poppins-SemiBold',fontSize: hp(2.4) }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={{ backgroundColor: Colors.White, width: wp('70%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 8, marginVertical: 10, borderWidth: 2, borderColor: Colors.Blue }}>
                    <Text style={{ color: Colors.Blue,fontFamily: 'Poppins-SemiBold', fontSize: hp(2.4) }}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.Snow,
    },
});