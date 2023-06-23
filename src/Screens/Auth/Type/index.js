import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Colors } from '../../../Utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../../Assets/Icons';


export default TypeScreen = ({ navigation }) => {
    const { container, content, heading, btnContainer, ellipseStyle, iconsStyle, labelStyle } = styles;
    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.Snow} />
            <View style={container}>
                <View style={content}>
                    <Text style={heading}>Tell us who you are?</Text>
                    <TouchableOpacity style={btnContainer} activeOpacity={0.7} onPress={() =>navigation.navigate('WelcomeScreen')}>
                        <Image source={Icons.Ellipse} style={ellipseStyle} />
                        <Image source={Icons.UserIcon} style={iconsStyle} />
                        <Text style={labelStyle}>User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnContainer} activeOpacity={0.7} onPress={() =>navigation.navigate('WelcomeScreen')}>
                        <Image source={Icons.Ellipse} style={ellipseStyle} />
                        <Image source={Icons.ServiceIcon} style={iconsStyle} />
                        <Text style={labelStyle}>Service Provider</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Snow,
        padding: 10,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-evenly'
    },
    heading: {
        fontSize: hp(3.2),
        fontFamily: "Poppins-SemiBold",
        color: Colors.Black,
        alignSelf: 'center'
    },
    btnContainer: {
        alignItems: 'center'
    },
    ellipseStyle: {
        width: '100%',
        height: 200,
        resizeMode: "contain"
    },
    iconsStyle: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        position: "absolute",
        alignSelf: "center",
        top: 55
    },
    labelStyle: {
        fontSize: hp(2.6),
        fontFamily: "Poppins-SemiBold",
        color: Colors.LightGrey,
    },
});