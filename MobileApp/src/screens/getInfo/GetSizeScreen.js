/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../../styles/GeneralStyles.js';

import {manage_size} from '../../components/FireB.js';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class GetSizeScreen extends React.Component {
  constructor(props) {
    super(props);
    global.size = 'undefined';

    this.state = {
      sizeErr : false,
    }
  }

  render() {  
    return (
        <View style={[styles.container, {flex: 1}]}>
          <ImageBackground
          source={require('../../../assets/images/bg2.png')}
          style={{width: '140%', height: '100%'}}>
            <View style={[styles.container, {flex: 1}]}>
                <Text style={[
                    styles.text_23_black,
                    {
                        paddingTop: ScreenHeight / 20,
                        textShadowColor: 'black',
                        textShadowRadius: 6,
                    },
                ]}>
                    Quelle est votre taille? (cm)
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={this.state.sizeErr ? styles.text_input_error : styles.text_input_white_border}
                    keyboardType="default"
                    placeholder="Type your size here"
                    autoCapitalize="sentences"
                    placeholderTextColor="grey"
                    onChangeText={sizeText => {
                        global.size = sizeText;
                    }}
                />
            </View>
            <View style={[styles.container, {flex: 1}]}>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => manage_size(this.props.navigation)}>
                    <Text
                        style={[
                        styles.text_30_black,
                        {
                            paddingBottom: ScreenHeight / 20,
                            textShadowColor: 'black',
                            textShadowRadius: 5,
                        },
                        ]}>
                        Suivant
                    </Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
      </View>
    )}
}