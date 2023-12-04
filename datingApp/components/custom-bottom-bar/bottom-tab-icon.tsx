import React from 'react';
import {View} from 'react-native';
import Ionicons from '../../../Components/atom/Ionicons/Ionicons';
import { color } from '../../../constants/color';

interface Props {
  route: string;
  isFocused: boolean;
}

const BottomTabIcon = ({route, isFocused}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;

    switch (route) {
      case 'Home':
        return (
          <Ionicons name='grid' size={24} color={!isFocused ? color.gray : '#d3d3d3'}/>
        );
      case 'Notification':
        return (
          <Ionicons name='bowling-ball' size={24} color={!isFocused ? color.gray : color.black}/>
        );
      case 'Profile':
        return (
            <Ionicons name='person' size={24} color={!isFocused ? color.gray : '#d3d3d3'}/>
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;