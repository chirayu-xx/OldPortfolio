import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'

export const Intro = () => {
  const transition = {duration: 2, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return ( 
    <div className='intro'>
        <div className="i-left">
          <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Heya, I Am</span>
            <span>Chirayu Shah</span>
            <span style={{color: darkMode? 'white': ''}} >Jolly Developer, that you can work with complete fun !</span>
          </div>
          <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                      
          <button className="button i-button">Hire Me</button>
                    </Link>
          <div className="i-icons">
            <a href='https://github.com/chirayu-xx' target='_blank' rel="noreferrer">
            <img src={GitHub} alt='github' />
            </a>
            <a href='https://www.instagram.com/chirayu_xx/' target='_blank' rel="noreferrer">
            <img src={Instagram} alt='insta' />
            </a>
            <a href='https://www.linkedin.com/in/chirayu-shah-367a831a0/' target='_blank' rel="noreferrer">
            <img src={LinkedIn} alt='linkedin' />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img 
          className='floating-div'
          initial={{left:'-36%'}}
          whileInView={{left:'-24%'}}
          transition= {transition}
          src={glassesimoji} alt="" />
          <motion.div
          className='floating-div'
          initial= {{top:'-4%', left:'74%'}}
          whileInView={{left:'68%'}}
          transition={transition}
          style={{top: '-4%', left:'68%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2= 'Developer'/>
          </motion.div>
          <motion.div
          initial= {{top:'18.2rem', left:'9rem'}}
          whileInView={{left:'1.8rem'}}
          transition={transition}
          className='floating-div'
          style={{top: '18rem', left:'1.9rem'}}>
          <FloatingDiv image={thumbup} txt1='Web' txt2= 'Designs'/>
          </motion.div>
          <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
          <div className='blur' style={{
            background: '#C1F5FF',
            top: '17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        }}></div>
        </div>
    </div>
  )
}
