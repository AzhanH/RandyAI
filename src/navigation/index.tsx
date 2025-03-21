import React, {forwardRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const RootNavigation = forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <MainStack />
    </NavigationContainer>
  );
});

export default RootNavigation;
