import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton, CustomText} from '../../components';
import {
  appStyles,
  colors,
  generalImages,
  icons,
  navigate,
  screens,
} from '../../utilities';
import {heightPixel, widthPixel} from '../../utilities/helpers';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const onBoarding = () => {
  const handleNextPress = () => {
    navigate(screens.login);
  };
  return (
    <ImageBackground source={generalImages.onboardingImage} style={{flex: 1}}>
      <ImageBackground
        source={generalImages.onBoardingBlurImage}
        style={styles.txtContainer}
        imageStyle={{
          borderRadius: widthPixel(34),
        }}>
        <>
          <CustomText weight="semibold" fontSize={37} color={colors.white}>
            You Can Stream on our Platform
          </CustomText>
          <CustomText
            fontSize={11}
            color={colors.white}
            weight="medium"
            style={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur. Ultricies velit ultricies
            vitae pulvinar amet.
          </CustomText>
          <LinearGradient
            colors={['rgba(255,255,255,0.2)', '#FFB2B2', colors.white]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.seprator}
          />
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.8}
            onPress={() => navigate(screens.login)}>
            <View style={styles.leftContainer}>
              <CustomText fontSize={14} color={colors.black} weight="bold">
                Get Started
              </CustomText>
            </View>
            <View style={styles.rightContainer}>
              <Image source={icons.getStarted} style={styles.arrow} />
            </View>
          </TouchableOpacity>
        </>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary2,
  },
  slide: {
    width,
    alignItems: 'center',
    height: '90%',
    justifyContent: 'center',
  },
  image: {
    width: widthPixel(375),
    height: heightPixel(554.12),
    resizeMode: 'cover',
  },
  appIcon: {
    height: heightPixel(104.73),
    width: widthPixel(104.73),
    resizeMode: 'contain',
    position: 'absolute',
    top: heightPixel(132.75),
  },
  text: {
    textAlign: 'center',
    marginTop: heightPixel(54),
  },
  btnStyle: {
    width: widthPixel(330),
    alignSelf: 'center',
    // marginTop: heightPixel(204),
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    width: '100%',
    marginTop: heightPixel(51),
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,

    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  onboardingText: {
    marginBottom: heightPixel(3),
  },
  txtContainer: {
    height: heightPixel(281),
    width: widthPixel(339),
    borderRadius: heightPixel(34),
    backgroundColor: '#83869550',
    position: 'absolute',
    bottom: heightPixel(20),
    alignSelf: 'center',
    paddingHorizontal: widthPixel(22),
    paddingVertical: heightPixel(32),
  },
  subTitle: {
    marginTop: heightPixel(10),
    lineHeight: heightPixel(13),
  },
  seprator: {
    height: heightPixel(0.8),
    width: '100%',
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: heightPixel(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(23),
  },
  leftContainer: {
    width: widthPixel(190),
    height: heightPixel(44),
    backgroundColor: colors.white,
    borderRadius: heightPixel(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: widthPixel(90),
    height: heightPixel(44),
    backgroundColor: colors.white,
    borderRadius: heightPixel(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    tintColor: colors.black,
    height: heightPixel(14),
    width: widthPixel(20),
  },
});

export default onBoarding;
