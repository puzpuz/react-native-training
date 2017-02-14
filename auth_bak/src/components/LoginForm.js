import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }
  renderButton() {
    if (this.statte.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPressed={this.onButtonPress.bind(this)}>
            Login 
        </Button>
    );
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
          {this.renderButton()}          
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
