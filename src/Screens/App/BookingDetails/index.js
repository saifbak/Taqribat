import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RadioButton } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const theme = {
    roundness: 2,
    colors: {
        primary: Colors.Blue,
        accent: Colors.DarkBlue,
    },
};


const Confirmed = ({ vendorCategory, checked, setChecked }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    return (
        <View style={container}>

            <ScrollView >
                {!vendorCategory.length > 0 ?
                    vendorCategory.map((item, index) => {
                        return (
                            <View style={{
                                alignItems: 'center', marginTop: 15,
                                marginVertical: 10,
                                marginHorizontal: 10,
                                shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10
                            }}>
                                <Image source={item.icon} style={{ width: wp('90%'), height: 120, resizeMode: 'cover', borderRadius: 10 }} />
                                <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: wp('90%'), height: 120, position: "absolute", borderRadius: 10 }} />
                                <View style={{ position: 'absolute', bottom: 15, left: 20, alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 0.83)', fontFamily: Font4, fontSize: hp(2.1), marginBottom: -2 }}>{item.label}</Text>
                                    <Text style={{ color: Colors.White, fontFamily: Font4, fontSize: hp(2.5), marginBottom: -2 }}>{'Royal Hotel'}</Text>
                                    <View style={{ width: wp('85%'), flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                        <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.White, fontSize: hp(2) }}>{'Rs 80,000'}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                            <Icon name="star" color={'yellow'} size={22} />
                                            <Text style={{ fontFamily: Font1, fontSize: hp(1.8), color: Colors.White, marginStart: 3, }}>5.0</Text>
                                        </View>
                                    </View>
                                </View>
                                <View activeOpacity={0.6} style={{ position: 'absolute', top: 15, right: 25, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Image source={Icons.Bin} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                                </View>
                            </View>
                        )
                    })
                    : 
                    <Text style={{ textAlign: 'center',marginTop:10,fontFamily: Font1, fontSize: hp(1.8), color: Colors.Black, marginStart: 3, }}>No Bookings yet.</Text>
                }
            </ScrollView>
        </View>
    )
}
const History = ({ vendorCategory, checked, setChecked }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    return (
        <View style={container}>
            <Image source={Images.History} style={{ width: wp('100%'), height: 300, resizeMode: 'contain', marginTop:hp(2) }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop:hp(4) }}>
                <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.MidGrey, fontSize: hp(3.3) }}>{'No History Record!'}</Text>
            </View>
            
        </View>
    )
}


const Tab = createMaterialTopTabNavigator();
function MyTabs({ vendorCategory, checked, setChecked }) {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: hp(2.1), fontFamily: Font4 },
            tabBarStyle: { backgroundColor: Colors.Snow, borderColor: 'red', height: 60, width: wp('90%'), alignSelf: 'center', elevation: 0, },
            tabBarIndicatorStyle: { backgroundColor: 'rgba(40, 56, 122, 0.87)', height: 3 },
            tabBarActiveTintColor: 'rgba(40, 56, 122, 0.87)',
            tabBarInactiveTintColor: Colors.LightGrey,
        }}>
            <Tab.Screen name="Confirmed">
                {props => <Confirmed {...props} vendorCategory={vendorCategory} checked={checked} setChecked={checked} />}
            </Tab.Screen>
            <Tab.Screen name="History">
                {props => <History {...props} vendorCategory={vendorCategory} checked={checked} setChecked={checked} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};
const BookingDetails = ({ navigation }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;
    const [checked, setChecked] = useState('');

    const vendorCategory = [
        { label: 'Bee Event', value: 'bee events', icon: Images.FlowerDecoration, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Photographers, Videographers, Pre Wed..' },
        // { label: 'Bee Event', value: 'bee events', icon: Images.Caters, details: 'Banquet halls, Lawns / Farmhouses...' },
        // { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Catering services, sweets, Desi foods...' },
        // { label: 'Floral Decoration', value: 'floral decoration', icon: Images.Photography, details: 'Decorators' },
        // { label: 'Bee Event', value: 'bee events', icon: Images.Transport, details: 'Banquet halls, Lawns / Farmhouses...' },
    ]
    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View style={{ marginBottom: 10, }}>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Booking Details</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <MyTabs vendorCategory={vendorCategory} checked={checked} setChecked={checked} />
        </View>
    )
};

export default BookingDetails;

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