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
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import {manage_gender} from '../../components/FireB.js';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class GetGenderScreen extends React.Component {
  constructor(props) {
    super(props);
    global.gender = 0;

    this.state = {
        selectedIndex: -1,
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
                    Quel est votre sexe?
                </Text>
            </View>
            <View style={{flex: 1, marginLeft: 120, marginRight: 120}}>
                <SegmentedControl
                    values={['Male', 'Female', 'Other']}
                    selectedIndex={this.state.selectedIndex}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                        global.gender = this.state.selectedIndex;
                    }}
                />
            </View>
            <View style={[styles.container, {flex: 1}]}>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => manage_gender(this.props.navigation)}>
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