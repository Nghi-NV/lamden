/**
 * Created by nghinv on Wed Nov 02 2022
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigation from './navigation/AppNavigation';
import { store } from './redux/store';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
