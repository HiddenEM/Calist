/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/GeneralStyles.js';
import {manage_register} from '../components/FireB.js'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    global.email = 'email';
    global.username = 'username';
    global.password = 'password';
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/bg1.jpg')}
          style={{width: '135%', height: '100%'}}>
          <Image
              source={require('../../assets/images/logoCalist.png')}
              style={{
                marginTop: 30,
                marginLeft: 110,
                marginRight: 110,
                flex: 1.8,
                resizeMode: 'contain',
                alignSelf: 'stretch',
                width: undefined,
                height: undefined}}
            />
          <View style={[styles.container, {flex: 0.5}]}></View>
          <View style={[styles.container, {flex: 1}]}>
            <Text
              style={[
                styles.text_23_white,
                {
                  paddingTop: ScreenHeight / 20,
                  textShadowColor: 'black',
                  textShadowRadius: 8,
                },
              ]}>
              Veuillez créer un nouveau compte
            </Text>
          </View>
          <View style={[styles.container, {flex: 0.66}]}>
              <TextInput
                style={styles.text_input_white_border}
                keyboardType="email-address"
                placeholder="Adresse e-mail"
                autoCapitalize="none"
                placeholderTextColor="grey"
                onChangeText={emailText => {
                  global.email = emailText;
                }}
              />
            </View>
            <View style={[styles.container, {flex: 0.66}]}>
              <TextInput
                style={styles.text_input_white_border}
                keyboardType="default"
                placeholder="Nom d'utilisateur"
                autoCapitalize="none"
                placeholderTextColor="grey"
                onChangeText={usernameText => {
                  global.username = usernameText;
                }}
              />
            </View>
            <View style={[styles.container, {flex: 0.66}]}>
              <TextInput
                style={styles.text_input_white_border}
                secureTextEntry={true}
                keyboardType="default"
                placeholder="Mot de passe"
                autoCapitalize="none"
                placeholderTextColor="grey"
                onChangeText={passwordText => {
                  global.password = passwordText;
                }}
              />
            </View>
          <View style={[styles.container, {flex: 1}]}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => manage_register(this.props.navigation)}>
              <Text
                style={[
                  styles.text_25_white_bold,
                  {
                    paddingBottom: ScreenHeight / 20,
                    textShadowColor: 'black',
                    textShadowRadius: 5,
                  },
                ]}>
                Créer un compte
              </Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.container, {flex: 1}]}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text
                style={[
                  styles.text_16_white_under,
                  {
                    paddingTop: ScreenHeight / 40,
                    textShadowColor: 'black',
                    textShadowRadius: 5
                  },
                ]}>
                Déjà un compte ? Se connecter
              </Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}