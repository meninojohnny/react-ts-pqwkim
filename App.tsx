import * as React from 'react';
import './style.css';
import Navbar from './Layout/Navbar'
import Container from './Layout/Container'
import Footer from './Layout/Footer'
import {useState} from 'react'

export default function App() {
  var [valor, setValor] = useState('Home')

  return (
    <div className='app'>
      <Navbar setValor={setValor} />
      <Container valor={valor} setValor={setValor} />
      <Footer />
    </div>
  );
}
