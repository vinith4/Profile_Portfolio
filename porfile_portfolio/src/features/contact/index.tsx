import  { useState } from 'react'
import emailjs from 'emailjs-com';
import PrimaryBtn from '../../components/atom/button'

export default function Contact () {
    const handleSendEmail = () => {
       
    
        // Replace 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', and 'YOUR_EMAILJS_USER_ID' with your own values
        const serviceId = 'service_2vcgsha';
        const templateId = 'template_d7wzcae';
        const userId = 'pkBapqdXmwbMkcE8C';
       
    
        // EmailJS parameters
        const templateParams = {
          email: email,
          message:message,
          number:number,
          subject:subject,
          name: name,
          reply_to: email,
        };
      console.log(templateParams)
        emailjs.send(serviceId, templateId,templateParams, userId)
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
    <div><section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email"  onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="email" id="email"  onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500 dark:shadow-sm-light" placeholder="Your name" required/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number</label>
                <input type="email" id="email"  onChange={(e) => setNumber(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500 dark:shadow-sm-light" placeholder="Phone Number" required/>
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject"  onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-secondary-500 focus:border-secondary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows={6}    onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500" placeholder="Leave a comment..."></textarea>
            </div>
           <PrimaryBtn
           title ="Send Message"
           onClick={handleSendEmail}
           />
          </form>
    </div>
  </section></div>
  )
}
