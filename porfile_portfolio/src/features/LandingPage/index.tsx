import React, { useEffect, useState } from 'react';
import "./Landing.module.css"
import developer from "../../assets/developer.png"

export default function LandingPage() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(true);
  const typingSpeed = 300; // The speed of typing (in milliseconds)
  const deleteSpeed = 300; // The speed of deleting (in milliseconds)
  const delayAfterTyping = 300; // Delay after typing (in milliseconds)
  const delayAfterDeleting = 300; // Delay after deleting (in milliseconds)
  const words = [
    "W", "WE", "WEB", "WEB ", "WEB D", "WEB DE", "WEB DEV", "WEB DEVE",
    "WEB DEVEL", "WEB DEVELO", "WEB DEVELOP", "WEB DEVELOPE", "WEB DEVELOPER"
  ]; // Words to animate


  useEffect(() => {
    let index = 0;
    let indexd = 0;
    let currentText = 'WEB DEVELOPER';
    let isComplete = false;

    const typeText = () => {
      if (!isComplete) {
        if (indexd === 0) {
          currentText = words[index];

          if (index === words.length - 1) {
            setIsDeleting(true);
            indexd = 12;

            setTimeout(typeText, delayAfterDeleting);
          } else {
            index++;
            setTimeout(typeText, typingSpeed);
          }
        } else {
          currentText = words[index];
          index--;

          if (index < 1) {
            setIsDeleting(false);
            indexd = 0;
            setTimeout(typeText, delayAfterTyping);
          } else {
            setTimeout(typeText, deleteSpeed);
          }
        }

        setText(currentText);

      }
    };

    typeText();

    return () => {
      clearTimeout();
    };
  }, []);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const colour = 'red';
  // console.log(colour);
  return (
    <div className={`bg-blue-100 my-6 mx-6 items-center `}>
      <div className='grid grid-cols-2 p-12'>
        <div className={` flex flex-col self-center gap-6  animate-upwards transform transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={` gap-12 text-lg transform transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className=''>Hi,</h2>
          </div>
          <div className={`text-black drop-shadow-lg shadow-blue-600 transform text-5xl transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  <h1>VINITHKUMAR S</h1>
</div>

          <div className={`transform transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`relative inline-flex gap-1 text-blue-500   `}>
              <span className='text-3xl'>{text}</span>
              <span className={`absolute top-0 -right-1 rounded-sm h-full w-0.5  bg-blue-500     animate-blink`}></span>
            </h2>
          </div>
          <div className={`transform transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className='btn border border-b-2 bg-blue-500 px-3 py-1 text-white rounded-lg mr-8 hover:bg-white hover:border-blue-500  hover:text-blue-500 '><p className={`transform transition-transform duration-500 ${'hover:' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Contact</p></button>
            <button className='btn border border-b-2 bg-blue-500 px-3 py-1 text-white rounded-lg mr-8 hover:bg-white hover:border-blue-500 hover:animate-bounce hover:text-blue-500 '>Portfolio</button>
          </div>
          <div className="group">
  <button className="transform transition-transform duration-500 group-hover:-translate-y-10 group-hover:opacity-0">
    Button
  </button>
</div>
        </div>
        <div className="flex justify-center pb-16 ">
          <div className={`w-96 h-96   pl-3 rounded-full  bg-blue-500  border-2 border-blue-300 animate-circle order-1`}></div>
          <div className="animate-slideRight absolute pt-8 pl-4 order-2">
            <img src={developer} className="w-96 z-10" alt='Developer' />
          </div>
        </div>
      </div>

    </div>
  )
}
