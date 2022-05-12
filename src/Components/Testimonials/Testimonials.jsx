import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import SwiperCore, { Autoplay } from 'swiper';

export const Testimonials = () => {
    SwiperCore.use([Autoplay])
   const clients = [
        {
            img: profilePic1,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt nisi qui quisquam perspiciatis beatae necessitatibus ullam tenetur esse, voluptatem, libero enim nobis. Officia tenetur consequatur ipsum cum! Consequuntur "
        },
        {
            img: profilePic2,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt nisi qui quisquam perspiciatis beatae necessitatibus ullam tenetur esse, voluptatem, libero enim nobis. Officia tenetur consequatur ipsum cum! Consequuntur q"
        },
        {
            img: profilePic3,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt nisi qui quisquam perspiciatis beatae necessitatibus ullam tenetur esse, voluptatem, libero enim nobis. Officia tenetur consequatur ipsum cum! Consequuntur ?"
        },
        {
            img: profilePic4,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt nisi qui quisquam perspiciatis beatae necessitatibus ullam tenetur esse, voluptatem, libero enim nobis. Officia tenetur consequatur ipsum cum! Consequunture?"
        },
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Clients Always get </span>
            <span>Great Work </span>
            <span>From Me</span>
        </div>
        <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonials'>
                        
                        <img src={client.img} alt=''/>
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}
