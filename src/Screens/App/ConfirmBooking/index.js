import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Icons } from '../../../Assets/Icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font2, Font4 } from '../../../Utils';

function ConfirmBooking({ navigation }) {
    const { container, content } = styles;
    return (
        <View style={container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.White} />
            <View style={content}>
                <Image source={Icons.Confirmation} style={{ width: 220, height: 220, resizeMode: 'contain' }} />
                <View style={{ alignItems: "center", marginTop:hp(10) }}>
                    <Text style={{ fontFamily: Font2, fontSize: hp(2.7), color: Colors.MidBlack }}>Your booking is confirmed</Text>
                    <Text style={{ fontFamily: Font2, fontSize: hp(2.2), color: Colors.MidGrey }}>Thankyou for your booking</Text>
                    <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('78%'), height: 55, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10,  marginTop:hp(10) }}
                        onPress={() => { navigation.navigate('Home') }}
                    >
                        <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2.4) }}>Back to Home</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

export default ConfirmBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        // alignItems: 'center',
        // justifyContent:'center'
    },
    content: {
        padding: 10,
        margin: 10,
        alignItems: 'center', justifyContent: "center",
        flex: 1,
    }
})