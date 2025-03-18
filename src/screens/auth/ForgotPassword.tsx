import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {
  BOTTOMBAR_HEIGHT,
  heightPixel,
  widthPixel,
} from '../../utilities/helpers';
import {colors, deviceHeight, navigate, screens} from '../../utilities';
import {
  HeadingComp,
  CustomButton,
  PhoneTextInput,
  CustomScrollView,
} from '../../components';

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
});

const initialValues = {
  phone: '',
};

export default function ForgotPassword() {
  const handleSubmit = (values: any) => {
    navigate(screens.otpVerification, {forgotPassword: true});
  };

  return (
    <CustomScrollView
      showBackground
      contentStyle={styles.contentContainerStyle}>
      <HeadingComp
        title=""
        subTitle="In order to reset your password you need to enter your registered phone number."
        titleTxtSize={18}
        subTitleTxtSize={12}
        titleTxtColor={colors.white}
        subTitleTxtColor={colors.white}
        titletxtWeight="semibold"
        subTitleTxtWeight="medium"
        subTitleStyle={styles.subTitleStyle}
        containerStyle={styles.headerContainerStyle}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={{marginTop: heightPixel(33)}}>
            <PhoneTextInput
              placeholder="Phone Number"
              value={values.phone}
              setValue={handleChange('phone')}
              errors={errors.phone}
              focus={touched.phone}
            />

            <CustomButton
              gradient
              title="Continue"
              onPress={handleSubmit}
              btnStyle={{
                marginTop: heightPixel(150),
              }}
            />
          </View>
        )}
      </Formik>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subTitleStyle: {
    textAlign: 'center',
    lineHeight: heightPixel(14),
  },
  contentContainerStyle: {
    paddingTop: BOTTOMBAR_HEIGHT,
  },
});
