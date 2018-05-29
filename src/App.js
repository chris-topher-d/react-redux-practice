import React, { Component } from 'react';
import Postform from './components/Postform';
import Posts from './components/Posts';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/configureStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>React-Redux Intro</h1>
          <Postform />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
