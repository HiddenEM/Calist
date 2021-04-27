import React from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  Dimensions,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from '../styles/GeneralStyles.js';

const {RNTwitterSignIn} = NativeModules;

const Constants = {
  //Dev Parse keys
  TWITTER_COMSUMER_KEY: 'WN0beFYcgif5h2GePdfctjQBO',
  TWITTER_CONSUMER_SECRET: '5BWCvdifO4cN5ICnQw6Ca1YERp1bn3mOk6aAPSxP4VIEBZdxzG',
};

//Consts
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class TwitterButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    console.log('logout');
    RNTwitterSignIn.logOut();
    this.setState({
      isLoggedIn: false,
    });
  };

  handleLogin(navigation) {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );
    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData);
        const {authToken, authTokenSecret} = loginData;
        if (authToken && authTokenSecret) {
          global.email = loginData.email;
          global.username = loginData.userName;
          navigation.navigate('App');
        }
      })
      .catch(error => {
        console.log(error);
        if (error != 'Error: Authorize failed.')
          ToastAndroid.show('Une erreur est survenue, veuillez réessayer', 3);
      });
  }

  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.handleLogin(this.props.navigation)}>
          <Text
            style={[
              styles.text_25_white_bold,
              {
                paddingBottom: ScreenHeight / 20,
                textShadowColor: 'black',
                textShadowRadius: 5,
              },
            ]}>
            Connexion avec Twitter
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/*render() {
    const { isLoggedIn } = this.state
    return (
      <View style={this.props.style}>
        {isLoggedIn
          ? <TouchableOpacity onPress={this.handleLogout}>
              <Text>Log out</Text>
            </TouchableOpacity>
          : <Button name="logo-twitter" style={styles.button} onPress={this._twitterSignIn} title="Login with Twitter">
            </Button>}
      </View>
    )
  }
}*/

export default withNavigation (TwitterButton)