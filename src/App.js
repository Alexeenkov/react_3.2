import './App.css';
import React from 'react';
import list from './data/data.json';
import Listing from './components/Listing/Listing';

function App() {
  return (
    <Listing list={list} />
  );
}

export default App;
