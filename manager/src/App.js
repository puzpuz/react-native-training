import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import { } from './components/common';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB6hZYxGUri8bQwtpGoxh0J8aDaUljLHiw',
      authDomain: 'manager-e6823.firebaseapp.com',
      databaseURL: 'https://manager-e6823.firebaseio.com',
      storageBucket: 'manager-e6823.appspot.com',
      messagingSenderId: '803200002400'
    };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Text> Hello </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
