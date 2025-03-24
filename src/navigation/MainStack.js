import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {headerLeftTitle} from './NavigationOptions';
import {colors, screens} from '../utilities';
// import {BackButton} from '../components';
import {
  ForgotPassword,
  Login,
  OtpVerification,
  ResetPassword,
  Signup,
} from '../screens';

const Stack = createNativeStackNavigator();

const screenOptions = {
  statusBarStyle: 'light',
  statusBarBackgroundColor: colors.primary2,
  animation: 'slide_from_right',
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary2,
    shadowColor: colors.transparent,
  },
  // headerLeft: () => <BackButton />,
};

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={screens.Login}>
      <Stack.Screen
        name={screens.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.signup}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.forgotPass}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.otpVerification}
        component={OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screens.resetPass}
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
