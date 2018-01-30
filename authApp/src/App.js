import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCvwR9Vfu3910czs4JR0mV751slC2e_sxg',
      authDomain: 'auth-c48ec.firebaseapp.com',
      databaseURL: 'https://auth-c48ec.firebaseio.com',
      projectId: 'auth-c48ec',
      storageBucket: 'auth-c48ec.appspot.com',
      messagingSenderId: '464395373222'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
