import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { LogBox, Platform } from 'react-native';
import AppContent from './Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

export default function App(props) {
    LogBox.ignoreLogs([
        'V: Calling `getNode()`',
        'Animated: `useNativeDriver`',
        'FlatList: Calling `getNode()`',
        'source.uri should not be an empty string',
        "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
        "Authentication could not start because Touch ID has no enrolled fingers.",
        "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
        "Found screens with the same name nested inside one another."
    ]);
    return (
        <PaperProvider>
            <AppContent />
            <Toast />
        </PaperProvider>
    );
};

