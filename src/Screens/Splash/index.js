import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../Assets/Icons';

// Utilities----------------------------------------------------------------
// import { Icons } from '../../../Assets';
import { Colors } from '../../Utils';

export default class Splash extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={Colors.DarkBlue} />

                <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image source={Icons.Logo} style={{ width: 180, height: 180, resizeMode: 'contain' }} />
                    {/* <Text style={{ fontSize: hp(5), fontFamily:'Segoe UI',fontWeight:'bold', color: Colors.Orange }}>QuickFix</Text> */}
                </View>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DarkBlue,
        alignItems: "center",
        justifyContent: "center",
    },
});