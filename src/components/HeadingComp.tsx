import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {colors} from '../utilities';
import {IHeadingComp} from '../Interfaces';
import CustomText from './CustomText';
import {generalImages} from '../assets';

const HeadingComp: FC<IHeadingComp> = props => {
  const {
    title,
    subTitle,
    layout,
    containerStyle,
    subTitleStyle,
    subTitleTxtSize,
    titleTxtSize,
    titleTxtColor,
    subTitleTxtColor,
    titletxtWeight,
    subTitleTxtWeight,
    highlitedText,
  } = props;

  return (
    <>
      {layout == 'first' ? (
        <View style={[styles.container, containerStyle]}>
          {/* <Image
            resizeMode="contain"
            style={styles.appLogoStyle}
            source={generalImages.backgroundImage}
          /> */}

          <CustomText
            fontSize={titleTxtSize ?? 14}
            color={titleTxtColor ?? colors.white}
            style={{
              marginBottom: heightPixel(1),
            }}
            weight={titletxtWeight ?? 'regular'}>
            {title}
          </CustomText>

          {subTitle && (
            <CustomText
              color={subTitleTxtColor ?? colors.secondary}
              fontSize={subTitleTxtSize ?? 26}
              weight={subTitleTxtWeight ?? 'semibold'}>
              {subTitle}
            </CustomText>
          )}
        </View>
      ) : (
        <View style={[containerStyle]}>
          <CustomText
            fontSize={titleTxtSize ?? 14}
            color={titleTxtColor ?? colors.gray}
            style={{marginBottom: heightPixel(1)}}
            weight={titletxtWeight ?? 'regular'}>
            {title}
          </CustomText>

          {subTitle && (
            <CustomText
              color={subTitleTxtColor ?? colors.secondary}
              fontSize={subTitleTxtSize ?? 24}
              weight={subTitleTxtWeight ?? 'semibold'}
              style={subTitleStyle}>
              {subTitle}
              {highlitedText && (
                <CustomText
                  color={colors.highlightedTxt}
                  fontSize={subTitleTxtSize ?? 24}
                  weight={subTitleTxtWeight ?? 'semibold'}>
                  {highlitedText}
                </CustomText>
              )}
            </CustomText>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  appLogoStyle: {
    width: widthPixel(148.67),
    height: heightPixel(115.47),
    marginBottom: heightPixel(35),
    alignSelf: 'center',
  },
  flexRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HeadingComp;
