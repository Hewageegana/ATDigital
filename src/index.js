import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from '../src/components/navigationBar'
import Footer from '../src/components/footer'
import Navbar from './components/navbar';




ReactDOM.render(

  <React.StrictMode>
  {/* <Nav/> */}
  <Navbar/>
    <App />
  <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);