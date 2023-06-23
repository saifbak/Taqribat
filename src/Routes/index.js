import 'react-native-gesture-handler'
import React, { useState, useEffect, useMemo, useContext, useCallback } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Platform, ScrollView, } from 'react-native';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens----------------------------------------------------------------
import Login from '../Screens/Auth/Login';
// import Signup from '../Screens/Auth/Signup';
import { AuthContext } from '../Context';
import Signup from '../Screens/Auth/Signup';
import Splash from '../Screens/Splash';
import Onboard from '../Screens/Onboard';
import WelcomeScreen from '../Screens/Auth/Welcome';
import Home from '../Screens/App/Home';
import BottomTabs from './BottomTab';
import TypeScreen from '../Screens/Auth/Type';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import NewPassword from '../Screens/Auth/NewPassword';
import ConfirmBooking from '../Screens/App/ConfirmBooking';
import Services from '../Screens/App/Services';
import Details from '../Screens/App/Details';
import BookingDetails from '../Screens/App/BookingDetails';
import Payment from '../Screens/App/Payment';
import ConfirmLogout from '../Screens/App/ConfirmLogout';
import Booking from '../Screens/App/Booking';
import EditProfile from '../Screens/App/EditProfile';
import Help from '../Screens/App/Help';
import AboutUs from '../Screens/App/Aboutus';
import FAQ from '../Screens/App/FAQ';
import PrivacyPolicy from '../Screens/App/PrivacyPolicy';
import Messenger from '../Screens/App/Messenger';
import Filter from '../Screens/App/Filter';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Images } from '../Assets/images';
import { Icons } from '../Assets/Icons';
import { Colors } from '../Utils';
import ToggleSwitch from 'toggle-switch-react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';



const CustomDrawerItems = ({ label, apiToken, type, icon, route, logout, navigation, alert, wallet, share }) => {
    const { signOut } = useContext(AuthContext);
    return (
        <TouchableOpacity style={styles.drawerItemsView} onPress={() => logout ? signOut() : navigation.navigate(route)} >
            {/* <Image source={icon} style={styles.drawerItemsImage} /> */}
            <Text style={[styles.drawerItemsTextStyle, { fontSize: wallet ? hp(2.4) : hp(2.4), }]}>
                {label}
            </Text>
        </TouchableOpacity >
    );
};

const DrawerContent = ({ navigation, setProgress }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    AsyncStorage.getItem('@user').then((item) => {
        let res = JSON.parse(item);
        // setUsername(res !== null ? res[0]?.name : '')
        // setEmail(res !== null ? res[0]?.email : '')
    })

    const [isOn, setIsOn] = useState(false);
    return (
        <DrawerContentScrollView
            scrolable={true}
            contentContainerStyle={{ flex: 1, }}
        >
            <View style={styles.drawerContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.Blue, Colors.DarkBlue]} style={styles.drawerLinearGradient} >
                    <View style={styles.linearItems}>
                        <View style={styles.linearItemsView}>
                            <Image source={Icons.Profile} style={styles.linearImageStyle} />
                        </View>
                        <View style={styles.userInfoView}>
                            <View style={styles.userInfoContent}>
                                <Text style={styles.userInfoNameStyle}>{'username'}</Text>
                                <Text style={styles.userInfoEmailStyle}>{'email'}</Text>
                            </View>
                        </View>
                        <View style={styles.itemsView}>
                            <Icon name="moon-outline" type="ionicon" size={18} />
                            <ToggleSwitch
                                isOn={isOn}
                                onColor="grey"
                                offColor="orange"
                                labelStyle={{ color: "black", fontWeight: "900" }}
                                size="small"
                                onToggle={isOn => setIsOn(isOn)}
                            />
                            <Icon name="sun" type="feather" size={18} />
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.itemsContent} >
                            {/* <CustomDrawerItems label="Home" icon={Icons.HomeIcon} type="ionicon" navigation={navigation} route="Dashboard" />
                            <CustomDrawerItems label="My Profile" icon={Icons.MyProfileIcon} type="ionicon" navigation={navigation} route="Details" />
                            <CustomDrawerItems label="Categories" icon={Icons.CategoryIcon} type="ionicon" navigation={navigation} route="Service" />
                            <CustomDrawerItems label="Favourites" icon={Icons.FavIcon} type="ionicon" navigation={navigation} route="Favourite" />
                            <CustomDrawerItems label="Booking" icon={Icons.BookingIcon} type="ionicon" navigation={navigation} route="Order" />
                            <CustomDrawerItems label="Notifications" icon={Icons.BellIcon} type="ionicon" navigation={navigation} route="Notifications" />
                            <CustomDrawerItems label="About Us" icon={Icons.AboutIcon} type="ionicon" navigation={navigation} route="About" />
                            <CustomDrawerItems label="Settings" icon={Icons.SettingsIcon} type="ionicon" navigation={navigation} route="Settings" />
                            <CustomDrawerItems label="Addresses" icon={Icons.AdressIcon} type="ionicon" navigation={navigation} route="Addresses" />
                            <CustomDrawerItems label="FAQ's" icon={Icons.FAQIcon} type="ionicon" navigation={navigation} route="FAQs" />
                            <CustomDrawerItems label={`Help`} icon={Icons.HelpIcon} type="ionicon" navigation={navigation} route="Help" /> */}
                            {/* <CustomDrawerItems label="Logout" icon={Icons.LogoutIcon} type="material" navigation={navigation} route="Login" logout /> */}
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        </DrawerContentScrollView>
    )
};

// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => {
//     // let flag = true;
//     return (
//         <Drawer.Navigator
//             drawerContent={() => {
//                 return <DrawerContent />
//             }}
//             screenOptions={{
//                 headerShown: false,
//                 drawerStyle: {
//                     backgroundColor: 'transparent',
//                     width: wp('90%'),
//                 },
//                 drawerType: 'front',
//                 overlayColor: 0,
//             }}>
//             {/* <Drawer.Screen name="Dashboard" >
//                 {/* {props => <BottomTabs {...props} />} */}
//             {/* </Drawer.Screen> */} 
//         </Drawer.Navigator >
//     )
// };

// Auth Stack ------------------------------
const AppStack = createStackNavigator();
const AppStackScreens = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>

        {/* <AuthStack.Screen initial={true} name="TypeScreen" component={TypeScreen} /> */}
        <AppStack.Screen initial={true} name="Tabs" component={BottomTabs} />
        <AppStack.Screen name="Filter" component={Filter} />
        <AppStack.Screen name="EditProfile" component={EditProfile} />
        <AppStack.Screen name="Services" component={Services} />
        <AppStack.Screen name="Details" component={Details} />
        <AppStack.Screen name="Payment" component={Payment} />
        <AppStack.Screen name="ConfirmBooking" component={ConfirmBooking} />
        <AppStack.Screen name="Booking" component={Booking} />
        <AppStack.Screen name="BookingDetails" component={BookingDetails} />
        <AppStack.Screen name="Messenger" component={Messenger} />
        <AppStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <AppStack.Screen name="FAQ" component={FAQ} />
        <AppStack.Screen name="AboutUs" component={AboutUs} />
        <AppStack.Screen name="Help" component={Help} />
        <AppStack.Screen name="ConfirmLogout" component={ConfirmLogout} />
    </AppStack.Navigator>
)
const AuthStack = createStackNavigator();
const AuthStackScreens = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen initial={true} name="WelcomeScreen" component={WelcomeScreen} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
        <AuthStack.Screen name="NewPassword" component={NewPassword} />
        <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
);

// Root Stack 
const RootStack = createStackNavigator();
const RootStackScreens = ({ onboarding, access, }) => {
console.log(access)
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {
                onboarding == null ? <RootStack.Screen name="OnBoard" component={Onboard} />
                    :
                    access !== null
                        ?
                        <RootStack.Screen name="App" component={AppStackScreens} />
                        :
                        <RootStack.Screen name="Auth" component={AuthStackScreens} />
            }
        </RootStack.Navigator>
    );
};

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [onboarding, setOnboarding] = useState('');
    const [access, setAccess] = useState('');
    const authContext = useMemo(() => {
        return {
            loading: () => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            },
            signIn: (
                state,
                setLoading,
            ) => {
                Service.login(
                    state,
                    setLoading,
                    addUserData,
                    setAccessToken,
                );
            },
            signUp: async (data, setLoading, navigation,) => {
                await Service.signup(
                    data,
                    setLoading,
                    navigation,
                    // addSignupData
                );
            },
            OTP: async (data, navigation, setloading, updateSignupData) => {
                Service.OTP(
                    data,
                    navigation,
                    setloading,
                    updateSignupData,
                );
            },
            completeProfile: async (data, device_token, apiToken, navigation, setloading, adduserData,) => {
                Service.CompleteProfile(
                    data,
                    device_token,
                    apiToken,
                    navigation,
                    setloading,
                    adduserData,
                    setAccessToken
                );
            },
            updateProfile: async (data, apiToken, navigation, adduserData, setloading,) => {
                Service.UpdateProfile(
                    data,
                    apiToken,
                    navigation,
                    adduserData,
                    setloading,
                );
            },
            forgotPassword: async (data, setloading) => {
                Service.ForgotPassword(data, setloading,);
            },
            signOut: async () => {
                setIsLoading(false);
                clearUserDetails();
                setAccessToken('');
                await AsyncStorage.setItem('@accessToken', '');
                await AsyncStorage.removeItem('@user');
            },
            deleteAccount: (apiToken) => {
                Service.DeleteAccount(apiToken);
                setIsLoading(false);
                clearSignUpData();
                clearUserDetails();
                setAccessToken(null);
                AsyncStorage.setItem('@accessToken', '');
                AsyncStorage.removeItem('@user');
            },
            onboard: () => {
                setOnboarding('true');
                AsyncStorage.setItem('@onboarding', 'asdf');
            },
        };
    }, []);

    const initializer = async () => {
        await AsyncStorage.getItem('@user').then(async (value) => {
            setIsLoading(true);
            setAccess(value);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        });
    };

    useEffect(() => {
        // AsyncStorage.clear();

        AsyncStorage.getItem('@onboarding').then((value) => {
            setIsLoading(true);
            // console.warn('value onboarding', value);
            setOnboarding(value);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        });
        initializer();
    }, []);

    if (isLoading) {
        return <Splash />;
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer style={{ backgroundColor: 'white' }}>
                <RootStackScreens onboarding={onboarding} access={access} />
            </NavigationContainer>
        </AuthContext.Provider>

    );
};



const styles = StyleSheet.create({
    drawerItemsView: {
        flexDirection: 'row',
        height: 40,
        marginBottom: 8,
        alignItems: 'center',
        paddingLeft: 12,
        borderRadius: 8,
    },
    drawerItemsImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: '#333'
    },
    drawerItemsTextStyle: {
        marginLeft: 15,
        color: Colors.MidBlack,
        fontWeight: 'bold'
    },
    drawerContainer: {
        flex: 1,
        borderTopRightRadius: 25,
    },
    drawerLinearGradient: {
        flex: 1,
        backgroundColor: Colors.Grey,
        padding: 15,
        borderTopRightRadius: 25,
    },
    linearItems: {
        flexDirection: 'row',
        marginTop: Platform.OS == 'ios' ? 5 : 14,
    },
    linearItemsView: {
        width: 110,
        height: 110,
        borderRadius: 200 / 2,
        borderWidth: 2,
        borderColor: Colors.Blue,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.Grey,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    linearImageStyle: {
        width: 110,
        height: 110,
        borderRadius: 200 / 2,
        resizeMode: 'cover'
    },
    userInfoView: {
        marginLeft: 12,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: wp('52%'),
        alignSelf: 'center',
    },
    userInfoContent: {
        flex: .6,
        flexDirection: 'column',
        justifyContent: "space-evenly",
    },
    userInfoNameStyle: {
        color: Colors.Black,
        fontSize: hp(2.4),
        fontWeight: 'bold'
    },
    userInfoEmailStyle: {
        color: Colors.Black,
        fontSize: hp(2),
        fontWeight: 'normal'
    },
    itemsView: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: "absolute",
        right: -5,
        top: -5
    },
    itemsContent: {
        flex: 1,
        marginTop: 24,
    },
})
