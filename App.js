/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import { Player } from 'react-native-audio-toolkit';

const DAYS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24'
];
const POS = [
  { x: 10, y: 30 }, //1
  { x: 90, y: 550 }, //2
  { x: 240, y: 400 }, //3
  { x: 97, y: 330 }, //4
  { x: 23, y: 340 }, //5
  { x: 159, y: 352 }, //6
  { x: 244, y: 500 }, //7
  { x: 90, y: 120 }, //8
  { x: 120, y: 600 }, //9
  { x: 178, y: 460 }, //10
  { x: 100, y: 226 }, //11
  { x: 260, y: 580 }, //12
  { x: 110, y: 399 }, //13
  { x: 180, y: 210 }, //14
  { x: 310, y: 120 }, //15
  { x: 100, y: 20 }, //16
  { x: 240, y: 300 }, //17
  { x: 210, y: 100 }, //18
  { x: 10, y: 500 }, //19
  { x: 240, y: 40 }, //20
  { x: 300, y: 230 }, //21
  { x: 310, y: 330 }, //22
  { x: 400, y: 40 }, //23
  { x: 10, y: 210 } //24
];

class App extends Component {
  state = { bg: null };
  componentWillMount() {
    this.player = null;
    this.setState({
      today: new Date().getDate().toString()
    });
  }

  onButtonPress(day) {
    if (this.state.today >= day) {
      console.log('good');
    } else {
    }

    // this.setState({ bg: day + '.jpg' });
    // this.player = new Player('01.mp3', {
    //   autoDestroy: false
    // }).play();
  }
  renderCalendar(days) {
    return days.map((d, i) => {
      let tmpStyle;
      if (d > 300) {
        tmpStyle = {
          top: POS[i].y,
          left: POS[i].x,
          position: 'absolute',
          backgroundColor: 'white',
          opacity: 0.3,
          width: 60,
          height: 45
        };
      } else {
        tmpStyle = {
          top: POS[i].y,
          left: POS[i].x,
          position: 'absolute',
          backgroundColor: '#333',
          opacity: 0.8,
          width: 60,
          height: 45 //,
          // transform: [
          //   { perspective: 1300 },
          //   { rotateX: '60deg' },
          //   { rotateY: '35deg' }
          // ]
        };
      }

      return (
        <TouchableHighlight
          key={'key' + d}
          style={tmpStyle}
          day={d}
          underlayColor={'#333'}
          onPress={this.onButtonPress.bind(this, d)}
        >
          <Text
            style={{ textAlign: 'center', paddingTop: 15, color: '#ff0000' }}
          >
            {d}
          </Text>
        </TouchableHighlight>
      );
    });
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={{ uri: this.state.today + '.jpg' }}
          style={{
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        >
          {/* <Text style={{ position: 'absolute', top: 100, left: 100 }}>
            {this.date.toString()}
          </Text> */}
          {this.renderCalendar(DAYS)}
        </ImageBackground>
      </View>
    );
  }
}

export default App;
