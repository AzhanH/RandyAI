import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {colors, navigate, screens} from '../../utilities';
import {
  BOTTOMBAR_HEIGHT,
  heightPixel,
  widthPixel,
} from '../../utilities/helpers';
import {
  CustomText,
  HeadingComp,
  CustomButton,
  CustomTextInput,
  CustomScrollView,
} from '../../components';
import {generalImages, icons} from '../../assets';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one symbol')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  password: '',
  confirmPassword: '',
};

export default function ResetPassword({route}: any) {
  const email = route?.params?.email;

  const handleSubmit = (values: {
    password: string;
    confirmPassword: string;
  }) => {
    console.log('Form submitted:', values);
    navigate(screens.Login);
    // Handle password reset logic here
  };

  return (
    <CustomScrollView
      showBackground
      contentStyle={styles.contentContainerStyle}>
      <View style={styles.fieldContainer}>
        <Image source={generalImages.avatar} style={styles.avatar} />
        <Image source={generalImages.appIcon} style={styles.appIcon} />
        <HeadingComp
          title="Password Recovery"
          subTitle="Re-enter your password to confirm for security."
          titleTxtSize={26}
          subTitleTxtSize={16}
          titleTxtColor={colors.black}
          subTitleTxtColor={colors.black}
          titletxtWeight="semibold"
          subTitleTxtWeight="medium"
          subTitleStyle={styles.subTitleStyle}
          containerStyle={styles.containerStyle}
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={{
                marginTop: heightPixel(33),
              }}>
              <CustomTextInput
                passwordField
                placeholder="New Password"
                returnKeyType="next"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errors={errors.password}
                focus={touched.password}
                label="New Password"
                required
                icon={icons.lock}
              />

              <CustomTextInput
                passwordField
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                errors={errors.confirmPassword}
                focus={touched.confirmPassword}
                required
                label="Confirm Password"
                icon={icons.lock}
              />
              <CustomButton
                title="Update"
                btnStyle={{marginTop: 45}}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
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
  dotStyle: {
    height: 3,
    width: 3,
    borderRadius: 3,
    marginRight: 10,
    marginTop: 6,
    backgroundColor: colors.white,
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
  instructionsView: {
    marginTop: 35,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bottomText: {
    textAlign: 'center',
    marginVertical: heightPixel(25),
    marginHorizontal: widthPixel(4),
  },
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
