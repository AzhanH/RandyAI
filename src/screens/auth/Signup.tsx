import {Formik} from 'formik';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {colors, navigate, screens, StatusBarHeight} from '../../utilities';
import useSignUpController from '../../controllers/AuthControllers/SignUp';
import {
  BOTTOMBAR_HEIGHT,
  heightPixel,
  widthPixel,
} from '../../utilities/helpers';
import {
  CustomText,
  HeadingComp,
  CustomButton,
  PhoneTextInput,
  CustomTextInput,
  CustomScrollView,
  AnimatedCheckbox,
} from '../../components';

const Signup = () => {
  const {values, functions} = useSignUpController();

  return (
    <CustomScrollView
      showBackground
      contentStyle={styles.contentContainerStyle}>
      <HeadingComp
        layout="first"
        title="Register Yourself"
        titleTxtColor={colors.white}
        titleTxtSize={20}
        titletxtWeight="bold"
        containerStyle={styles.headerContainerStyle}
      />

      <Formik
        initialValues={values.initialValues}
        validationSchema={values.schema}
        onSubmit={functions.handleSignUp}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values: data,
          errors,
          touched,
        }) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CustomTextInput
                maxLength={15}
                returnKeyType="next"
                placeholder="First Name"
                containerStyle={{
                  width: widthPixel(159),
                  height: heightPixel(50),
                }}
                onChangeText={handleChange('firstName')}
                value={data.firstName}
                onBlur={handleBlur('firstName')}
                errors={errors.firstName}
                focus={touched.firstName}
              />

              <CustomTextInput
                maxLength={15}
                returnKeyType="next"
                placeholder="Last Name"
                containerStyle={{
                  width: widthPixel(159),
                  height: heightPixel(50),
                }}
                onChangeText={handleChange('lastName')}
                value={data.lastName}
                errors={errors.lastName}
                focus={touched.lastName}
              />
            </View>

            <CustomTextInput
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email Address"
              onChangeText={handleChange('email')}
              value={data.email}
              errors={errors.email}
              focus={touched.email}
            />

            <PhoneTextInput
              placeholder="Phone Number"
              value={data.phone}
              setValue={handleChange('phone')}
              errors={errors.phone}
              focus={touched.phone}
            />

            <CustomTextInput
              passwordField
              placeholder="Password"
              returnKeyType="next"
              onChangeText={handleChange('password')}
              value={data.password}
              errors={errors.password}
              focus={touched.password}
            />

            <CustomTextInput
              passwordField
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              errors={errors.confirmPassword}
              focus={touched.confirmPassword}
            />

            <AnimatedCheckbox
              size={20}
              checked={values.check}
              checkMarkColor={colors.white}
              onValueChange={functions.toggle}
              checkedBackgroundColor={colors.primary}
              checkboxContainerStyle={{padding: 0, marginRight: 8}}
              containerStyle={styles.animatedCheckBoxContainer}
              labelStyle={{color: colors.white}}
              label={
                <View style={{alignItems: 'flex-start'}}>
                  <CustomText fontSize={12} color={colors.white}>
                    Agree to YouTube Premium's{' '}
                    <CustomText
                      fontSize={12}
                      weight="bold"
                      color={colors.white}
                      onPress={() => navigate(screens.termsAndConditions)}>
                      {`Terms & Conditions`}
                    </CustomText>
                    {' & '}
                    <CustomText
                      fontSize={12}
                      weight="bold"
                      color={colors.white}
                      onPress={() => navigate(screens.privacyPolicy)}>
                      {`Privacy Policy`}
                    </CustomText>
                  </CustomText>
                </View>
              }
            />

            <CustomButton
              gradient
              title="Register"
              btnStyle={styles.btnStyle}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>

      <CustomText
        style={styles.bottomText}
        color={colors.white}
        weight="semibold"
        fontSize={12}>
        Already a member?
        <CustomText
          color={colors.primary}
          weight="semibold"
          fontSize={12}
          onPress={() => functions.navigateToScreen(screens.login)}>
          {` Login`}
        </CustomText>
      </CustomText>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    textAlign: 'center',
    marginTop: heightPixel(25),
    marginBottom: heightPixel(32),
    marginHorizontal: widthPixel(16),
  },
  animatedCheckBoxContainer: {
    marginHorizontal: 5,
    marginTop: heightPixel(28),
  },
  btnStyle: {marginTop: heightPixel(28)},
  containerStyle: {
    marginTop: heightPixel(80),
  },
  headerContainerStyle: {
    alignItems: 'center',
    marginBottom: heightPixel(21),
  },
  contentContainerStyle: {
    paddingTop: BOTTOMBAR_HEIGHT,
  },
});

export default Signup;
