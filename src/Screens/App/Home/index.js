import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ImageBackground, TextInput, FlatList } from 'react-native';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../../Assets/Icons';
import { Colors } from '../../../Utils';
import { Fragment } from 'react';
import { Images } from '../../../Assets/images';
import { Icon } from 'react-native-elements';
import StarReview from 'react-native-stars';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import Filter from '../Filter';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';


export default function Home({ navigation }) {

    const userDetails = useSelector(state => state.UserReducer);
    const { container, sectionOne, sectionTwo, sc1Item1, sc1Item2, sc1ItemText, filterView, inputView, inputField, scTTextView, scTText, categoryListView, categoryListText } = styles;
    const [visible, setVisible] = useState(false);
    const isFocused = useIsFocused()
    const [filePath, setFilePath] = useState('')
    useEffect(() => {
        AsyncStorage.getItem('@dp')
            .then((item) => {
                let val =JSON.parse(item)
                setFilePath(val != null ? val :'')
                console.log(JSON.parse(item))
            })

    }, [isFocused])
    const eventCategory = [
        { label: 'Wedding', value: 'wedding', icon: Icons.Ring },
        { label: 'Birthday', value: 'birdthday', icon: Icons.Cake },
        { label: 'Cooperative \nevents', value: 'coop', icon: Icons.Coop },
        { label: 'View All', value: 'more', icon: '' },
    ]
    const vendorCategory = [
        { label: 'Bee Event', value: 'bee events', icon: Images.SP3 },
        { label: 'Daim Caters', value: 'daim caters', icon: Images.SP2 },
        { label: 'Floral Decoration', value: 'floral decoration', icon: Images.SP1 },
        // { label: 'View All', value: 'more', icon: '' },
    ];

    
    const handleFilter = async () => {
        // try {
        //     firestore()
        //         .collection('vendors')
        //         .add({ title: 'Ahmed Decorators', about: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ultricies id turpis augue arcu lacus morbi egestas. Ultrices et, mattis in", location: 'Shahra-e-faisal', rating: 4.6, peron: '100-700', price: '10,000', icon: 'decor', description: 'Decorators' })
        //         .then((result) => {
        //             console.log('User added!',result);
        //         });

        // await firestore().collection('vendors')
        // .onSnapshot(doc => {
        //   doc.forEach(item => {
        //     console.log(item.data())
        //   })
        // });

        // } catch (error) {
        //     console.log(error)
        // }
        navigation.navigate('Filter');
    };

    console.log(userDetails)


    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent />
            <ImageBackground style={container} source={Images.Background}>
                <View style={sectionOne}>
                    <View />
                    <View style={sc1Item1}>
                        <TouchableOpacity onPress={() => console.warn('Profile hit')} >
                            {filePath == '' ?
                                <Image source={Icons.Profile} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                                :
                                <Image source={{ uri: `${filePath}` }} style={{ width: 50, height: 50, resizeMode: 'contain', borderRadius: 100 }} />

                            }
                        </TouchableOpacity>
                        <Text style={sc1ItemText}>Hello Ali !</Text>
                    </View>
                    <View style={sc1Item2}>
                        <View style={inputView}>
                            <Icon name="search" color={Colors.MidGrey} size={30} />
                            <TextInput placeholder={'Search'} placeholderTextColor={Colors.MidGrey} style={inputField} />
                        </View>
                        <TouchableOpacity onPress={handleFilter} style={filterView}>
                            <Image source={Icons.Filter} style={{ width: 30, height: 30, resizeMode: "contain" }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={sectionTwo}>
                    <View style={scTTextView}>
                        <Text style={scTText}>Category</Text>
                    </View>
                    <View>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={eventCategory}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ flexDirection: "column", alignItems: "center", paddingHorizontal: 15, paddingVertical: 5, shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10, }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Vendors')} style={{ width: 60, height: 60, backgroundColor: Colors.White, borderRadius: 8, alignItems: "center", justifyContent: "center", shadowColor: Colors.LightGrey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10 }}>
                                            {item.icon !== ''
                                                ?
                                                <Image source={item.icon} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                                                : <Text style={{ fontFamily: 'Poppins-Bold', fontSize: hp(2.2), color: Colors.MidGrey }}>+2</Text>
                                            }
                                        </TouchableOpacity>
                                        <Text numberOfLines={2} style={{ flex: 1, marginTop: 8, fontFamily: 'Poppins-Regular', fontSize: hp(1.3), color: Colors.LightGrey }}>{item.label}</Text>
                                    </View>
                                )
                            }}
                            contentContainerStyle={{ height: 110, }}
                        />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: 'center', alignSelf: 'center', marginVertical: 5 }}>
                        <Image source={Images.SP2} style={{ width: wp('87%'), height: 125, resizeMode: 'cover', borderRadius: 11 }} />
                        <LinearGradient colors={['transparent', Colors.MidBlack,]} style={{ width: wp('87%'), height: 125, position: "absolute", borderRadius: 10 }} />

                        <View style={{ position: 'absolute', bottom: 10, left: 20 }}>
                            <Text style={{ color: Colors.White, fontFamily: 'Poppins-SemiBold', fontSize: hp(2.4) }}>Flat 20% Off</Text>
                            <Text style={{ color: Colors.White, fontFamily: 'Poppins-Regular', fontSize: hp(1.4) }}>On booking</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Services')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('88%'), marginVertical: 10, paddingHorizontal: 5 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: hp(3.8), color: Colors.Black }}>Top Vendors</Text>
                        <Text>View All</Text>
                    </TouchableOpacity>
                    <View style={{ marginVertical: 5 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={vendorCategory}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Services')}
                                        style={{
                                            marginHorizontal: 10,
                                            shadowColor: Colors.Grey, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10
                                        }}>
                                        <Image source={item.icon} style={{ width: wp('55%'), height: 90, resizeMode: 'cover', borderRadius: 10 }} />
                                        <LinearGradient colors={['transparent', Colors.MidBlack,]} style={{ width: wp('55%'), height: 90, position: "absolute", borderRadius: 10 }} />
                                        <View style={{ position: 'absolute', bottom: 12, left: 15, alignItems: 'flex-start' }}>
                                            <Text style={{ color: Colors.White, fontFamily: 'Poppins-SemiBold', fontSize: hp(2.1), marginBottom: -5 }}>{item.label}</Text>
                                            <View style={{ marginLeft: -5 }}>
                                                <StarReview
                                                    display={3.67}
                                                    spacing={5}
                                                    count={5}
                                                    starSize={10}
                                                    fullStar={<Icon size={15} name={'star'} color={Colors.Star} style={[styles.myStarStyle]} />}
                                                    emptyStar={<Icon size={15} name={'star-outline'} color={Colors.Star} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                                    halfStar={<Icon size={15} name={'star-half'} color={Colors.Star} style={[styles.myStarStyle]} />} />
                                            </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', top: 10, right: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.White, width: 20, height: 20, borderRadius: 50 }}>
                                            <Image source={Icons.Favourite} style={{ width: 12, height: 12, tintColor: Colors.Black, resizeMode: 'contain' }} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
            <Filter />
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: hp('115%'),
        backgroundColor: Colors.DarkBlue,
        resizeMode: 'contain',
    },
    sectionOne: {
        flex: .60,
        paddingHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    sc1Item1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sc1Item2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sc1ItemText: {
        marginStart: 15,
        fontFamily: 'Poppins-SemiBold',
        fontSize: hp(3),
        color: Colors.White,
    },
    inputView: {
        width: wp('72%'),
        backgroundColor: Colors.White,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: Colors.White, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10

    },
    inputField: {
        width: wp('70%'),
        height: 50,
        fontFamily: 'Poppins-Regular',
        fontSize: hp(2.4),
        color: Colors.MidGrey
    },
    filterView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.White,
        width: 50,
        height: 50,
        borderRadius: 8,
        shadowColor: Colors.White, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, shadowOpacity: 0.3, elevation: 10
    },
    sectionTwo: {
        flex: 1.8,
        backgroundColor: Colors.Snow,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20,
        // justifyContent: 'space-between',
    },
    scTTextView: {
        marginTop: 5,
    },
    scTText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: hp(2.5),
        color: Colors.Black,
    },
    categoryListView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 68,
        height: 67,
        borderRadius: 8,
        backgroundColor: Colors.White,
        margin: 10,
    },
    categoryListText: {
        fontFamily: 'Poppins-Regular',
        fontSize: hp(1.3),
        width: 80,
        left: 15
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
})
