import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from './router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
