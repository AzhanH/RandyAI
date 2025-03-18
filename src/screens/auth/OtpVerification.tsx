import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
import {colors} from '../../utilities';
import {
  BOTTOMBAR_HEIGHT,
  font,
  heightPixel,
  widthPixel,
} from '../../utilities/helpers';

const CELL_COUNT = 6;

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
      <HeadingComp
        title=""
        subTitle={`Please enter 6-digit code we have sent you on your phone +123 456789`}
        titleTxtSize={18}
        subTitleTxtSize={14}
        titleTxtColor={colors.white}
        subTitleTxtColor={colors.white}
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
            style={[styles.codeFieldStyle, isFocused && styles.focusCellStyle]}>
            <CustomText
              onLayout={getCellOnLayoutHandler(index)}
              color={colors.white}
              weight="medium">
              {symbol || (isFocused ? <Cursor /> : '-')}
            </CustomText>
          </View>
        )}
      />
      <CustomButton
        title={`Resend in 00:48`}
        btnStyle={styles.resendBtn}
        txtColor={colors.white}
        txtSize={12}
        onPress={() => console.log('Resend Code')}
        titleStyle={{
          fontSize: 12,
          fontWeight: '300',
          color: colors.white,
        }}
      />
      <CustomButton
        title="Continue"
        gradient
        btnStyle={styles.btnStyle}
        onPress={() => functions.handleonSubmit(route.params.forgotPassword)}
      />
    </CustomScrollView>
  );
}
const styles = StyleSheet.create({
  focusCellStyle: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.inputColor,
  },
  subTitleStyle: {
    textAlign: 'center',
    width: '90%',
    lineHeight: heightPixel(15),
  },
  containerStyle: {
    alignItems: 'center',
  },
  codeFieldStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: widthPixel(14),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputColor,
    borderColor: colors.inputColor,
  },
  resendBtn: {
    marginTop: heightPixel(49),
    backgroundColor: colors.inputColor,
    width: widthPixel(130),
    alignSelf: 'center',
    height: heightPixel(42),
  },
  rootStyle: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(77.6),
  },
  btnStyle: {marginTop: heightPixel(62)},
  contentContainerStyle: {
    paddingTop: BOTTOMBAR_HEIGHT,
  },
});
