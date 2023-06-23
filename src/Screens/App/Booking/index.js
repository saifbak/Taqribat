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


const d = ({ vendorCategory, checked, setChecked }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View style={{ marginBottom: 10, }}>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Booking details</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <ScrollView >
                {
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
                }
                <View style={{ paddingHorizontal: 20, flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-between", marginVertical: 8, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <RadioButton.Android
                            theme={theme}
                            uncheckedColor={Colors.MidBlack}
                            color={Colors.Blue}
                            value="first"
                            status={checked === "first" ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked("first") }}
                            // size={10}
                            style={{ width: 5, height: 5, }}
                        />
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Advance Payment\n(50% advancement)'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 5, }}>
                        <RadioButton.Android
                            theme={theme}
                            uncheckedColor={Colors.MidBlack}
                            color={Colors.Blue}
                            value="first"
                            status={checked === "second" ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked("second") }}
                            // size={10}
                            style={{ width: 5, height: 5, }}
                        />
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Full Payment\n(10% Discount on total amount)'}</Text>
                    </View>
                </View>
                <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(3.4) }}>{'Total'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(3.4) }}>{'Rs 80,000'}</Text>
                    </View>
                </View>
                <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Booking Total'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Rs 1,60,000'}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Taxes & charges'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'0.00'}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10, alignItems: 'center', }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('78%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10, }}
                        onPress={() => { navigation.navigate('Payment') }}
                    >
                        <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2.4) }}>Proceed to Pay</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const History = ({ vendorCategory, checked, setChecked }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View style={{ marginBottom: 10, }}>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Booking details</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <ScrollView >
                {
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
                }
                <View style={{ paddingHorizontal: 20, flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-between", marginVertical: 8, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <RadioButton.Android
                            theme={theme}
                            uncheckedColor={Colors.MidBlack}
                            color={Colors.Blue}
                            value="first"
                            status={checked === "first" ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked("first") }}
                            // size={10}
                            style={{ width: 5, height: 5, }}
                        />
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Advance Payment\n(50% advancement)'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 5, }}>
                        <RadioButton.Android
                            theme={theme}
                            uncheckedColor={Colors.MidBlack}
                            color={Colors.Blue}
                            value="first"
                            status={checked === "second" ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked("second") }}
                            // size={10}
                            style={{ width: 5, height: 5, }}
                        />
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Full Payment\n(10% Discount on total amount)'}</Text>
                    </View>
                </View>
                <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(3.4) }}>{'Total'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(3.4) }}>{'Rs 80,000'}</Text>
                    </View>
                </View>
                <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Booking Total'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Rs 1,60,000'}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Taxes & charges'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'0.00'}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10, alignItems: 'center', }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('78%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10, }}
                        onPress={() => { navigation.navigate('Payment') }}
                    >
                        <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2.4) }}>Proceed to Pay</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const Booking = ({ navigation, route }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;
    const [checked, setChecked] = useState('');
    const [data, setData] = useState(route.params.data)
    console.log(route.params.data)
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
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>Booking details</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <ScrollView >
                {
                    [data].map((item, index) => {
                        return (
                            <View style={{
                                alignItems: 'center', marginTop: 15,
                                marginVertical: 10,
                                marginHorizontal: 10,
                                shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10
                            }}>
                                <Image
                                    source={
                                        item.icon == 'cater' ? Images.Caters
                                            : item.icon == 'transport' ? Images.Transport
                                                : item.icon == 'decor' ? Images.FlowerDecoration
                                                    : item.icon == 'venue' ? Images.SP2
                                                        : item.icon == 'photography' ? Images.Photography : ''
                                    }
                                    style={{ width: wp('90%'), height: 120, resizeMode: 'cover', borderRadius: 10 }} />
                                <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: wp('90%'), height: 120, position: "absolute", borderRadius: 10 }} />
                                <View style={{ position: 'absolute', bottom: 15, left: 20, alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 0.83)', fontFamily: Font4, fontSize: hp(2.1), marginBottom: -2 }}>{item.title}</Text>
                                    <Text style={{ color: Colors.White, fontFamily: Font4, fontSize: hp(2.5), marginBottom: -2 }}>{item.title}</Text>
                                    <View style={{ width: wp('85%'), flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                        <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.White, fontSize: hp(2) }}>{`Rs ${item.price}`}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                            <Icon name="star" color={'yellow'} size={22} />
                                            <Text style={{ fontFamily: Font1, fontSize: hp(1.8), color: Colors.White, marginStart: 3, }}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View activeOpacity={0.6} style={{ position: 'absolute', top: 15, right: 25, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Image source={Icons.Bin} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                                </View>
                            </View>
                        )
                    })
                }
                <View style={{ paddingHorizontal: 20, flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-between", marginVertical: 8, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                        <RadioButton.Android
                            theme={theme}
                            uncheckedColor={Colors.MidBlack}
                            color={Colors.Blue}
                            value="first"
                            status={checked === "first" ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked("first") }}
                            // size={10}
                            style={{ width: 5, height: 5, }}
                        />
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Advance Payment\n(50% advancement)'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 5, }}>
                        <RadioButton.Android
                            theme={theme}
                            uncheckedColor={Colors.MidBlack}
                            color={Colors.Blue}
                            value="first"
                            status={checked === "second" ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked("second") }}
                            // size={10}
                            style={{ width: 5, height: 5, }}
                        />
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Full Payment\n(10% Discount on total amount)'}</Text>
                    </View>
                </View>
                <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                {
                    [data].map((item, index) => {
                        return (
                            <>
                                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(3.4) }}>{'Total'}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                        <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(3.4) }}>{`Rs ${item.price}`}</Text>
                                    </View>
                                </View>
                                <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Booking Total'}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                        <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{`Rs ${item.price}`}</Text>
                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'Taxes & charges'}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                        <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{'0.00'}</Text>
                                    </View>
                                </View>
                                <View style={{ marginVertical: 10, alignItems: 'center', }}>
                                    <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('78%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10, }}
                                        onPress={() => { navigation.navigate('Payment', { data: data }) }}
                                    >
                                        <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2.4) }}>Proceed to Pay</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
};

export default Booking;

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