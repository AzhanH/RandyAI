import {
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
  ImageURISource,
  TextInputProps,
  ImageSourcePropType,
  TouchableOpacityProps,
  ScrollViewProps,
} from 'react-native';
// import authReducer from '../redux/slices/auth';
// import loaderReducer from '../redux/slices/loader';

export interface AnimatedCheckboxProps {
  label?: string | React.ReactElement;
  checked?: boolean;
  touchableLabel?: boolean;
  size?: number;
  checkPosition?: 'left' | 'right';
  checkedBackgroundColor?: string;
  unCheckedBackgroundColor?: string;
  unCheckedBorderColor?: string;
  checkedBorderColor?: string;
  borderWidth?: number;
  rippleEffect?: boolean;
  rippleColor?: string;
  rounded?: boolean;
  checkBoxRadius?: number;
  checkMarkSize?: number;
  checkMarkColor?: string;
  animationType?: 'scale' | 'left' | 'reveal';
  onValueChange: (checked: boolean) => void;
  labelStyle?: TextStyle;
  checkStyle?: TextStyle;
  containerStyle?: ViewStyle;
  checkboxContainerStyle?: ViewStyle;
  labelContainerStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  customMarker?: React.ReactElement;
}
export interface CustomSwitchI {
  switchVal: boolean;
  setSwitchVal: (value: boolean) => void;
}

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  btnStyle?: object;
  titleColor?: string;
  titleStyle?: object;
  disabled?: boolean;
  icon?: number;
  gradient?: boolean;
  rightIcon?: ImageSourcePropType;
  rightIconStyles?: ImageStyle;
  txtColor?: string;
  txtSize?: number;
  backgroundColor?: string;
  subTitle?: string;
  subTitleTxtSize?: number;
  subTitleTxtColor?: string;
  iconStyle?: ImageStyle;
  titleTxtWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  titleFontFamily?: 'Gilroy';
}

export interface ICustomScrolllView {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  horizontal?: boolean;
  isMarginTop?: boolean;
  scroll?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  showBackground?: boolean;
  backgroundImage?: ImageSourcePropType;
}

export interface CustomTextInputProps extends TextInputProps {
  icon?: ImageSourcePropType;
  label?: string;
  multiline?: boolean;
  passwordField?: boolean;
  containerStyle?: ViewStyle;
  inputFieldStyle?: ViewStyle;
  rightIconColor?: string;
  rightIconSize?: number;
  rightIcon?: ImageSourcePropType;
  onPressIn?: () => void;
  errors?: string;
  focus?: boolean;
  required?: boolean;
}

export interface IHeadingComp {
  title: string;
  subTitle?: string;
  layout?: 'first' | 'second';
  containerStyle?: StyleProp<ViewStyle>;
  subTitleStyle?: TextStyle | undefined;
  subTitleTxtSize?: number;
  titleTxtSize?: number;
  titleTxtColor?: string;
  subTitleTxtColor?: string;
  titletxtWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  subTitleTxtWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  highlitedText?: string;
  fontfamily?: 'Gilroy';
}

export interface IGradientTxt {
  txt: string;
  fontSize?: number;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  fontfamily?: 'Gilroy';
}

export interface IiconButton {
  icon: ImageSourcePropType;
  size?: number;
  onPress?: () => void;
  tintColor?: string;
  iconStyle: StyleProp<ImageStyle>;
}
export interface IPhoneTextInput extends CustomTextInputProps {
  icon?: ImageSourcePropType;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export interface INotificationCard {
  item: {
    icon: ImageSourcePropType;
    title: string;
  };
  lastItem: boolean;
}
export interface ISearchBar {
  onPress?: () => void;
  onPressFilter?: () => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
}

export interface UploadedImageProps {
  isVideo?: boolean;
  image?: ImageSourcePropType;
  showCrossIcon?: boolean;
}

// export interface RootState {
//   loader: ReturnType<typeof loaderReducer>;
//   auth: ReturnType<typeof authReducer>;
// }

export interface BackButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  icon?: ImageSourcePropType;
  iconSize?: number;
  imgStyle?: ImageStyle;
}

export interface HorizontalTabsProps {
  tabs: string[];
  onPressTab?: (tab: string) => void;
}

export interface IStatusRenderItem {
  item: {
    name: string;
    status: ImageSourcePropType;
    user: ImageSourcePropType;
  };
}

export interface CustomTabsProps {
  selectedTab: number;
  titleSize?: number;
  onChangeTab: (index: number) => void;
  tabStyle?: object;
  containerStyle?: object;
  navigationState?: {
    routes: Array<{title: string}>;
  };
}

export interface MessageCardProps {
  item: {
    title: string;
    message: string;
    image: ImageSourcePropType;
    messageCount?: number | undefined;
    reel?: boolean;
  };
}
