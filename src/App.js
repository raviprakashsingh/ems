import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import Navbar from './components/layout/Navbar';
import Menu from './components/layout/Menu';
import AddCustomer from './components/forms/AddCustomer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Menu />
      <AddCustomer />
    </div>
  );
}

export default App;
