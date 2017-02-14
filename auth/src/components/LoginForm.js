import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };
  
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input 
            secureTextEntry={false}
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPressed={this.onButtonPress.bind(this)}>
             Login 
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export default LoginForm;
