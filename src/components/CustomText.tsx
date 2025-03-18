import React, {FC} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {colors, fontFamily} from '../utilities';
import {font} from '../utilities/helpers';

interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  flex?: boolean;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  underline?: boolean;
  onPress?: () => void;
  textAlignCenter?: boolean;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  fontfamily?: 'Gilroy';
}

const CustomText: FC<CustomTextProps> = ({
  fontSize = 14,
  flex,
  style,
  center,
  onPress,
  children,
  underline,
  numberOfLines,
  textAlignCenter,
  weight = 'regular',
  color = colors.black,
  fontfamily = 'Gilroy',
  ...props
}) => {
  return (
    <Text
      {...props}
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[
        {fontFamily: fontFamily[fontfamily][weight]},
        center && {alignSelf: 'center'},
        textAlignCenter && {textAlign: 'center'},
        underline && {textDecorationLine: 'underline'},
        {fontSize: font(fontSize)},
        {color},
        style,
      ]}>
      {children}
    </Text>
  );
};
export default React.memo(CustomText);
