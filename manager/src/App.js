import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
