/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
  DrawerItems,
} from 'react-navigation-drawer';

import {Avatar, Divider} from 'react-native-elements'; //MOVE TO COMPONENTS
import styles from './src/styles/GeneralStyles.js'; //MOVE TO COMPONENTS
/// Views
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LogoutScreen from './src/screens/LogoutScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import GetGenderScreen from './src/screens/getInfo/GetGenderScreen';
import GetCurrentWeightScreen from './src/screens/getInfo/GetCurrentWeightScreen';
import GetSizeScreen from './src/screens/getInfo/GetSizeScreen';
import GetWeightGoalScreen from './src/screens/getInfo/GetWeightGoalScreen';

/// Components
//--Empty

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/images/drawer.png')}
            style={{width: 25, height: 25, marginLeft: 15}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class DrawerComponent extends React.Component {
  render() {
    return (
      <View style={[styles.container_white, {flex: 1, alignItems: 'flex-start'}]}>
        <View style={[styles.container_white, {flex: 1, alignItems: 'flex-start', width: ScreenWidth / 1.4}]}>
          <ScrollView>
            <DrawerItems {...this.props} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const LogoutScreen_params = createStackNavigator({
  Second: {
    screen: LogoutScreen,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerTransparent: true,
    }),
  },
});

const ProfileScreen_params = createStackNavigator({
  Second: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerTransparent: true,
    }),
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen_params,
      navigationOptions: {
        drawerLabel: 'Mon profil',
      },
    },
    LogoutScreen: {
      screen: LogoutScreen_params,
      navigationOptions: {
        drawerLabel: 'Me déconnecter',
      },
    },
  },
  {
    initialRouteName: 'ProfileScreen',
    contentComponent: DrawerComponent,
    drawerWidth: ScreenWidth / 1.5,
    contentOptions: {
      inactiveTintColor: '#333333',
      activeTintColor: '#888888',
    },
  },
);

const GetInfoNavigator = createSwitchNavigator(
  {
    GetGender: GetGenderScreen,
    GetCurrentWeight: GetCurrentWeightScreen,
    GetSize: GetSizeScreen,
    GetWeightGoal: GetWeightGoalScreen,
  },
  {
    initialRouteName: 'GetGender',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    App: DrawerNavigator,
    GetInfo: GetInfoNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RootNavigator);
