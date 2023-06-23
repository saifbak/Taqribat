import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Images } from '../../Assets/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Colors, Font3, Font4 } from '../../Utils';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Platform } from 'react-native';
import { AuthContext } from '../../Context';
import { Icon } from 'react-native-elements';
import { Icons } from '../../Assets/Icons';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
    {
        key: 'one',
        title: 'Search And Explore',
        text: "Lorem ipsum dolor sit amet, consectetur elit. Pellentesque velit leo, pellentesque eu faucibus vitae, iaculis et mauris",
        image: Images.SP1,
        backgroundColor: Colors.Grey,
    },
    {
        key: 'two',
        title: 'Get Popular Vendors Near you',
        text: 'Lorem ipsum dolor sit amet, consectetur elit. Pellentesque velit leo, pellentesqu',
        image: Images.SP2,
        backgroundColor: Colors.Grey,
    },
    {
        key: 'three',
        title: 'Celebrate all events with your Family & Friends',
        text: 'Celebrate all events with your Family & Friends',
        image: Images.SP3,
        backgroundColor: Colors.Grey,
    }
];

export default OnBoard = () => {
    const { onboard } = useContext(AuthContext);

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <View style={styles.body}>
                    <Image source={item.image} style={{resizeMode: 'cover', width: 393, height: 430, borderBottomLeftRadius: 25, borderBottomRightRadius: 25,}} />
                    <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: 393, height: 430, position: "absolute",top:0, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, }} />
                    <View style={{ width:wp('95%'),marginTop: hp(2),paddingHorizontal:20, alignItems:"flex-start", justifyContent: "flex-start", }}>
                        <Text style={styles.heading}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>

                </View>
                <View style={styles.footer}>
                    {item.key == 'three' &&
                        <TouchableOpacity style={styles.getStartedButton} onPress={() => onboard()}>
                            <Text style={styles.getStartedButtonText}>{item.key === 'three' ? "Get Started" : "Skip"}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
    const _renderNextButton = () => {
        return (
            <View >
                <Image source={Icons.Arrow} style={{ width: 50, height: 50, resizeMode: "contain" }} />
            </View>
        );
    };
    const _renderSkipButton = () => {
        return (
            <View style={styles.skipButton}>
                <Text style={{ color: Colors.Blue, fontSize: hp(2.5), fontFamily: "Poppins-Bold" }}>SKIP</Text>
            </View>
        );
    };
    return (
        <>
            <StatusBar barStyle={"light-content"} translucent backgroundColor={'transparent'} />
            <View style={{ backgroundColor: Colors.White, flex: 1 }}>
                <AppIntroSlider
                    dotStyle={{ width: 13, height: 13, borderRadius: 100, backgroundColor: 'silver', top:Platform.OS == 'ios' ?-320 :  -250, borderWidth: 1, borderColor: 'grey' }}
                    activeDotStyle={{ width: 13, height: 13, borderRadius: 100, backgroundColor: Colors.Blue, top: Platform.OS == 'ios' ?-320 : -250, borderWidth: 1, borderColor: 'grey' }}
                    renderItem={_renderItem}
                    data={slides}
                    nextLabel=""
                    doneLabel=''
                    skipLabel='SKIP'
                    style={{ fontFamily: 'Poppins-Medium' }}
                    showSkipButton={true}
                    renderNextButton={_renderNextButton}
                    renderSkipButton={_renderSkipButton}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: Colors.Blue,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowColor: Colors.Blue,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 10,
        elevation: 10,
    },
    slide: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: Platform.OS == 'android' ? 30 : 40,
        borderBottomRightRadius: Platform.OS == 'android' ? 30 : 40,
    },
    heading: {
        // backgroundColor:'pink',
        fontFamily: Font4,
        // paddingHorizontal: 20,
        fontSize: hp(3.1),
        color: Colors.Black,
        textAlign: 'left',
        marginTop: 40,
        paddingTop: 10,
        marginBottom:10,

    },
    text: {
        fontFamily: Font4,
        fontSize: hp(2),
        color: Colors.LightGrey,
        // paddingHorizontal: 20,
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    getStartedButton: {
        backgroundColor: Colors.Blue,
        width: wp('70%'),
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        shadowColor: Colors.Blue,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        marginVertical: 5,
    },
    getStartedButtonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: hp(2.5),
        color: 'white',
    },
    skipButton: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    }
});