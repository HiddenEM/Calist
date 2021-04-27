/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from '../styles/GeneralStyles.js';
import manage_logout from '../components/FireB.js'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class LogoutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        manage_logout(this.props.navigation)
    );
  }
}