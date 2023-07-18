import React, { useEffect, useState } from 'react';
import "./Landing.module.css"
import developer from "../../assets/developer.png"

export default function LandingPage() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(true);
    const typingSpeed = 200; // The speed of typing (in milliseconds)
    const deleteSpeed = 200; // The speed of deleting (in milliseconds)
    const delayAfterTyping = 300; // Delay after typing (in milliseconds)
    const delayAfterDeleting = 300; // Delay after deleting (in milliseconds)
    const words = [
      "W", "WE", "WEB", "WEB ", "WEB D", "WEB DE", "WEB DEV", "WEB DEVE",
      "WEB DEVEL", "WEB DEVELO", "WEB DEVELOP", "WEB DEVELOPE", "WEB DEVELOPER"
    ]; // Words to animate
    
    useEffect(() => {
      let index = 12;
      let currentText = 'WEB DEVELOPER';
      let isComplete = false;
    
      const typeText = () => {
        if (!isComplete) {
          if (!isDeleting) {
            currentText = words[index];
    
            if (index === words.length - 1) {
              setIsDeleting(true);
              console.log(isDeleting);
              setTimeout(typeText, delayAfterDeleting);
            } else {
              index++;
              setTimeout(typeText, typingSpeed);
            }
          } else {
            currentText = words[index];
            index--;
    
            if (index < 0) {
              setIsDeleting(false);
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
    
    
    const colour ='blue';
    // console.log(colour);
    return (
        <div className={`bg-${colour}-100 my-6 mx-6 items-center `}>
        <div className='grid grid-cols-2 p-12'>
            <div>
                <div>
                <h4>Hi,</h4>
                </div>
                <div>
                <h2>VINITHKUMAR S</h2>
                </div>
                <div>
                <h2 className={`relative inline-flex gap-1 text-${colour}-500   `}>
  <span>{text}</span>
  <span className={`absolute top-0 -right-1 rounded-sm h-full w-0.5  bg-${colour}-500     animate-blink`}></span>
</h2>


                </div>
            </div>
            <div className="flex justify-center pb-16 ">
                <div className={`w-96 h-96   pl-3 rounded-full  bg-${colour}-500  border-2 border-${colour}-300 animate-circle order-1`}></div>
                <div className="animate-slideRight absolute pt-8 pl-4 order-2">
                    <img src={developer} className="w-96 z-10" alt='Developer' />
                </div>
            </div>
            </div>

        </div>
    )
}
