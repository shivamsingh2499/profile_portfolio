import React from 'react'
import Navbar from './componentss/Navbar/Navbar';
import './App.css';
import Intro from './componentss/Intro/Intro';
import Services from './componentss/Services/Services';
import Experience from './componentss/Experience/Experience';
import Works from './componentss/Works/Works';
import Portfolio from './componentss/Portfolio/Portfolio';
import Testimonial from './componentss/Testimonial/Testimonial';
import Contact from './componentss/Contact/Contact';
import Footer from './componentss/Footer/Footer';
import {themeContext} from './Context';
import {useContext} from 'react';
 function App() {
   const theme=useContext(themeContext);
   const darkMode=theme.state.darkMode;
  return (
    <div className='App'
    style={{
      background: darkMode ? 'black':'',
      color:darkMode ? 'white':''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;