import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import useLoginController from '../../controllers/AuthControllers/Login';
import {colors, navigate, screens, utility} from '../../utilities';
import {heightPixel, widthPixel} from '../../utilities/helpers';
import {
  CustomText,
  IconButton,
  HeadingComp,
  CustomButton,
  CustomTextInput,
  CustomScrollView,
} from '../../components';
import {generalImages} from '../../assets';

// const socialBtn = [
//   {
//     id: 1,
//     icon: icons.googleLogo,
//     onPress: () => console.log('Here'),
//   },
//   ...(utility.isPlatformIOS
//     ? [
//         {
//           id: 2,
//           icon: icons.appleLogo,
//           onPress: () => console.log('Here'),
//         },
//       ]
//     : []),
//   {
//     id: 3,
//     icon: icons.facebookLogo,
//     onPress: () => console.log('Here'),
//   },
// ];

const Login = () => {
  const {values, functions} = useLoginController();

  return (
    <CustomScrollView
      showBackground
      contentStyle={{
        justifyContent: 'flex-end',
      }}>
      <View style={styles.fieldContainer}>
        <Image source={generalImages.avatar} style={styles.avatar} />
        <HeadingComp
          layout="first"
          title="Welcome back"
          titletxtWeight="bold"
          titleTxtSize={20}
          titleTxtColor={colors.white}
          // subTitle="Welcome Back"
          containerStyle={styles.containerStyle}
        />
        <Formik
          initialValues={values.initialValues}
          validationSchema={values.schema}
          onSubmit={functions.handleSignIn}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values: data,
            errors,
            touched,
          }) => (
            <View>
              <CustomTextInput
                placeholder="Email Address"
                returnKeyType="next"
                value={data.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                errors={errors.email}
                focus={touched.email}
              />

              <CustomTextInput
                passwordField
                placeholder="Password"
                value={data.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                focus={touched.password}
                errors={errors.password}
              />

              <CustomText
                color={colors.white}
                style={styles.forgotPasswordStyle}
                fontSize={13}
                weight="medium"
                onPress={() => functions.navigateToScreen(screens.forgotPass)}>
                Forgot Password?
              </CustomText>

              <CustomButton title="Login" onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <View style={styles.separatorView}>
          <View style={styles.separatorLine} />
          <CustomText
            color={colors.white}
            weight="medium"
            style={{marginHorizontal: 10}}>
            Or Connect with
          </CustomText>
          <View style={styles.separatorLine} />
        </View>
        <View style={styles.row}></View>

        <CustomText
          color={colors.white}
          weight="regular"
          fontSize={12}
          style={styles.bottomText}>
          Continue with Google, Apple or Facebook, you agree to YouTube
          Premium's{' '}
          <CustomText
            color={colors.white}
            fontSize={12}
            weight="semibold"
            onPress={() => navigate(screens.termsAndConditions)}>
            {`Terms and Conditions`}
          </CustomText>
          {' & '}
          <CustomText
            fontSize={12}
            weight="semibold"
            color={colors.white}
            onPress={() => navigate(screens.privacyPolicy)}>
            {`Privacy Policy`}
          </CustomText>
        </CustomText>

        <CustomText
          style={styles.bottomText}
          color={colors.white}
          weight="semibold"
          fontSize={12}>
          Not a member?{' '}
          <CustomText
            color={colors.primary}
            weight="semibold"
            fontSize={12}
            onPress={() => functions.navigateToScreen(screens.signup)}>
            {`Sign up now`}
          </CustomText>
        </CustomText>
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  separatorView: {
    marginTop: heightPixel(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorLine: {
    width: widthPixel(67),
    borderTopWidth: 1,
    borderTopColor: colors.greish,
  },
  socialBtnView: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialBtn: {
    backgroundColor: colors.black,
    marginTop: heightPixel(24),
  },
  googleBtn: {
    backgroundColor: colors.greishBg,
    marginTop: heightPixel(14),
  },
  fbBtn: {
    backgroundColor: colors.fbColor,
    marginTop: heightPixel(14),
  },
  bottomText: {
    textAlign: 'center',
    marginTop: heightPixel(25),
    marginHorizontal: widthPixel(4),
  },
  containerStyle: {
    marginTop: heightPixel(utility.isPlatformIOS ? 80 : 30),
    alignItems: 'center',
    marginBottom: heightPixel(33),
  },
  forgotPasswordStyle: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  iconStyle: {
    height: widthPixel(60),
    width: widthPixel(60),
    borderRadius: widthPixel(35),
    backgroundColor: colors.inputColor,
    borderColor: colors.darkCharcoal,
    marginHorizontal: widthPixel(23),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    alignSelf: 'center',
    marginTop: heightPixel(21),
  },
  fieldContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: heightPixel(10),
    borderTopRightRadius: heightPixel(10),
  },
  avatar: {
    height: heightPixel(229),

    width: widthPixel(164),
    position: 'absolute',
    alignSelf: 'center',
    top: -heightPixel(180),
  },
});

export default Login;
