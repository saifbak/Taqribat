import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

export default function Main() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </SafeAreaProvider>

    );
};

AppRegistry.registerComponent(appName, () => Main);
