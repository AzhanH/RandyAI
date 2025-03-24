import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  CustomButton,
  CustomScrollView,
  CustomText,
  HeadingComp,
} from '../../components';
import useOTPControllers from '../../controllers/AuthControllers/OTPControllers';
import {colors, navigate, screens} from '../../utilities';
import {
  appShadow,
  BOTTOMBAR_HEIGHT,
  font,
  heightPixel,
  widthPixel,
} from '../../utilities/helpers';
import {generalImages} from '../../assets';

const CELL_COUNT = 4;

export default function OtpVerification({route}: any) {
  const {values, functions} = useOTPControllers();

  const [value, setValue] = useState('');
  const [timer, setTimer] = useState('60');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CustomScrollView
      showBackground
      contentStyle={styles.contentContainerStyle}>
      <View style={styles.fieldContainer}>
        <Image source={generalImages.avatar} style={styles.avatar} />
        <Image source={generalImages.appIcon} style={styles.appIcon} />
        <HeadingComp
          title="Password Recovery"
          subTitle={`Please enter 6-digit code we have sent you on your phone +123 456789`}
          titleTxtSize={26}
          subTitleTxtSize={16}
          titleTxtColor={colors.black}
          subTitleTxtColor={colors.black}
          titletxtWeight="semibold"
          subTitleTxtWeight="medium"
          subTitleStyle={styles.subTitleStyle}
          containerStyle={styles.containerStyle}
        />
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.rootStyle}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[
                styles.codeFieldStyle,
                isFocused && styles.focusCellStyle,
              ]}>
              <CustomText
                onLayout={getCellOnLayoutHandler(index)}
                color={colors.placeHolderColor}
                weight="medium">
                {symbol || (isFocused ? <Cursor /> : '-')}
              </CustomText>
            </View>
          )}
        />
        <CustomText
          color={colors.placeHolderColor}
          weight="medium"
          fontSize={14}
          onPress={() => console.log('resend')}
          style={styles.resendBtn}>
          Did't get a code
        </CustomText>

        <CustomButton
          title="Continue"
          gradient
          btnStyle={styles.btnStyle}
          onPress={() => functions.handleonSubmit(route.params.forgotPassword)}
        />
        <CustomText
          style={styles.bottomText}
          color={colors.black}
          weight="semibold"
          fontSize={16}>
          Don’t have an account?{' '}
          <CustomText
            color={colors.primary}
            weight="semibold"
            fontSize={16}
            onPress={() => navigate(screens.signup)}>
            {`Sign Up`}
          </CustomText>
        </CustomText>
      </View>
    </CustomScrollView>
  );
}
const styles = StyleSheet.create({
  focusCellStyle: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    ...appShadow,
  },
  bottomText: {
    textAlign: 'center',
    marginVertical: heightPixel(25),
    marginHorizontal: widthPixel(4),
  },
  subTitleStyle: {
    textAlign: 'center',
    width: '90%',
    lineHeight: heightPixel(15),
  },
  containerStyle: {
    alignItems: 'center',
    marginTop: heightPixel(10),
  },
  codeFieldStyle: {
    width: 73,
    height: 48,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: widthPixel(14),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  resendBtn: {
    marginTop: heightPixel(10),
    alignSelf: 'flex-end',
  },
  rootStyle: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(77.6),
  },
  btnStyle: {marginTop: heightPixel(62)},

  contentContainerStyle: {
    paddingTop: heightPixel(230),
    paddingHorizontal: 0,
  },
  avatar: {
    height: heightPixel(229),

    width: widthPixel(164),
    position: 'absolute',
    alignSelf: 'center',
    top: -heightPixel(180),
    resizeMode: 'contain',
  },
  appIcon: {
    height: heightPixel(64),
    width: widthPixel(64),
    marginTop: heightPixel(23),
    alignSelf: 'flex-end',
  },
  fieldContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: heightPixel(15),
    borderTopRightRadius: heightPixel(15),
    paddingHorizontal: widthPixel(20),
    flex: 1,
  },
});
