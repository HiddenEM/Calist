/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  NativeModules,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles/GeneralStyles.js';

import {manage_login} from '../components/FireB.js';
import TwitterButton from '../components/TwitterButton';

//Facebook
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { Settings } from 'react-native-fbsdk-next';
import { LoginManager } from "react-native-fbsdk-next";

Settings.initializeSDK();

//Consts
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    global.username = 'username';
  
    global.gender = 'undefined',
    global.currentWeight = '0',
    global.weightGoal = '0',
    global.size = '0'

    this.state = {
      email : 'email',
      password : 'password',
      emailErr : false,
      passwordErr : false,
    }
  }

  manage_facebook()
  {
    if (Platform.OS === "android") {
      LoginManager.setLoginBehavior("web_only")
    }
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
          this.props.navigation.navigate("App");
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  async manage_twitter()
  {
    // Perform the login request
    const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();

    // Create a Twitter credential with the tokens
    const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);

    // Sign-in the user with the credential
    return auth().signInWithCredential(twitterCredential);
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
          <View style={[styles.container, {flex: 0.66}]}></View>
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
              Veuillez vous connecter
            </Text>
          </View>
          <View style={[styles.container, {flex: 0.66}]}>
            <TextInput
              style={this.state.emailErr ? styles.text_input_error : styles.text_input_white_border}
              keyboardType="email-address"
              placeholder="Adresse e-mail"
              autoCapitalize="none"
              placeholderTextColor="grey"
              onChangeText={emailText => {
                this.setState({email : emailText});
              }}
            />
          </View>
          <View style={[styles.container, {flex: 0.66}]}>
            <TextInput
              style={this.state.passwordErr ? styles.text_input_error : styles.text_input_white_border}
              secureTextEntry={true}
              keyboardType="default"
              placeholder="Mot de passe"
              autoCapitalize="none"
              placeholderTextColor="grey"
              onChangeText={passwordText => {
                this.setState({password : passwordText});
              }}
            />
          </View>
          <View style={[styles.container, {flex: 1}]}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => manage_login(this.props.navigation, this.state.email, this.state.password)}>
              <Text
                style={[
                  styles.text_25_white_bold,
                  {
                    paddingBottom: ScreenHeight / 20,
                    textShadowColor: 'black',
                    textShadowRadius: 5,
                  },
                ]}>
                Connexion
              </Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.container, {flex: 1}]}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.manage_facebook()}>
              <Text
                style={[
                  styles.text_25_white_bold,
                  {
                    paddingBottom: ScreenHeight / 20,
                    textShadowColor: 'black',
                    textShadowRadius: 5,
                  },
                ]}>
                Connexion avec Facebook
              </Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.container, {flex: 1}]}>
            <TwitterButton style={styles.button} />
          </View>
          <View style={[styles.container, {flex: 1}]}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text
                style={[
                  styles.text_16_white_under,
                  {
                    paddingTop: ScreenHeight / 40,
                    textShadowColor: 'black',
                    textShadowRadius: 5
                  },
                ]}>
                Pas encore de compte ? S'inscrire
              </Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
