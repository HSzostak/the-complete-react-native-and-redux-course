import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAGepdu8DNdOsppFHHc5Vj5UIf7MmDHAB0',
      authDomain: 'manager-8605c.firebaseapp.com',
      databaseURL: 'https://manager-8605c.firebaseio.com',
      projectId: 'manager-8605c',
      storageBucket: 'manager-8605c.appspot.com',
      messagingSenderId: '340304054975'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
