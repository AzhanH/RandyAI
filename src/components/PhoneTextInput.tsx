import React, {FC, forwardRef, useEffect, useRef, useState} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {appShadow, heightPixel, widthPixel} from '../utilities/helpers';
import {IPhoneTextInput} from '../Interfaces';
import CustomText from './CustomText';
import {colors} from '../utilities';

const PhoneTextInput: FC<IPhoneTextInput> = forwardRef((props, ref) => {
  const {icon, value, setValue, placeholder, errors, focus, label, required} =
    props;

  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (errors) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [errors]);

  const onSelect = (val: string) => {
    console.log('onSelect: ', val);
  };

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
      <View
        style={[
          styles.container,
          {
            borderWidth: focused ? 1 : 0,
            backgroundColor: focused ? colors.white : `${colors.white}DD`,
            ...appShadow,
          },
        ]}>
        <View style={styles.iconView}>
          <Image
            source={icon}
            resizeMode="contain"
            style={[
              styles.iconStyle,
              {tintColor: focused ? colors.white : colors.gray},
            ]}
          />
        </View>

        <PhoneInput
          defaultCode="US"
          defaultValue={value}
          placeholder={placeholder}
          onChangeFormattedText={setValue}
          withDarkTheme
          textInputProps={{
            maxLength: 10,
            editable: true,
            cursorColor: colors.black,
            onBlur: () => setFocused(false),
            onFocus: () => setFocused(true),
            placeholderTextColor: colors.black,
          }}
          codeTextStyle={[{marginTop: -1, color: colors.black}]}
          containerStyle={[styles.phoneInputContainer]}
          countryPickerButtonStyle={{width: undefined}}
          textContainerStyle={styles.textContainerStyle}
          textInputStyle={[styles.textInputStyle]}
        />

        <View style={styles.iconView} />
      </View>
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
});

export default PhoneTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  phoneInputContainer: {
    flex: 1,
    height: 52,
    // marginHorizontal: 8,
    backgroundColor: colors.transparent,
  },
  textInputStyle: {
    height: 50,
    padding: 0,
    fontSize: 14,
    color: colors.white,
  },
  textContainerStyle: {
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: colors.transparent,
  },
  iconView: {
    // flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 22,
    height: 22,
  },
  arrowIconStyle: {
    width: 10,
    height: 10,
  },
});
