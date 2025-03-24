import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  Animated,
  TextInput,
  StyleSheet,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import CustomText from './CustomText';
import {CustomTextInputProps} from '../Interfaces';
import {appShadow, font, heightPixel, widthPixel} from '../utilities/helpers';
import {colors, fontFamily, utility} from '../utilities';
import {icons} from '../assets';

const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  (props, ref) => {
    const {
      icon,
      label,
      multiline,
      passwordField,
      containerStyle,
      inputFieldStyle,
      autoCapitalize,
      rightIconColor,
      rightIconSize,
      rightIcon,
      onPressIn,
      errors,
      focus,
      required,
    } = props;

    const [focused, setFocused] = useState<boolean>(false);
    const [secureText, setSecureText] = useState<boolean>(true);
    const slideAnim = useRef(new Animated.Value(-100)).current;

    // Add useEffect to trigger animation when errors change
    useEffect(() => {
      if (errors) {
        Animated.spring(slideAnim, {
          toValue: 0,
          // friction: 8,
          // tension: 40,
          useNativeDriver: true,
        }).start();
      }
    }, [errors]);

    return (
      <View style={{flex: 1}}>
        {label && (
          <View
            style={{
              flexDirection: 'row',
              marginLeft: widthPixel(8),
              marginTop: 10,
              marginBottom: -5,
            }}>
            <CustomText fontSize={14} weight="semibold" color={colors.black}>
              {label}
            </CustomText>
            {required && (
              <CustomText
                fontSize={14}
                weight="semibold"
                color={colors.danger}
                style={{marginLeft: 1}}>
                *
              </CustomText>
            )}
          </View>
        )}

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!onPressIn}
          onPress={onPressIn}
          style={[
            styles.container,
            containerStyle,
            {
              borderWidth: focused ? 1 : 0,
              backgroundColor: focused ? colors.white : `${colors.white}DD`,
              ...appShadow,
            },
          ]}>
          {icon && (
            <View style={styles.iconView}>
              <Image
                source={icon}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
          )}

          <TextInput
            {...props}
            ref={ref}
            multiline={multiline}
            cursorColor={colors.black}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            placeholderTextColor={colors.placeHolderColor}
            autoCapitalize={autoCapitalize || 'none'}
            secureTextEntry={passwordField ? secureText : false}
            style={[
              multiline && {
                height: 150,
                textAlignVertical: 'top',
                paddingTop: utility.isPlatformAndroid ? 5 : 10,
              },
              inputFieldStyle,
              styles.textInputStyle,
            ]}
          />

          {passwordField && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.iconView}
              onPress={() => setSecureText(!secureText)}>
              <Image
                resizeMode="contain"
                source={secureText ? icons.closedEye : icons.closedEye}
                style={[styles.iconStyle]}
              />
            </TouchableOpacity>
          )}

          {rightIcon && (
            <Image
              resizeMode="contain"
              source={rightIcon}
              tintColor={rightIconColor}
              style={{
                marginRight: 5,
                width: rightIconSize || 10,
                height: rightIconSize || 10,
              }}
            />
          )}
        </TouchableOpacity>

        {errors && focus && (
          <Animated.View style={{transform: [{translateX: slideAnim}]}}>
            <CustomText
              fontSize={12}
              color={colors.danger}
              style={{marginTop: heightPixel(5), marginLeft: widthPixel(8)}}>
              {errors}
            </CustomText>
          </Animated.View>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 15,
    borderRadius: 30,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.primary,
    backgroundColor: colors.white,
    borderWidth: 1,
  },
  iconView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
  } as ImageStyle,
  textInputStyle: {
    flex: 1,
    height: 42,
    padding: 0,
    marginHorizontal: 8,
    color: colors.black,
    fontFamily: fontFamily.Gilroy.regular,
    fontWeight: '600',
  },
});

export default CustomTextInput;
