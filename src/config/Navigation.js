import React, {useEffect, useState} from 'react';
import {StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native';
import {
  Router,
  Scene,
  Drawer,
    Tabs,
  Reducer,
  Actions,
} from 'react-native-router-flux';
import {Colors, Fonts, Metrics} from '../themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideBar from './SideBar';
import I18n from 'react-native-i18n';
import {Home, Scene1, Scene2, Scene3} from './index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabContent from './TabContent';

const styles = StyleSheet.create({
  navBar: {
    height: 50,
    backgroundColor: 'white', // changing navbar color
  },
  navTitle: {
    color: Colors.TEMPLATE_COLOR, // changing navbar title color
    fontFamily: Fonts.type.bold,
  },
  routerScene: {
    // paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    //   console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};
const BackButton = () => {
  return (
    <TouchableOpacity onPress={() => Actions.pop()}>
      <AntDesign
        name={'arrowleft'}
        style={{marginLeft: Metrics.WIDTH * 0.02}}
        color={Colors.TEMPLATE_COLOR}
        size={Fonts.moderateScale(30)}
      />
    </TouchableOpacity>
  );
};
const Navigation = () => {
  useEffect(() => {}, []);
  return (
    <Router
      createReducer={reducerCreate}
      backAndroidHandler={this.onBackPress}
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navTitle}
      sceneStyle={styles.routerScene}>
      <Scene key="root" hideNavBar>
        <Drawer
          contentComponent={SideBar}
          key={'drawer'}
          leftTitle={() => (
            <Icon name="menu" size={24} color={Colors.TEMPLATE_COLOR} />
          )}
          drawerWidth={Metrics.WIDTH * 0.7}
          drawerPosition={'left'}
          open={false}>
          <Tabs
            panHandlers={null}
            translucent={true}
            key="tabbar"
            lazy
            unmountScenes={true} // en son eklenen
            swipeEnabled={false}
            animationEnabled={false}
            showLabel={false}
            tabBarPosition={'bottom'}
            icon={TabContent}
            backTitle={' '}
           >
            <Scene key="Home" title="Home" component={Home} />
            <Scene key="Scene1" title="Scene1" component={Scene1} />
            <Scene key="Scene2" title="Scene2" component={Scene2} />
            <Scene key="Scene3" title="Scene3" component={Scene3} />
          </Tabs>
        </Drawer>
      </Scene>
    </Router>
  );
};
export default Navigation;
