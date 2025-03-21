import React, {FC, useState} from 'react';
import {Switch} from 'react-native-switch';
import {CustomSwitchI} from '../Interfaces';
import {colors} from '../utilities';

const CustomSwitch: FC<CustomSwitchI> = ({switchVal, setSwitchVal}) => {
  const [isSwitch, setIsSwitch] = useState(false);

  return (
    <Switch
      barHeight={20}
      circleSize={16}
      disabled={false}
      activeText={''}
      inActiveText={''}
      switchLeftPx={4}
      switchRightPx={4}
      circleBorderWidth={0}
      circleBorderActiveColor={colors.primary}
      switchWidthMultiplier={2.3}
      switchBorderRadius={30}
      backgroundActive={colors.primary}
      backgroundInactive={colors.primary2}
      circleActiveColor={colors.primary2}
      circleInActiveColor={colors.primary}
      value={switchVal || isSwitch}
      onValueChange={val =>
        setSwitchVal ? setSwitchVal(val) : setIsSwitch(val)
      }
    />
  );
};

export default CustomSwitch;
