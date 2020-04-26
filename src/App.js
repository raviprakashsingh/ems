import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import Navbar from './components/layout/Navbar';
import Menu from './components/layout/Menu';
import AddCustomer from './components/forms/AddCustomer';
import AddDevice from './components/forms/AddDevice';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Menu />
      {/* <AddCustomer /> */}
      <AddDevice />
    </div>
  );
}

export default App;
