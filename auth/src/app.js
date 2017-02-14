import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() { 
    firebase.initializeApp({
    apiKey: 'AIzaSyDY3NJsTnTlBKPs3_aMyqUKQcacIC0YJ1Y',
    authDomain: 'auth-e3054.firebaseapp.com',
    databaseURL: 'https://auth-e3054.firebaseio.com',
    storageBucket: 'auth-e3054.appspot.com',
    messagingSenderId: '1022561856623'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
