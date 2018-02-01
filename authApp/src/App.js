import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCvwR9Vfu3910czs4JR0mV751slC2e_sxg',
      authDomain: 'auth-c48ec.firebaseapp.com',
      databaseURL: 'https://auth-c48ec.firebaseio.com',
      projectId: 'auth-c48ec',
      storageBucket: 'auth-c48ec.appspot.com',
      messagingSenderId: '464395373222'
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
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
      return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
