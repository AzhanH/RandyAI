import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {icons, colors, screens, dummyImages, utility} from '../utilities';
import {Profile, Home, Settings, Chat} from '../screens';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {headerLeftTitle} from './NavigationOptions';
import {CustomText} from '../components';

const screenOptions = {
  animation: 'slide_from_right',
  headerShadowVisible: false,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary2,
    shadowColor: colors.transparent,
  },
  headerTitleAlign: 'center',
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.home}
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: colors.transparent},
        }}
      />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.chat}
        component={Chat}
        options={{...headerLeftTitle('Messages')}}
      />
    </Stack.Navigator>
  );
};

const settingsStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.settings}
        component={Settings}
        options={{...headerLeftTitle('Leaderboard')}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={screens.profile}
        component={Profile}
        options={{...headerLeftTitle('')}}
      />
    </Stack.Navigator>
  );
};

const tabs = [
  {
    label: 'Home',
    name: 'HomeScreen',
    initialRoute: screens.home,
    component: HomeStack,
    icon: icons.tabIcons.home,
    headerTitle: '',
  },
  {
    label: 'Message',
    name: 'RewardScreen',
    initialRoute: screens.chat,
    component: ChatStack,
    icon: icons.tabIcons.chat,
    headerTitle: '',
  },
  {
    label: 'Profile',
    name: 'ProfileScreen',
    initialRoute: screens.profile,
    component: ProfileStack,
    icon: icons.tabIcons.profile,
    headerTitle: '',
  },
  {
    label: 'Settings',
    name: 'LeaderboardScreen',
    initialRoute: screens.settings,
    component: settingsStack,
    icon: icons.tabIcons.settings,
    headerTitle: '',
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  // if (!focused) {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.7}
  //       onPress={onPress}
  //       style={{padding: heightPixel(6)}}>
  //       <Image
  //         resizeMode="contain"
  //         source={item.icon}
  //         style={{
  //           width: heightPixel(22),
  //           height: heightPixel(22),
  //         }}
  //       />
  //     </TouchableOpacity>
  //   );
  // }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.tabBarButton]}>
      <Image
        resizeMode="contain"
        source={item.icon}
        style={{
          marginRight: 5,
          width: heightPixel(20),
          height: heightPixel(20),
          tintColor: focused ? colors.white : colors.tabTextColor,
        }}
      />
      <CustomText
        fontSize={11}
        weight="bold"
        color={focused ? colors.white : colors.tabTextColor}
        style={styles.txtStyle}>
        {item.label}
      </CustomText>
    </TouchableOpacity>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarStyle: styles.tabBarStyle,
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
          listeners={({navigation}) => ({
            tabPress: e => {},
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    position: 'absolute',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: heightPixel(10),
    backgroundColor: colors.secondary,
    paddingTop: utility.isPlatformIOS ? heightPixel(15) : 0,
    height: utility.isPlatformIOS ? heightPixel(80) : heightPixel(70),
  },
  tabBarButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    marginTop: heightPixel(6),
  },
});
