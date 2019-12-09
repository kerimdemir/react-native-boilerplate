import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../themes';

const TabContent = ({title, focused}) => {
  let SIZE = 30;
  switch (title) {
    case 'Home':
      return (
        <View style={styles.container}>
          <Icon
            name={'home'}
            color={focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND}
            size={SIZE}
          />
          <Text
            style={{
              color: focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND,
            }}>
            Home
          </Text>
        </View>
      );
      break;
    case 'Scene1':
      return (
        <View style={styles.container}>
          <Icon
            name={'3d-rotation'}
            color={focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND}
            size={SIZE}
          />
          <Text
            style={{
              color: focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND,
            }}>
            Scene1
          </Text>
        </View>
      );
      break;
    case 'Scene2':
      return (
        <View style={styles.container}>
          <Icon
            name={'access-alarm'}
            color={focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND}
            size={SIZE}
          />
          <Text
            style={{
              color: focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND,
            }}>
            Scene2
          </Text>
        </View>
      );
      break;
    case 'Scene3':
      return (
        <View style={styles.container}>
          <Icon
            name={'accessible'}
            color={focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND}
            size={SIZE}
          />
          <Text
            style={{
              color: focused ? Colors.TEMPLATE_COLOR : Colors.CARD_BACKGROUND,
            }}>
            Scene3
          </Text>
        </View>
      );
      break;

    default:
      return <View />;
  }
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});

export default TabContent;
