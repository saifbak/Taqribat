import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';

// import database from '@react-native-firebase/database';
const Services = ({ navigation }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    const [vendors, setVendors] = useState([]);
    const vendorCategory = [
        { title: 'Royal Hotel', about: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ultricies id turpis augue arcu lacus morbi egestas. Ultrices et, mattis in", location: 'Gulshan-e-iqbal', rating: 4.3, peron: '300-700', price: '10,000', icon: Images.SP3, details: 'A hotel is an establishment that provides paid lodging on a short-term basis.' },
        { title: 'Delicious Catering', about: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ultricies id turpis augue arcu lacus morbi egestas. Ultrices et, mattis in", location: 'Korangi Creek', rating: 3.4, peron: '100-700', price: '400,000', icon: Images.Caters, details: 'Catering services, sweets, Desi foods...' },
        { title: 'PhotoMania', about: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ultricies id turpis augue arcu lacus morbi egestas. Ultrices et, mattis in", location: 'Malir Cantt', rating: 3.2, peron: '300-700', price: '100,000', icon: Images.Photography, details: 'Photographers, Videographers, Pre Wed..' },
        { title: 'Ahmed Decorators', about: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ultricies id turpis augue arcu lacus morbi egestas. Ultrices et, mattis in", location: 'Shahra-e-faisal', rating: 4.6, peron: '100-700', price: '10,000', icon: Images.FlowerDecoration, details: 'Decorators' },
        { title: 'Karachi Transport', about: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ultricies id turpis augue arcu lacus morbi egestas. Ultrices et, mattis in", location: 'Saddar', rating: 5, peron: '20-50', price: '20,000', icon: Images.Transport, details: 'Transport Services' },
    ];

    useEffect(() => {
        const subscribers = () => {
            firestore().collection('vendors')
                .onSnapshot(doc => {
                    let vendors = []
                    doc.forEach(item => {
                        vendors.push(item.data());
                    })
                    setVendors(vendors);
                })
        }
        subscribers()

        return () => {
            subscribers()
        }
    }, [])

    console.log('Vendros from firestore==>', vendors)
    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image source={Images.Banner1} style={{ width: wp('100%'), height: hp(20), resizeMode: "cover", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                    <Text style={{ fontFamily: Font4, fontSize: hp(3.1), color: Colors.White }}>{'Karachi . Venues'}</Text>
                    <View style={{ width: 20 }}></View>
                </View>
            </View>
            <View style={sc1Item2}>
                <View style={inputView}>
                    <Icon name="search" color={Colors.LightGrey} size={25} />
                    <TextInput placeholder={'Search Cities'} placeholderTextColor={Colors.LightGrey} style={inputField} />
                </View>
            </View>
            <KeyboardAwareScrollView>
                <View style={{ paddingHorizontal: 10, alignItems: 'center', }}>
                    <FlatList
                        data={vendors}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ backgroundColor: Colors.White, marginVertical: 10, shadowColor: Colors.Black, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 10 }, shadowRadius: 10, elevation: 10, margin: 10, borderRadius: 10 }}>
                                    <Image source={
                                        item.icon == 'cater' ? Images.Caters
                                            : item.icon == 'transport' ? Images.Transport
                                                : item.icon == 'decor' ? Images.FlowerDecoration
                                                    : item.icon == 'venue' ? Images.SP2
                                                        : item.icon == 'photography' ? Images.Photography : ''
                                    } style={{ width: wp('88%'), height: hp(25), resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: wp('88%'), height: hp(25), position: "absolute", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', top: 15, right: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.White, width: 37, height: 37, borderRadius: 50 }}>
                                        <Image source={Icons.Favourite} style={{ width: 25, height: 25, tintColor: Colors.Black, resizeMode: 'contain' }} />
                                    </TouchableOpacity>
                                    <View style={{ backgroundColor: Colors.White, height: item.description.length > 50 ? hp(30) : hp(25), width: wp('88%'), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 10, }}>
                                        <View style={{ padding: 10, height: item.description.length > 50 ? 100 : 'auto', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.Black, fontSize: hp(2.5) }}>{item.title}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                                    <Icon name="star" size={20} color={'gold'} />
                                                    <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.Black, fontSize: hp(1.9) }}>{item.rating}</Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.Black, fontSize: hp(1.6) }}>{item.description.substring(0.70)}</Text>
                                        </View>
                                        <View style={{ padding: 10, marginTop: -5 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: "flex-start", marginEnd: 10, }}>
                                                    <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.Black, fontSize: hp(1.7) }}>Price</Text>
                                                    <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.LightGrey, fontSize: hp(1.6) }}>{item.price}</Text>
                                                </View>
                                                <View style={{ width: 1, height: 30, backgroundColor: Colors.LightGrey, marginHorizontal: 8 }} />
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                                    <Image source={Icons.Members} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                                                    <Text style={{ fontFamily: Font1, marginStart: 8, color: Colors.Black, fontSize: hp(1.7) }}>{item.peron}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, }}>
                                            <TouchableOpacity style={{ backgroundColor: Colors.White, width: wp('80%'), height: hp(5.5), alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderWidth: 2, borderColor: Colors.Blue }}
                                                onPress={() => navigation.navigate('Details', { data: item })}
                                            >
                                                <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.Blue, fontSize: hp(2) }}>Details</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
};

export default Services;

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