import { useState } from 'react'
import emailjs from 'emailjs-com';
import PrimaryBtn from '../../components/atom/button'
import linkedin from "../../assets/linkedin.svg"
import instragram from "../../assets/Instagram.svg"
import twitter from "../../assets/twitter.svg"
import github from "../../assets/github.svg"
import styles from "./contact.module.css"

export default function Contact() {
  const handleSendEmail = () => {


    // Replace 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', and 'YOUR_EMAILJS_USER_ID' with your own values
    const serviceId = 'service_2vcgsha';
    const templateId = 'template_d7wzcae';
    const userId = 'pkBapqdXmwbMkcE8C';


    // EmailJS parameters
    const templateParams = {
      email: email,
      message: message,
      number: number,
      subject: subject,
      name: name,
      reply_to: email,
    };
    console.log(templateParams)
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');



  return (
    <div><section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight  text-center text-gray-900 "><span className={styles.custom_text_shadow} >Contact Me</span></h2>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 " placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Number</label>
            <input type="text" id="phone number" onChange={(e) => setNumber(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 " placeholder="Phone Number" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
            <input type="text" id="subject" onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-secondary-500 focus:border-secondary-500 " placeholder="Subject" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900dark:text-gray-400">Your message</label>
            <textarea id="message" rows={6} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-secondary-500 focus:border-secondary-500 " placeholder="Leave a comment..."></textarea>
          </div >
          <center>
        <div className='justify-center items-center self-center pl-8'>
            <PrimaryBtn
              title="Send Message"
              onClick={handleSendEmail}
            />
        </div>
        </center>
        </form>
        <center>
          
        <h2 className="mb-4 p-2 tracking-tight font-medium left-3 text-gray-900 ">Get in touch</h2>
        <div className='flex flex-row gap-3 justify-center'>
          <a href="https://www.instagram.com/vinithsvk/" target="_blank" rel="noopener noreferrer">
            <button>
              <img src={instragram} className='w-10 h-10'></img>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/vinithkumar27/" target="_blank" rel="noopener noreferrer">
            <button>
              <img src={linkedin} className='w-10 h-10'></img>
            </button>
          </a>
          <a href=" https://twitter.com/Vinithkumar27?t=xeGXjS4e2N9tw8AcwrggaA&s=08" target="_blank" rel="noopener noreferrer">
            <button>
              <img src={twitter} className='w-10 h-10'></img>
            </button>
          </a>
           <a href=" https://github.com/vinith4" target="_blank" rel="noopener noreferrer">
            <button>
              <img src={github} className='w-10 h-10'></img>
            </button>
          </a>
        </div>
        </center>
      </div>
    </section></div>
  )
}
