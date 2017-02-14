import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection, Input } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
state = { loggedIn: null }

  componentWillMount() { 
    firebase.initializeApp({
      apiKey: 'AIzaSyDY3NJsTnTlBKPs3_aMyqUKQcacIC0YJ1Y',
      authDomain: 'auth-e3054.firebaseapp.com',
      databaseURL: 'https://auth-e3054.firebaseio.com',
      storageBucket: 'auth-e3054.appspot.com',
      messagingSenderId: '1022561856623'
    });
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });        
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPressed={() => firebase.auth().signOut()}>Logout</Button> 
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }   
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
