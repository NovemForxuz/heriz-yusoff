import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/heriz-yusoff/' element={<Home />}></Route>
            <Route path='/heriz-yusoff/project' element={<Project />}></Route>
            <Route path='/heriz-yusoff/about' element={<About />}></Route>
            <Route path='/heriz-yusoff/contact' element={<Contact />}></Route>
            
            <Route path='*' element={<Navigate to='/heriz-yusoff/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
