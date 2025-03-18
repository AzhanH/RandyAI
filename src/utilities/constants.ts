import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {heightPixel} from './helpers';

export const deviceType = Platform.OS;
export const StatusBarHeight = StatusBar.currentHeight;
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const colors = {
  primary: '#F92323',
  primary2: '#000818',
  secondary: '#0C101F',
  iconBackground: '#F96A57',
  inputColor: '#2D2E3B',
  tabTextColor: '#404866',

  logoutColor: '#FF8989',
  backgroundColor: '#FCFCFC',
  txtColor: '#797979',
  white: '#ffffff',
  whitish: '#f2f2f2',
  halfWhite: '#f5f5f5',
  cardColor: '#f6f6f6',
  socialbtnColor: '#F3F3F3',
  black: '#000000',
  blackShade: '#1D1F34',
  gray: '#565656',
  gray5D: '#5D5D5D',
  greishBg: '#EBEBEB',
  iconGrey: '#AAAAAA',
  whiteSmoke: 'rgba(239, 239, 239, 0.3)',
  greish: '#929292',
  borderGrey: '#E8E8E8',
  textGrey: '#71717A',
  label: '#B2B2B2',
  danger: '#FF5757',
  success: '#3AAA1E',
  transparent: 'transparent',
  tabBarBackground: '#93939373',
  fbColor: '#3C5A8D',
  highlightedTxt: '#E33319',
  lightGray: '#F1F1F1',
  scanIcon: '#C0C0C0',
  bottomTab: '#EAEAEA',
  darkCharcoal: '#323232',
  darkGrey: '#D9D9D9',
  yellowColor: '#FCB614',
  yellowMedium: '#FFC41F',
  yellowDark: '#FEA613',
  dialColor: '#473E3D40',
  greenColor: '#298342',
  pointsColor: '#22066C',
  darkGreen: '#2D6853',
  onlineColor: '#29FF06',
  acceptBtnColor: '#00B851',
  lightBlue: '#04D1FE',
  inviteColor: '#00B851',
  borderColor: '#494C61',
};

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginTop: {
    marginTop: deviceType == 'ios' ? heightPixel(10) : 0,
  },
  bottombtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // paddingHorizontal: 20,
    paddingBottom: deviceType == 'ios' ? heightPixel(30) : heightPixel(20),
  },
  lineSeparator: {
    borderTopWidth: 1,
    marginVertical: heightPixel(12),
    borderTopColor: colors.darkCharcoal,
  },
  wrapContainer: {
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: colors.greish,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export const fontFamily = {
  Gilroy: {
    regular: 'Gilroy-Regular',
    medium: 'Gilroy-Medium',
    semibold: 'Gilroy-Semibold',
    bold: 'Gilroy-Bold',
  },
  CooperHewittBold: {
    medium: 'CooperHewitt-Medium',
    semibold: 'CooperHewitt-Semibold',
    bold: 'CooperHewitt-Bold',
    light: 'CooperHewitt-Light',
  },
};

export const screens = {
  authStack: 'AuthStack',
  mainStack: 'MainStack',
  bottomTabs: 'BottomTabs',
  onBoarding: 'onBoarding',
  login: 'Login',
  signup: 'Signup',
  forgotPass: 'ForgotPassword',
  resetPass: 'ResetPassword',
  changePass: 'ChangePassword',
  otpVerification: 'OtpVerification',
  Tournaments: 'Tournaments',
  home: 'Home',
  rewards: 'Rewards',
  rewardDetail: 'RewardDetail',
  leaderboard: 'Leaderboard',
  profile: 'Profile',
  otherProfile: 'OtherProfile',
  editProfile: 'EditProfile',
  playMode: 'PlayMode',
  notifications: 'Notifications',
  privacyPolicy: 'PrivacyPolicy',
  termsAndConditions: 'Terms&Conditions',
  customerSupport: 'CustomerSupport',
  chat: 'Chat',
  messages: 'Messages',
  subscription: 'Subscription',
  manageSubscription: 'ManageSubscription',
  inviteFriend: 'InviteFriend',
  userRequest: 'UserRequest',
  createGame: 'CreateGame',
  familyMode: 'FamilyMode',
  FavouriteTournaments: 'favouriteTournaments',
  JoinedTournaments: 'JoinedTournaments',
  MultiPlayer: 'MultiPlayer',
  joinGame: 'JoinGame',
  settings: 'settings',
  completeProfile: 'completeProfile',
  FAQ: 'FAQs',
  support: 'Support',
};

export const api_urls = {
  base_url: '',
  service_token: '',

  // api's end points
  user: 'user',
  login: 'user/login',
  logout: 'user/logout',
  sociaLogin: 'user/social-login',
  forgotPassword: 'user/forgot-password',
  changePassword: 'user/change-password',
};
