import React from 'react';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';


import AsyncStorage from '@react-native-async-storage/async-storage';

export const Services = {
    Login: async (email, password, setLoading, navigation, isSelected) => {
        setLoading(true);
        try {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((res) => {
                    setLoading(false);
                    // console.log('SUCCESS==>', res.user.uid);
                    if (isSelected == true) {
                        AsyncStorage.setItem('@user',JSON.stringify(res.user));
                    }
                    Toast.show({
                        type: 'success',
                        text1: "Success",
                        text2: `Login Successfully`,
                        autoHide: true,
                        position: 'top',
                        visibilityTime: 2000,
                        onHide: () => {
                            // navigation.navigate('Tabs');
                            AsyncStorage.setItem('@user',JSON.stringify(res.user));
                        }
                    });
                    // console.log('Success', res)
                })
                .catch(error => {
                    setLoading(false);
                    Toast.show({
                        type: 'error',
                        text1: "Attention",
                        text2: `${error.code === 'auth/email-already-in-use' ? 'That email address is already in use!' : error.code === 'auth/user-not-found' ? 'User not exist! Please register.' : error}`,
                        autoHide: true,
                        position: 'top',
                        visibilityTime: 2000,
                    });
                    // console.error('Error', error);
                });
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: "Attention",
                text2: `${error}`,
                autoHide: true,
                position: 'top',
                visibilityTime: 2000,
            });
            // console.error('Error===>', error);
        }
    },
    SignUp: async (email, password, setLoading, navigation, handleUnsub) => {
        setLoading(true);
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                setLoading(false);
                console.log('SignUp res===>', res);
                Toast.show({
                    type: 'success',
                    text1: "Success",
                    text2: `Your account has been registered successfully`,
                    autoHide: true,
                    position: 'top',
                    visibilityTime: 2000,
                    onHide: () => {
                        navigation.navigate('Login');
                        handleUnsub();
                    }
                });
            })
            .catch(error => {
                setLoading(false)
                Toast.show({
                    type: 'error',
                    text1: "Attention",
                    text2: `${error.code === 'auth/email-already-in-use' ? 'That email address is already in use!' : error.code === 'auth/user-not-found' ? 'User not exist! Please register.' : error}`,
                    autoHide: true,
                    position: 'top',
                    visibilityTime: 2000,
                });
                console.error(error);
            });
    },
}