/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {colors, navigatorRef} from './src/utilities';
import RootNavigation from './src/navigation';
import {StatusBar, StyleSheet} from 'react-native';
// import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  // useEffect(() => {
  //   BootSplash.hide({
  //     fade: true,
  //   });
  // }, []);
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'red'}}>
      {/* <StatusBar backgroundColor={colors.primary2} translucent={true} /> */}
      <RootNavigation ref={navigatorRef} />

      {/* <FlashMessage position="top" floating={true} /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
