import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Font1, Font2, Font3, Font4 } from '../../../Utils';
import { Icons } from '../../../Assets/Icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import StarReview from 'react-native-stars';
import Share from 'react-native-share';


const Details = ({ navigation, route }) => {
    const { container, inputView, inputField, sc1Item2 } = styles;

    const vendorCategory = [
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Photographers, Videographers, Pre Wed..' },
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2, details: 'Catering services, sweets, Desi foods...' },
        { label: 'Floral Decoration', value: 'floral decoration', icon: Images.SP1, details: 'Decorators' },
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3, details: 'Banquet halls, Lawns / Farmhouses...' },
    ];
    const onShare = async () => {
        const sharedOption = {
            message: 'The Instant Evenet Booking App',
            title: 'Taqribat',
            // url: Platform.OS == 'ios' ? 'https://apps.apple.com/us/app/getgftd/id1536789198' : 'https://play.google.com/store/apps/details?id=com.gftd'
        };
        // try {
        //     const result = await Share.open(sharedOption);
        //     if (result.action === Share.sharedAction) {
        //         if (result.activityType) {
        //             return;
        //         } else {
        //             return;
        //         }
        //     } else if (result.action === Share.dismissedAction) {
        //         return;
        //     }
        // } catch (error) {
        //     console.log(error.message);
        // }

        Share.open(sharedOption)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };
    
    return (
        <View style={container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <View>
                <Image 
                // source={route.params.data.icon}
                source={
                    route.params.data.icon == 'cater' ? Images.Caters
                        : route.params.data.icon == 'transport' ? Images.Transport
                            : route.params.data.icon == 'decor' ? Images.FlowerDecoration
                                : route.params.data.icon == 'venue' ? Images.SP2
                                    : route.params.data.icon == 'photography' ? Images.Photography : ''
                }
                style={{ width: wp('100%'), height: hp(35), resizeMode: "cover", }} />
                <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: wp('100%'), height: hp(35), position: "absolute", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />

                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, position: "absolute", top: 30 }}>
                    <Icon name={'arrow-back-ios'} color={Colors.White} size={30} onPress={() => navigation.goBack()} />
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.Black, fontSize: hp(3) }}>{route.params.data.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                            <Image source={Icons.PinLoc} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.Black, fontSize: hp(1.8), marginStart: 5 }}>{route.params.data.location}</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: Colors.Snow, width: 100, height: hp(4.5), alignItems: 'center', justifyContent: 'center', borderRadius: 5, borderWidth: 2, borderColor: Colors.Blue }}>
                            <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.Blue, fontSize: hp(1.6) }}>View on map</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, margin: 10, marginTop: -5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Image source={Icons.Stars} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: Font1, marginStart: 8, color: Colors.Black, fontSize: hp(1.8) }}>{route.params.data.rating}</Text>
                    </View>
                </View>
                <View style={{ width: 1.8, height: 20, backgroundColor: Colors.MidGrey, marginHorizontal: 8 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Messenger')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Image source={Icons.Mes} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: Font1, marginStart: 8, color: Colors.Black, fontSize: hp(1.8), marginStart: wp(2) }}>{'Message'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 1.8, height: 20, backgroundColor: Colors.MidGrey, marginHorizontal: 8 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <TouchableOpacity onPress={onShare} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                        <Image source={Icons.Share} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: Font1, marginStart: 8, color: Colors.Black, fontSize: hp(1.8) }}>{'Share'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{ paddingHorizontal: 10, marginHorizontal: 10, }}>
                    <Text style={{ fontFamily: Font4, marginStart: 2, color: '#5A5353', fontSize: hp(3) }}>{'Price'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                        <Text style={{ fontFamily: Font2, marginStart: 2, color: Colors.LightGrey, fontSize: hp(2), }}>{`Starting from Rs ${route.params.data.price}`}</Text>
                    </View>
                </View>
                <View style={{ padding: 10, marginHorizontal: 10, }}>
                    <Text style={{ fontFamily: Font4, marginStart: 2, color: '#5A5353', fontSize: hp(2.3) }}>{'About'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                        <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.Black, fontSize: hp(1.6), }}>{route.params.data.about}</Text>
                    </View>
                </View>

                <View style={{ padding: 10, marginTop: -5, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: 10, marginBottom: 5 }}>
                        <Text style={{ fontFamily: Font4, marginStart: 2, color: '#5A5353', fontSize: hp(2.3) }}>{'Album'}</Text>
                        <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.Blue, fontSize: hp(1.5) }}>{'See all'}</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={vendorCategory}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    marginHorizontal: 10,
                                    shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10
                                }}>
                                    <Image source={item.icon} style={{ width: wp('25%'), height: 75, resizeMode: 'cover', borderRadius: 10 }} />
                                    <LinearGradient colors={['rgba(255,255,255,0.3)', Colors.MidBlack,]} style={{ width: wp('25%'), height: 75, position: "absolute", borderRadius: 10 }} />
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={{ padding: 10, marginTop: -5, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: 10, marginBottom: 5 }}>
                        <Text style={{ fontFamily: Font4, marginStart: 2, color: '#5A5353', fontSize: hp(2.3) }}>{'Customers Review'}</Text>
                        <Text style={{ fontFamily: Font4, marginStart: 2, color: Colors.Blue, fontSize: hp(1.5) }}>{'See all'}</Text>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, flexDirection: 'row' }}>
                        <View style={{ flex: .2, }}>
                            <Image source={Icons.Profile} style={{ width: 45, height: 45, tintColor: 'rgba(37, 115, 213, 0.69)', resizeMode: 'contain' }} />
                        </View>
                        <View style={{ flex: 1, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.2) }}>Yumna Naseem</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <View style={{ marginLeft: -5 }}>
                                        <StarReview
                                            display={3.67}
                                            spacing={3}
                                            count={5}
                                            fullStar={<Icon size={20} name={'star'} color={'gold'} style={[styles.myStarStyle]} />}
                                            emptyStar={<Icon size={20} name={'star-outline'} color={'gold'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                            halfStar={<Icon size={20} name={'star-half'} color={'gold'} style={[styles.myStarStyle]} />} />
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.Black, fontSize: hp(1.6) }}>{'Lorem ipsum dolor sit amet, consectetur adipiscing e'}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, flexDirection: 'row' }}>
                        <View style={{ flex: .2, }}>
                            <Image source={Icons.Profile} style={{ width: 45, height: 45, tintColor: 'rgba(37, 115, 213, 0.69)', resizeMode: 'contain' }} />
                        </View>
                        <View style={{ flex: 1, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                <Text style={{ fontFamily: Font2, marginStart: 2, color: '#5A5353', fontSize: hp(2.2) }}>Yumna Naseem</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginEnd: 10, }}>
                                    <View style={{ marginLeft: -5 }}>
                                        <StarReview
                                            display={3.67}
                                            spacing={3}
                                            count={5}
                                            fullStar={<Icon size={20} name={'star'} color={'gold'} style={[styles.myStarStyle]} />}
                                            emptyStar={<Icon size={20} name={'star-outline'} color={'gold'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                            halfStar={<Icon size={20} name={'star-half'} color={'gold'} style={[styles.myStarStyle]} />} />
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: Font1, marginStart: 2, color: Colors.Black, fontSize: hp(1.6) }}>{'Lorem ipsum dolor sit amet, consectetur adipiscing e'}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View style={{ height: 70, paddingHorizontal: 10, marginHorizontal: 10, alignItems: 'center', }}>
                <TouchableOpacity style={{ backgroundColor: Colors.Blue, width: wp('78%'), height: 50, alignItems: "center", justifyContent: "center", borderRadius: 12, marginVertical: 10, }}
                    onPress={() => { navigation.navigate('Booking',{data:route.params.data}) }}
                >
                    <Text style={{ fontFamily: Font4, color: Colors.White, fontSize: hp(2.4) }}>Proceed to Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Details;

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

    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
});