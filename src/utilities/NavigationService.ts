import React from 'react';
import {
  DrawerActions,
  StackActions,
  NavigationContainerRef,
} from '@react-navigation/native';

type RootStackParamList = {
  [key: string]: object | undefined;
};

const navigatorRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

const navigate = (routeName: string, params: object = {}): void => {
  navigatorRef.current?.navigate(routeName, params);
};

const push = (routeName: string, params: object = {}): void => {
  navigatorRef.current?.dispatch(StackActions.push(routeName, params));
};

const pop = (count: number = 1): void => {
  navigatorRef.current?.dispatch(StackActions.pop(count));
};

const popToTop = (): void => {
  navigatorRef.current?.dispatch(StackActions.popToTop());
};

const reset = (stackName: string = 'AuthStack'): void => {
  navigatorRef.current?.reset({
    index: 0,
    routes: [{name: stackName}],
  });
};

// const openDrawer = (): void => {
//   navigatorRef.current?.dispatch(DrawerActions.openDrawer());
// };

// const closeDrawer = (): void => {
//   navigatorRef.current?.dispatch(DrawerActions.closeDrawer());
// };

// const toggleDrawer = (): void => {
//   navigatorRef.current?.dispatch(DrawerActions.toggleDrawer());
// };

export {
  navigatorRef,
  navigate,
  push,
  pop,
  // openDrawer,
  // closeDrawer,
  // toggleDrawer,
  popToTop,
  reset,
};
