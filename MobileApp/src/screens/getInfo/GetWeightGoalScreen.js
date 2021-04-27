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

import {manage_weightGoal} from '../../components/FireB.js';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class GetWeightGoalScreen extends React.Component {
  constructor(props) {
    super(props);
    global.weightGoal = 'undefined';

    this.state = {
      weightGoalErr : false,
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
                    Quel est votre objectif de poids? (kg)
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={this.state.weightGoalErr ? styles.text_input_error : styles.text_input_white_border}
                    keyboardType="default"
                    placeholder="Type your weight goal here"
                    autoCapitalize="sentences"
                    placeholderTextColor="grey"
                    onChangeText={weightGoalText => {
                        global.weightGoal = weightGoalText;
                    }}
                />
            </View>
            <View style={[styles.container, {flex: 1}]}>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => manage_weightGoal(this.props.navigation)}>
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