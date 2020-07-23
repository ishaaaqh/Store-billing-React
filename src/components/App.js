import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigureStore } from '../store/configureStore';
import Demo from './Demo/Demo';
import './App.css';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>React app</h1>
          <Demo />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
