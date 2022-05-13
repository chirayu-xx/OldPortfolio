import React from 'react'
import { Toogle } from '../Toogle/Toogle'
import './Navbar.css'
import { Link } from 'react-scroll/modules'

export const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Chirayu</div>
            <Toogle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>   
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>   
                    </Link>
                    <Link spy={true} to='Experiance' smooth={true} >
                    <li>Experiance</li>   
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li>   
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} >
                    <li>Tesimonials</li>   
                    </Link>
                </ul>
            </div>
           <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>       
            <button className="button n-button">
                Contact
            </button>
                    </Link>
        </div>
    </div>
  )
}
