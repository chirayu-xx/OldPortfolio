import { Navbar } from "./Components/Navbar/Navbar";
import './App.css'
import { Intro } from "./Components/Intro/Intro";
import { Services } from "./Components/Services/Services";
import { Experiance } from "./Components/Experiance/Experiance";
import { Works } from "./Components/Works/Works";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode? 'rgb(16,12,8)': '',
      color: darkMode? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiance/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
