import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ImageBackground,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import Modal from 'react-native-modal';
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
  state = { today: null, isModalVisible: false };
  componentWillMount() {
    this.player = null;
    this.setState({
      today: new Date().getDate().toString()
    });
  }

  onButtonPress(day) {
    this._showModal();
    this.player = new Player('01.mp3', {
      autoDestroy: false
    }).play();
  }

  pauseAudio() {
    this.player.pause();
  }

  stopAudio() {
    this.player.stop();
  }

  renderCalendar(days) {
    return days.map((d, i) => {
      let tmpStyle, tmpTxtStyle;
      if (d > 10) {
        tmpStyle = {
          top: POS[i].y,
          left: POS[i].x,
          position: 'absolute',
          backgroundColor: 'white',
          borderWidth: 0.5,
          borderColor: '#333',
          opacity: 0.3,
          width: 60,
          height: 45
        };
        tmpTxtStyle = {
          color: '#333',
          textAlign: 'center',
          paddingTop: 15
        };
      } else {
        tmpStyle = {
          top: POS[i].y,
          left: POS[i].x,
          position: 'absolute',
          backgroundColor: '#888',
          opacity: 0.8,
          borderWidth: 0.5,
          borderColor: '#d6d7da',
          width: 60,
          height: 45 //,
          // transform: [{ perspective: 1300 }, { rotateY: '35deg' }]
        };
        tmpTxtStyle = {
          color: '#fff',
          textAlign: 'center',
          paddingTop: 15
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
          <Text style={tmpTxtStyle}>{d}</Text>
        </TouchableHighlight>
      );
    });
  }
  _showModal = () => this.setState({ isModalVisible: true });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: this.state.today + '.jpg' }}
          style={{
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        >
          {this.renderCalendar(DAYS)}
        </ImageBackground>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          <View style={{ backgroundColor: 'white' }}>
            <Button
              onPress={this.pauseAudio.bind(this)}
              title="Pause"
              ostyle={styles.buttonStyle}
              color="#ff6600"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={this.stopAudio.bind(this)}
              title="Stop"
              ostyle={styles.buttonStyle}
              color="#ff6600"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: '#fff'
  }
};

export default App;
