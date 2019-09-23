import React, {Component} from 'react';
import {Image, StatusBar, View, TouchableOpacity, Platform} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Colors, Metrics} from '../themes';
import Divider from '../components/Divider';
import I18n from 'react-native-i18n';

const ProfileImage =
  'https://antiqueruby.aliansoftware.net//Images/drawer/profile_dtfive.jpg';
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: 'SignUp',
    };
  }

  render() {
    const {activeMenuImage} = this.state;
    StatusBar.setBarStyle('light-content', true);

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.container}>
        <View style={styles.listProfileContainer}>
          <View style={styles.profileDataBg}>
            <Image source={{uri: ProfileImage}} style={styles.profileImg} />
            <View style={styles.nameAddressTxt}>
              <Text style={styles.nameTxt}>John Doe</Text>
              <Text style={styles.addressTxt}>johndoe@gmail.com</Text>
            </View>
          </View>

          <View style={styles.menuListBg}>
            <TouchableOpacity
              style={styles.menuListItemBg}
              onPress={() => alert('item')}>
              <Ionicons name="ios-globe" size={25} color={Colors.menu_icon} />
              <Text style={styles.menuListItem}>{I18n.t('Home')}</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              style={styles.menuListItemBg}
              onPress={() => Actions.Scene1()}>
              <Ionicons name="ios-globe" size={25} color={Colors.menu_icon} />
              <Text style={styles.menuListItem}>{I18n.t('Scene1')}</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              style={styles.menuListItemBg}
              onPress={() => Actions.Scene2()}>
              <Ionicons name="ios-globe" size={25} color={Colors.menu_icon} />
              <Text style={styles.menuListItem}>{I18n.t('Scene2')}</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              style={styles.menuListItemBg}
              onPress={() => Actions.Scene3()}>
              <Ionicons name="ios-globe" size={25} color={Colors.menu_icon} />
              <Text style={styles.menuListItem}>{I18n.t('Scene3')}</Text>
            </TouchableOpacity>
            <Divider />
          </View>
        </View>
      </View>
    );
  }
}
