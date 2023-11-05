import React from 'react';
import {View} from 'react-native';
import Ionicons from '../../atom/Ionicons/Ionicons';

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
          <Ionicons name='home-outline' size={24} color={isFocused ? '#0047AB' : '#ffffff'}/>
        );
      case 'Notification':
        return (
          <Ionicons name='search-outline' size={24} color={isFocused ? '#0047AB' : '#ffffff'}/>
        );
      case 'Profile':
        return (
            <Ionicons name='person-outline' size={24} color={isFocused ? '#0047AB' : '#ffffff'}/>
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;