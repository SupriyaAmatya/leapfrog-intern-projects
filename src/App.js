import React, { Component } from 'react';
import './styles/styles.css'

import Header from './components/Header';
import Testimonial from './components/Testimonial';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';


class App extends Component{
  render(){
    return(
      <div className ="App">
        <Header />
        <Testimonial />
        <Projects />
        <Footer/>
      </div>
    )
  }
  
}

export default App;
