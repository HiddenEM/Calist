/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';
import styles from '../styles/GeneralStyles.js';
import UserAvatar from 'react-native-user-avatar';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container_white, {flex: 1}]}>
        <TouchableHighlight>
          <Image
            source={require('../../assets/images/gear.png')}
            style={{width: 32, height: 32, marginTop: 15, marginLeft: 290}}
          />
        </TouchableHighlight>
        <ScrollView
          contentContainerStyle={[
            styles.container_white,
            {backgroundColor: 'transparent', paddingTop: 50},
          ]}>
          <UserAvatar size={100} name={global.username} bgColor="#333333" />
          <Text style={[styles.text_30_red, {paddingTop: 10}]}>
            {global.username}
          </Text>
        </ScrollView>
      </View>
    );
  }
}