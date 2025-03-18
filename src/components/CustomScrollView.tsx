import React, {FC} from 'react';
import {StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {ICustomScrolllView} from '../Interfaces';
import {colors, appStyles} from '../utilities';
import {generalImages} from '../assets';

const CustomScrollView: FC<ICustomScrolllView> = props => {
  const {children, horizontal, isMarginTop, contentStyle, showBackground} =
    props;
  if (showBackground) {
    return (
      <ImageBackground
        source={generalImages.backgroundImage}
        style={styles.imageContainer}>
        <ScrollView
          bounces={false}
          horizontal={horizontal}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
          contentContainerStyle={[
            styles.scrollView,
            contentStyle,
            isMarginTop && !horizontal && appStyles.marginTop,
          ]}
          {...props}>
          {children}
        </ScrollView>
      </ImageBackground>
    );
  }

  return (
    <>
      <ScrollView
        bounces={false}
        horizontal={horizontal}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={[
          styles.scrollView,
          contentStyle,
          isMarginTop && !horizontal && appStyles.marginTop,
          {backgroundColor: colors.primary2},
        ]}
        {...props}>
        {children}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
    paddingHorizontal: widthPixel(15),
  },
  imageContainer: {
    flex: 1,
  },
});

export default CustomScrollView;
