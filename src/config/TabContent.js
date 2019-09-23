import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../themes';

const TabContent = ({title, focused}) => {
  let image;
  let active = <Icon size={20} color={Colors.TEMPLATE_COLOR} name="home" />;
  let passive = <Icon size={20} color={Colors.CARD_BACKGROUND} name="home" />;
  switch (title) {
    case 'Home':
      image = focused ? active : passive;
      break;
    case 'Scene1':
      image = focused ? active : passive;
      break;
    case 'Scene2':
      image = focused ? active : passive;
      break;
    case 'Scene3':
      image = focused ? active : passive;
      break;
  }
  switch (title) {
    case 'Home':
      return <View>{image}</View>;
      break;
    case 'Scene1':
      return <View>{image}</View>;
      break;
    case 'Scene2':
      return <View>{image}</View>;
      break;
    case 'Scene3':
      return <View>{image}</View>;
      break;

    default:
      return <View>{image}</View>;
      break;
  }
};

export default TabContent;
