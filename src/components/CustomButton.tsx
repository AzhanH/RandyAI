import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {appStyles, colors} from '../utilities';
import {CustomButtonProps} from '../Interfaces';

import CustomText from './CustomText';

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  btnStyle,
  titleColor,
  titleStyle,
  disabled,
  icon,
  gradient,
  rightIcon,
  rightIconStyles,
  txtColor,
  txtSize,
  backgroundColor,
  subTitle,
  subTitleTxtSize,
  subTitleTxtColor,
  iconStyle,
  titleTxtWeight,
  titleFontFamily,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        backgroundColor
          ? {backgroundColor}
          : {
              backgroundColor: disabled
                ? `${colors.primary}99`
                : colors.primary,
            },
        icon ? appStyles.flexRowBetween : undefined,
        rightIcon
          ? [appStyles.flexRowBetween, {justifyContent: 'center'}]
          : undefined,
        btnStyle,
      ]}>
      <>
        {rightIcon && (
          <Image
            resizeMode="contain"
            source={rightIcon}
            style={[
              {
                width: widthPixel(20),
                height: heightPixel(20),
                marginRight: 10,
                resizeMode: 'contain',
              },
              rightIconStyles,
            ]}
          />
        )}
        <CustomText
          style={titleStyle}
          fontSize={txtSize ?? 16}
          weight={titleTxtWeight ?? 'bold'}
          fontfamily={titleFontFamily ?? 'Gilroy'}
          color={txtColor ?? colors.white}>
          {title}
        </CustomText>

        {subTitle && (
          <CustomText
            fontSize={subTitleTxtSize ?? 16}
            weight="semibold"
            color={subTitleTxtColor ?? colors.white}>
            {subTitle}
          </CustomText>
        )}

        {icon && (
          <Image
            resizeMode="contain"
            source={icon}
            style={[{width: 14, height: 14}, iconStyle]}
          />
        )}
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPixel(48),
    marginTop: heightPixel(20),
    borderRadius: heightPixel(30),
  },
});

export default CustomButton;
