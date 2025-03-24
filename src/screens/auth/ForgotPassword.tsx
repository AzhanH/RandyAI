import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {
  BOTTOMBAR_HEIGHT,
  heightPixel,
  widthPixel,
} from '../../utilities/helpers';
import {colors, deviceHeight, navigate, pop, screens} from '../../utilities';
import {
  HeadingComp,
  CustomButton,
  PhoneTextInput,
  CustomScrollView,
  CustomTextInput,
  CustomText,
} from '../../components';
import {generalImages, icons} from '../../assets';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const initialValues = {
  email: '',
};

export default function ForgotPassword() {
  const handleSubmit = (values: any) => {
    navigate(screens.otpVerification, {forgotPassword: true});
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
          subTitle="In order to reset your password you need to enter your registered phone number."
          titleTxtSize={26}
          subTitleTxtSize={16}
          titleTxtColor={colors.black}
          subTitleTxtColor={colors.black}
          titletxtWeight="semibold"
          subTitleTxtWeight="medium"
          subTitleStyle={styles.subTitleStyle}
          containerStyle={styles.headerContainerStyle}
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
          }) => (
            <View style={{marginTop: heightPixel(33)}}>
              {/* <PhoneTextInput
                placeholder="Phone Number"
                value={values.phone}
                setValue={handleChange('phone')}
                errors={errors.phone}
                focus={touched.phone}
              /> */}

              <CustomTextInput
                placeholder="Email Address"
                returnKeyType="next"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                errors={errors.email}
                focus={touched.email}
                label="Email Address"
                required
                icon={icons.email}
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
  headerContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(10),
  },
  subTitleStyle: {
    textAlign: 'center',
    lineHeight: heightPixel(14),
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
  bottomText: {
    textAlign: 'center',
    marginVertical: heightPixel(25),
    marginHorizontal: widthPixel(4),
  },
});
