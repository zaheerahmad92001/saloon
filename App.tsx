import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/screens/navigation/appStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import AppStatusBar from './src/components/appStatusbar';

const App = () => {
  return (
    <GestureHandlerRootView>
    <BottomSheetModalProvider>
      <NavigationContainer>
        <AppStatusBar/>
        <AppStack />
      </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
