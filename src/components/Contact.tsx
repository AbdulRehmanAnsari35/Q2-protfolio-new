import React from 'react'
import { IoMail } from "react-icons/io5";
import { BsFillTelephonePlusFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl text-[#86c232]' data-aos="zoom-in-down">Get in touch</h2>
            <p className='text-black-600 text-[18px] pt-2' data-aos="zoom-in-down">
                Drop me a mail, give me a call,or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-down">
                 <IoMail size={30}/> scurbgaming94@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-down">
            <BsFillTelephonePlusFill size={30} /> +92 3232863811
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                <label htmlFor="name">Name</label>
                <input type="text"  
                className='h-[40px] bg-transparent border border-yellow-500'
                id='name' />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                <label htmlFor="email">Email</label>
                <input type="text"  
                className='h-[40px] bg-transparent border border-yellow-500'
                id='Email' />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                <label htmlFor="msg">Message</label>
                <textarea  
                className='bg-transparent border border-yellow-500'
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-yellow-500 p-2 px-6 text-black' data-aos="zoom-in-down">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
