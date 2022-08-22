import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {
  const [mode , setmode] = useState('light');

const thus = ()=>{
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#09081c'
  } 
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
  }
}
  return (
    <>
    <Router>
    <Navbar title="Textutils" set = {mode} toggle ={thus} page="Home"/>
    <Routes 
>
      <Route exact path="/about" element={<About set = {mode}/> }/>
      <Route exact path="/" element={<TextForm set = {mode}/>}/>
      
      
    </Routes>
    </Router>
    </>
  );
}

export default App;


