import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
<Header/>
<Home/>
<Experience/>
<Skills/>
<Projects/>
<Education/>
<Footer/>
    </div>
  );
}

export default App;
