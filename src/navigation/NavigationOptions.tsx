import React from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CustomText} from '../components';
import {heightPixel, widthPixel} from '../utilities/helpers';
import {appStyles, colors} from '../utilities';

const headerLeftTitle = (title: string, color: string) => {
  return {
    headerTitle: () => (
      <CustomText fontSize={18} weight="bold" color={color || colors.white}>
        {title}
      </CustomText>
    ),
  };
};

const headerRightMultipleIcons = (icons: any[], size: number) => {
  return {
    headerRight: () => (
      <View style={[appStyles.flexRow as ViewStyle]}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7}>
            <Image
              resizeMode="contain"
              source={icon}
              style={{
                marginLeft: widthPixel(10),
                width: heightPixel(size || 20),
                height: heightPixel(size || 20),
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    ),
  };
};

const styles = StyleSheet.create({});

export {headerLeftTitle, headerRightMultipleIcons};
