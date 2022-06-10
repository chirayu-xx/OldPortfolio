import React from 'react'
import resume from '../../img/Chirayu_Shah_Resume.pdf'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { Card } from '../Card/Card'
import {themeContext} from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'
export const Services = () => {
  const transition = {duration: 1, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        <div className="awesome">
          <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
          <span>Services</span>
          <span style={{color: darkMode? 'white': ''}}>The Services which I can offer you and from which<br/> you can hire me for the job.</span>
        <a
        className="button s-button"
        href={resume}
        download
        style={{textDecoration: 'none', textAlign:'center'}}
      >
        Resume
      </a>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="cards">
          <motion.div 
            initial= {{left:'25rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
          style={{left:'17rem'}}>
            <Card
            emoji= {HeartEmoji}
            heading={'Design'}
            detail={"BootStrap, TailwindCSS, Lightroom, Google Material"}
            />
          </motion.div>  
          <motion.div 
          initial= {{top:'12rem',left:'50%'}}
          whileInView={{left:'-4rem'}}
          transition={transition}
          style={{top:"12rem", left:'-4rem'}}>
            <Card 
              emoji={Glasses}
              heading={"Developer"}
              detail={'HTML, CSS, JavaScript, React, Node, Mongo'}
              />
          </motion.div>
          <motion.div 
          initial= {{top:'19rem',left:'25%'}}
          whileInView={{left:'20rem'}}
          transition={transition}
          style={{top:"19rem", left:'12rem'}}>
            <Card 
              emoji={Humble}
              heading={"UI/UX"}
              detail={'Modern UI/UX designer, beuautiful Designs'}
              />
          </motion.div>
          <div className='blur s-blur2' style={{background:"var(--purple"}}>
          </div>
        </div>
    </div>
  )
}
