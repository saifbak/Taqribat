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
import firestore from '@react-native-firebase/firestore';


const theme = {
    roundness: 2,
    colors: {
        primary: Colors.Blue,
        accent: Colors.DarkBlue,
    },
};
const Payment = ({ navigation, route }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;
    const [checked, setChecked] = useState('');
    const [loading, setLoading] = useState('');
    const [data, setData] = useState(route.params.data);

    const vendorCategory = [
        { label: 'Bee Event', value: 'bee events', icon: Images.FlowerDecoration, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Photographers, Videographers, Pre Wed..' },
        // { label: 'Bee Event', value: 'bee events', icon: Images.Caters, details: 'Banquet halls, Lawns / Farmhouses...' },
        // { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Catering services, sweets, Desi foods...' },
        // { label: 'Floral Decoration', value: 'floral decoration', icon: Images.Photography, details: 'Decorators' },
        // { label: 'Bee Event', value: 'bee events', icon: Images.Transport, details: 'Banquet halls, Lawns / Farmhouses...' },
    ];

    const handlePayment = async () => {
        setLoading(true)
        const obj = {
            name: 'Royal Banquet',
            price: '80,000',
            details: 'Banquet halls, Lawns / Farmhouses...',
            venue_date: '01/10/2022',
            capacity_of_persons: '100-500',

        };
        firestore().collection('Bookings').add(obj).then(result => {
            navigation.navigate('ConfirmBooking');
            setLoading(false)
            console.log('Data insert',result);
        })
    };

    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View style={{ marginBottom: 10, }}>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>{'Payment'}</Text>
                    <View style={{ width: 20 }} />
                </View>
            </View>
            <ScrollView >
                <View style={{ paddingHorizontal: 30, flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-between", marginVertical: 8, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                        <Text style={{ fontFamily: Font2, marginVertical: 10, color: Colors.Black, fontSize: hp(2.5) }}>{'Booking Total'}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                            <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5) }}>{`Rs ${data.price}`}</Text>
                        </View>
                    </View>
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
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Cash on delivery'}</Text>
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
                        <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Credit / Debit Card'}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: Colors.Blue, width: wp('33%'), height: 45, alignItems: "center", justifyContent: "center", borderRadius: 8, marginVertical: 10, }}
                    // onPress={() => { navigation.navigate('Payment') }}
                    >
                        <Icon name="add" color={Colors.White} />
                        <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2), marginStart: 5, }}>Add Card</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ width: wp('80%'), height: 1, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} /> */}
                <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "center", }}>
                    <View style={{ width: wp('85%'), height: hp(48), backgroundColor: Colors.Grey, flexDirection: 'column', alignItems: 'center', justifyContent: "space-around", borderRadius: 20 }}>
                        <View style={{ flex: .8, alignSelf: 'center', justifyContent: "center" }}>
                            <View style={{ width: wp('80%'), paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", marginEnd: 10, }}>
                                <Image source={Icons.Menu} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.5), marginStart: 15 }}>{'Booking Summary'}</Text>
                            </View>
                            {/* <View style={{ width: wp('85%'), paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 20, }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.1) }}>{'ABC Banquet (A)'}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.1) }}>{`Rs ${data.price}`}</Text>
                                </View>
                            </View> */}
                            <View style={{ width: wp('85%'), paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.1) }}>{data.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.1) }}>{`Rs ${data.price}`}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center', justifyContent: "center", marginTop: -10 }}>
                            <View style={{ width: wp('75%'), height: 1.5, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(3.4) }}>{'Total'}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(3.4) }}>{`Rs ${data.price}`}</Text>
                                </View>
                            </View>
                            <View style={{ width: wp('75%'), height: 1.5, backgroundColor: Colors.MidGrey, alignSelf: 'center', marginVertical: 10, }} />
                            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.5) }}>{'Booking Total'}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.5) }}>{`Rs ${data.price}`}</Text>
                                </View>
                            </View>
                            <View style={{ width: wp('85%'), paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.5) }}>{'Taxes & charges'}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2.5) }}>{'0.00'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 10, alignItems: 'center', }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('85%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10, }}
                        onPress={handlePayment}
                    >
                        <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2.4) }}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};

export default Payment;

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