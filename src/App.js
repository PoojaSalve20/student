// App.js
import React from 'react';
import GridView from './components/GridView';
import './App.css';
import ResponsiveMenu from './components/ResponsiveMenu';

const App = () => {
  return (
    <div className="app">
    <ResponsiveMenu/>
    <main className="main-content">
      <GridView />
    </main>
  </div>
  );
};

export default App;
