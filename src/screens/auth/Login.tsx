import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
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
import {generalImages, icons} from '../../assets';
import CustomSwitch from '../../components/CustomSwitch';

const socialBtn = [
  {
    id: 1,
    icon: icons.google,
    onPress: () => console.log('Here'),
  },
  ...(utility.isPlatformIOS
    ? [
        {
          id: 2,
          icon: icons.apple,
          onPress: () => console.log('Here'),
        },
      ]
    : []),
  {
    id: 3,
    icon: icons.facebook,
    onPress: () => console.log('Here'),
  },
];
const Login = () => {
  const {values, functions} = useLoginController();

  return (
    <CustomScrollView
      contentStyle={styles.contentContainerStyle}
      showBackground>
      <View style={styles.fieldContainer}>
        <Image source={generalImages.avatar} style={styles.avatar} />
        <Image source={generalImages.appIcon} style={styles.appIcon} />
        <HeadingComp
          layout="first"
          title="Sign In"
          titletxtWeight="bold"
          titleTxtSize={26}
          subTitle="Enter your credentials"
          subTitleTxtSize={16}
          subTitleTxtWeight="regular"
          containerStyle={styles.containerStyle}
          titleTxtColor={colors.black}
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
                label="Email Address"
                required
                icon={icons.email}
              />

              <CustomTextInput
                passwordField
                placeholder="Password"
                value={data.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                focus={touched.password}
                errors={errors.password}
                label="Password"
                required
                icon={icons.lock}
              />
              <View
                style={[
                  styles.row,
                  {justifyContent: 'space-between', width: '100%'},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CustomSwitch
                    setSwitchVal={functions.toggleRememberMe}
                    switchVal={values.rememberMeVisible}
                  />
                  <CustomText
                    color={colors.black}
                    style={styles.remeberMeStyle}
                    fontSize={13}
                    weight="medium"
                    onPress={() => console.log('Here')}>
                    Remember me
                  </CustomText>
                </View>

                <CustomText
                  color={colors.black}
                  fontSize={13}
                  weight="medium"
                  onPress={() =>
                    functions.navigateToScreen(screens.forgotPass)
                  }>
                  Forgot Password?
                </CustomText>
              </View>

              <CustomButton title="Login" onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <View style={styles.separatorView}>
          <View style={styles.separatorLine} />
          <CustomText
            color={colors.black}
            weight="medium"
            style={{marginHorizontal: 10}}>
            Or Continue With
          </CustomText>
          <View style={styles.separatorLine} />
        </View>
        <View style={styles.row}>
          {socialBtn?.map(res => (
            <IconButton
              key={res.id}
              icon={res.icon}
              onPress={res.onPress}
              size={25}
              iconStyle={styles.iconStyle}
            />
          ))}
        </View>
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
            onPress={() => functions.navigateToScreen(screens.signup)}>
            {`Sign up now`}
          </CustomText>
        </CustomText>
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: heightPixel(230),
    paddingHorizontal: 0,
  },
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
    marginVertical: heightPixel(25),
    marginHorizontal: widthPixel(4),
  },
  containerStyle: {
    alignItems: 'center',
    marginBottom: heightPixel(15),
    alignSelf: 'center',
  },
  forgotPasswordStyle: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  iconStyle: {
    height: widthPixel(60),
    width: widthPixel(60),
    borderRadius: widthPixel(35),
    backgroundColor: colors.white,
    borderColor: colors.primary,
    marginHorizontal: widthPixel(23),
    borderWidth: 1,
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
    borderTopLeftRadius: heightPixel(15),
    borderTopRightRadius: heightPixel(15),
    paddingHorizontal: widthPixel(20),
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
  remeberMeStyle: {
    marginLeft: widthPixel(8),
  },
});

export default Login;
