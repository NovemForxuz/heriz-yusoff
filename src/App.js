import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h4>Hi Heriz,</h4>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
