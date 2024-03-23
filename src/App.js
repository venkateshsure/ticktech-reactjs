
import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ThemeSwitcher from './components/ThemeSwitcher';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './App.css';

import {Routes,Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });
  };

  render() {
    const { theme } = this.state;
    return (
      
      <div className={`${theme}`}>
        <div className='top'>
        <div className='header-themeSwitcher-con'>
            <Header />
          <ThemeSwitcher theme={theme} toggleTheme={this.toggleTheme} />
        </div>
        </div>
        <div className='app-sec-con'>
          
          <Routes>
              <Route exact path="/" element={<MainContent/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/resume" element={<Resume/>}/>
              <Route exact path="/skills" element={<Skills/>}/>
              <Route exact path="/projects" element={<Projects/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
      
    );
  }
}

export default App;
