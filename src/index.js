import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from '../src/components/navigationBar'
import Footer from '../src/components/footer'



ReactDOM.render(

  <React.StrictMode>
  <Nav/>
    <App />
  <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);