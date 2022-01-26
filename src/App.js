import React from 'react';
import './App.css';
import AlbumGallery from './components/AlbumGallery';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {initialState, albumReducer } from './reducers/albumReducer.js';

const store = createStore(albumReducer, initialState);

const App = () => {

  return (
    <Provider store={store}>
      <header className="App-header"> 
      <img src='./images/smugmug.svg' className="App-logo" alt="logo" />
      </header>
      <AlbumGallery/>
    </Provider>
  );
}

export default App;
