import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import {themeContext} from '../../Context'
import { useContext } from "react";
import './Contact.css'
export const Contact = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done,setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5y1rroh', 'template_wb2o67x', form.current, 'Rz6bzaygqNZJLIE1l')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background:'#ABF1FF94'}}>
                </div>
            </div>
        </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' classname="user" placeholder='Name'/>
                    <input type='text' name='user_email' classname="user" placeholder='Email'/>
                    <textarea name='message' className="user" placeholder='Message'/>
                    <input type='submit' value='Send' classname='button' id='btn' />
                    <span>{done && "Thanks For Contacting Me!"}</span>
                <div
                 className='blur c-blur1'
                 style={{background: 'var(--purple)'}}>
                 </div>
                </form>
            </div>
    </div>
  )
}
