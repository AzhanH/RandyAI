import {Formik} from 'formik';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
} from '../../components';
import {generalImages, icons} from '../../assets';

const Signup = () => {
  const {values, functions} = useSignUpController();

  return (
    <CustomScrollView
      contentStyle={styles.contentContainerStyle}
      showBackground>
      <View style={styles.fieldContainer}>
        <Image source={generalImages.avatar} style={styles.avatar} />
        <Image source={generalImages.appIcon} style={styles.appIcon} />
        <HeadingComp
          layout="first"
          title="Sign Up"
          titleTxtColor={colors.black}
          titleTxtSize={26}
          titletxtWeight="bold"
          containerStyle={styles.headerContainerStyle}
          subTitle="Enter your credentials"
          subTitleTxtSize={16}
          subTitleTxtWeight="regular"
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
              <CustomTextInput
                maxLength={15}
                returnKeyType="next"
                placeholder="User Name"
                onChangeText={handleChange('userName')}
                value={data.userName}
                onBlur={handleBlur('userName')}
                errors={errors.userName}
                focus={touched.userName}
                label="User Name"
                required
                icon={icons.profile}
              />

              <CustomTextInput
                returnKeyType="next"
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                value={data.email}
                errors={errors.email}
                focus={touched.email}
                label="Email Address"
                required
                icon={icons.email}
              />

              <PhoneTextInput
                placeholder="Phone Number"
                value={data.phone}
                setValue={handleChange('phone')}
                errors={errors.phone}
                focus={touched.phone}
                label="Phone Number"
                required
              />
              <CustomTextInput
                passwordField
                placeholder="Password"
                returnKeyType="next"
                onChangeText={handleChange('password')}
                value={data.password}
                errors={errors.password}
                focus={touched.password}
                label="Password"
                required
                icon={icons.lock}
              />

              <CustomTextInput
                passwordField
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                errors={errors.confirmPassword}
                focus={touched.confirmPassword}
                label="Confirm Password"
                required
                icon={icons.lock}
              />

              <TouchableOpacity
                onPress={() => console.log('pressed')}
                activeOpacity={0.9}>
                <CustomTextInput
                  placeholder=""
                  editable={false}
                  returnKeyType="next"
                  label="Upload Profile Image"
                  required
                  rightIcon={icons.uploadImage}
                  onPress={() => console.log('pressed')}
                  rightIconSize={15}
                />
              </TouchableOpacity>
              {/* <AnimatedCheckbox
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
            /> */}

              <CustomButton
                title="Sign Up"
                btnStyle={styles.btnStyle}
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
          Have an account already?
          <CustomText
            color={colors.primary}
            weight="semibold"
            fontSize={16}
            onPress={() => functions.navigateToScreen(screens.Login)}>
            {` Login`}
          </CustomText>
        </CustomText>
      </View>
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
    paddingTop: heightPixel(230),
    paddingHorizontal: 0,
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
});

export default Signup;
