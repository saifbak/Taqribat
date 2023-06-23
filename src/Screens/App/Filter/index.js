import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, Platform, ScrollView, ImageBackground, FlatList } from 'react-native';
import { Images } from '../../../Assets/images';
import { Colors, Font1, Font2, Font4 } from '../../../Utils';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { RadioButton } from 'react-native-paper';
const theme = {
    roundness: 2,
    colors: {
        primary: Colors.Blue,
        accent: Colors.DarkBlue,
    },
};

const Filter = ({ navigation}) => {
    const [calenderDate, setCalenderDate] = useState('')
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [guestCounts, setGuestCounts] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [checked, setChecked] = useState('');

    const [events, setevents] = useState([
        { title: 'Wedding' },
        { title: 'Birthday' },
        { title: 'Cooperative' },
        { title: 'Cooperative' },
        { title: 'Cooperative' },
    ])
    const { container } = styles;
    const handleDate = () => {
        setOpen(true);
    };
    return (
        <>
            <View style={container}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
                <View>
                    <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", padding: 20, backgroundColor: Colors.Snow, height: hp(15), }}>
                        <Icon name={'arrow-back-ios'} color={Colors.LightGrey} size={30} onPress={() => navigation.goBack()} />
                        <Text style={{ fontFamily: Font4, fontSize: hp(3), color: Colors.Black }}>Filter</Text>
                        <View style={{ width: 20 }}></View>
                    </View>
                </View>
                <ScrollView >
                    <View style={{ paddingHorizontal: 10, flexDirection: 'column', flex: 1, }}>
                        <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.Black, marginStart: 5 }}>Event Type</Text>
                        <FlatList
                            data={events}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={{ marginTop: 10, width: 110, marginHorizontal: 5, height: hp(4.3), backgroundColor: Colors.White, borderColor: Colors.Blue, borderWidth: 2.5, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                        <Text style={{ fontFamily: Font2, fontSize: hp(1.8), color: Colors.Blue, marginStart: 5 }}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 10, flexDirection: 'column', flex: 1, }}>
                        <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.Black, marginStart: 5, marginBottom: 10, }}>Event Date</Text>
                        <TouchableOpacity onPress={() => handleDate()} style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", width: wp('90%'), alignSelf: 'center', height: 50, paddingHorizontal: 15, backgroundColor: Colors.White, marginTop: 5, marginBottom: 5, borderRadius: 8, elevation: 10, shadowRadius: 10, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowColor: Colors.LightGrey, }}>
                            <Text style={{ fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }}>{dateOfBirth != '' ? moment(dateOfBirth).format('MM-DD-YYYY') : 'Select Date'}</Text>
                            {/* <TextInput editable={false} value={calenderDate} style={{ flex: 1, fontSize: hp(2), fontFamily: 'Poppins-Regular', color: Colors.LightGrey }} placeholder="Select Date" placeholderTextColor={Colors.MidGrey} /> */}
                            <Icon name={'calendar'} type="ionicon" color={Colors.Blue} />
                        </TouchableOpacity>
                        {/* <FlatList
                            data={events}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={{ marginTop: 10, width: 110, marginHorizontal: 5, height: hp(4.3), backgroundColor: Colors.White, borderColor: Colors.Blue, borderWidth: 2.5, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                        <Text style={{ fontFamily: Font2, fontSize: hp(1.8), color: Colors.Blue, marginStart: 5 }}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        /> */}
                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'column', flex: 1, }}>
                        <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.Black, marginStart: 5 }}>Budget</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10, marginTop: 5, }}>
                            <Text style={{ fontSize: hp(2), fontFamily: Font2, color: Colors.LightGrey }}>5 Lac</Text>
                            <Text style={{ fontSize: hp(2), fontFamily: Font2, color: Colors.LightGrey }}>1 Cr</Text>
                        </View>
                        <Slider
                            style={{ width: wp('95%'), height: 50, }}
                            minimumValue={5}
                            maximumValue={100}
                            minimumTrackTintColor={Colors.LightBlue}
                            maximumTrackTintColor={Colors.LightGrey}
                            thumbTintColor={Colors.Blue}
                            // onValueChange={(e) => setCustomTipValue(e.toFixed(0))}
                            onSlidingComplete={(e) => {
                                // setTip(e)
                                // if (e == 0) {
                                //     setValue4(0)
                                // }
                                // else {
                                //     setValue4(e)
                                // }
                            }}
                        />

                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'column', flex: 1, }}>
                        <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.Black, marginStart: 5 }}>Services</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'flex-start' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", flex: 1, }}>
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
                                <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Venues'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", flex: 1, }}>
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
                                <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Decorations/Flower'}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'flex-start' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", flex: 1, }}>
                                <RadioButton.Android
                                    theme={theme}
                                    uncheckedColor={Colors.MidBlack}
                                    color={Colors.Blue}
                                    value="first"
                                    status={checked === "third" ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked("third") }}
                                    // size={10}
                                    style={{ width: 5, height: 5, }}
                                />
                                <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Caters'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", flex: 1, }}>
                                <RadioButton.Android
                                    theme={theme}
                                    uncheckedColor={Colors.MidBlack}
                                    color={Colors.Blue}
                                    value="first"
                                    status={checked === "fourth" ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked("fourth") }}
                                    // size={10}
                                    style={{ width: 5, height: 5, }}
                                />
                                <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Transport'}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'flex-start' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                                <RadioButton.Android
                                    theme={theme}
                                    uncheckedColor={Colors.MidBlack}
                                    color={Colors.Blue}
                                    value="first"
                                    status={checked === "fifth" ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked("fifth") }}
                                    // size={10}
                                    style={{ width: 5, height: 5, }}
                                />
                                <Text style={{ fontFamily: Font1, fontSize: hp(1.6), color: Colors.Black }}>{'Photographers'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'column', }}>
                        <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.Black, marginStart: 5 }}>No. of Guest</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'white', marginTop: 10, alignSelf: 'center', width: wp('90%'), height: hp(5.5), borderRadius: 8, borderColor: Colors.LightGrey,
                                shadowOffset: { width: 0, height: 8 },
                                shadowColor: Colors.Grey,
                                shadowOpacity: 0.3,
                                shadowRadius: 10,
                                elevation: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: "space-between",
                                paddingHorizontal: 10,
                                borderWidth: .5, borderColor: Colors.LightGrey,
                            }}
                            onPress={() => setIsOpen(!isOpen)}
                        >
                            {/* <Text style={{
                                color: Colors.Grey,
                                fontSize: hp(1.6),
                                fontFamily: 'Lato-Regular',
                            }}>{isRecipientSelected !== '' ? isRecipientSelected : 'Recipient'}</Text> */}
                            <Icon name="angle-down" type="font-awesome" size={24} color={Colors.Grey} style={{ marginEnd: 1 }} />
                        </TouchableOpacity>
                        {isOpen && <View
                            style={{
                                backgroundColor: 'white', marginTop: 10, alignSelf: 'center', width: wp('90%'), height: hp(27), borderRadius: 8, borderColor: Colors.LightGrey,
                                shadowOffset: { width: 0, height: 8 },
                                shadowColor: Colors.Grey,
                                shadowOpacity: 0.3,
                                shadowRadius: 10,
                                elevation: 10,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: "space-between",
                                paddingHorizontal: 10,
                                position: 'absolute',
                                zIndex: 2,
                                top: 50,
                                borderWidth: .5, borderColor: Colors.LightestGrey,
                            }}
                        >
                            {/* <View style={{
                                backgroundColor: Colors.White, marginTop: 10, alignSelf: 'center', width: wp('85%'), height: hp(5), borderRadius: 8, borderColor: Colors.LightGrey,
                                alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, borderWidth: 1, borderColor: Colors.LightBlue
                            }}>
                                <TextInput placeholder="Search..." placeholderTextColor={Colors.Grey} placeholderStyle={{
                                    color: Colors.Grey,
                                    fontFamily: 'Lato-Regular',
                                    fontSize: hp(1),
                                }} style={{ color: Colors.Grey, width: wp('80%'), height: hp(4.5) }}
                                    onChangeText={text => handleSearch(text)}
                                    value={query}
                                />
                            </View> */}
                            {/* {
                                isRecipientSelected !== '' && <View
                                    style={{
                                        padding: 10, width: wp('85%'), alignItems: 'center', justifyContent: "space-between", flexDirection: 'row',
                                        borderBottomWidth: 1, borderBottomColor: Colors.Blue
                                    }}>
                                    <Text style={{
                                        color: Colors.Black,
                                        fontSize: hp(1.6),
                                        fontFamily: 'Lato-Regular',
                                    }}>{isRecipientSelected}</Text>
                                    <Icon onPress={() => setIsRecipientSelected('')} name="close" size={20} color={Colors.Grey} style={{ marginEnd: 1 }} />
                                </View>
                            } */}
                            {guestCounts.length > 0
                                ?
                                <FlatList
                                    contentContainerStyle={{ marginTop: 5, padding: 10, }}
                                    horizontal={false}
                                    data={guestCounts}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={async () => {
                                                    setIsOpen(false);
                                                    // setIsRecipientSelected(item?.user_info.name)
                                                    // setValue1(item?.user_info.id);
                                                    // await getWishlist(item?.user_info.id);
                                                    // setTotalPrice('');
                                                    // setgftPrice('');
                                                    // setSelectedWishValue('')
                                                    // setItemId('');
                                                    // setItemPicture('');
                                                }} style={{ width: wp('78%'), marginVertical: 10, alignSelf: 'center' }}>
                                                <Text
                                                    style={{
                                                        color: Colors.Grey,
                                                        fontSize: hp(1.7),
                                                        fontFamily: 'Lato-Regular',
                                                    }}
                                                >{item?.user_info.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                                : <View style={{ top: -130, alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: Colors.Grey, fontSize: hp(1.8), fontFamily: 'Lato-Regular', }}>{'No guest Yet'}.</Text>
                                </View>

                            }
                        </View>}

                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'column', flex: 1, }}>
                        {/* <Text style={{ fontFamily: Font2, fontSize: hp(2), color: Colors.Black, marginStart: 5 }}>Budget</Text> */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", paddingHorizontal: 10, marginTop: 5, }}>
                            <TouchableOpacity onPress={()=> navigation.goBack()} style={{width:150, height:hp(5.5),backgroundColor:'white', borderWidth:1, borderColor:Colors.Blue, borderRadius: 8, alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{ fontSize: hp(2), fontFamily: Font2, color: Colors.Blue }}>Reset Filter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.goBack()} style={{width:150, height:hp(5.5),backgroundColor:Colors.Blue, borderWidth:1, borderColor:Colors.Blue, borderRadius: 8, alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{ fontSize: hp(2), fontFamily: Font2, color: Colors.White }}>Apply Filter</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* <Text style={{fontFamily:Font2, fontSize:hp(2), color: Colors.Black, marginStart:5}}>Event Type</Text> */}

                    {/* <View style={{flexDirection: 'column'}}>
                        <Text style={{fontFamily:Font2, fontSize:hp(2), color: Colors.Black, marginStart:5}}>Event Type</Text>
                        <FlatList
                            data={events}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={{ marginTop: 10, width: 110, marginHorizontal: 5, height: hp(4.3), backgroundColor: Colors.White, borderColor: Colors.Blue, borderWidth: 2.5, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                        <Text style={{fontFamily:Font2, fontSize:hp(1.8), color: Colors.Blue, marginStart:5}}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View> */}
                </ScrollView>
            </View>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setDateOfBirth(date)
                    // setDateOfBirth(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />

        </>
    )
}

export default Filter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Snow,
    }
})