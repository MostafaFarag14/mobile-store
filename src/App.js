import React from 'react';
import './App.css';
import SearchAppBar from "./components/header/header";
import Collection from './components/collection/collection'
function App() {
  return (
    <div className='App'>
      <SearchAppBar />
      <Collection />
    </div>
  );
}

export default App;
