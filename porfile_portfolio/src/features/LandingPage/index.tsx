import { useEffect, useState } from 'react';
import "./Landing.module.css";
import developer from "../../assets/developer.png";
import PrimaryBtn from '../../components/atom/button';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../../components/atom/toggleButton';

export default function LandingPage() {
  const navigate = useNavigate();
  const [text, setText] = useState('');

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
    let timerId: number | undefined; // Variable to store the timer identifier

    const typeText = () => {
      if (!isComplete) {
        if (indexd === 0) {
          currentText = words[index];

          if (index === words.length - 1) {

            indexd = 12;
            timerId = setTimeout(typeText, delayAfterDeleting); // Store the timer identifier
          } else {
            index++;
            timerId = setTimeout(typeText, typingSpeed); // Store the timer identifier
          }
        } else {
          currentText = words[index];
          index--;

          if (index < 1) {

            indexd = 0;
            timerId = setTimeout(typeText, delayAfterTyping); // Store the timer identifier
          } else {
            timerId = setTimeout(typeText, deleteSpeed); // Store the timer identifier
          }
        }

        setText(currentText);
      }
    };

    typeText();

    return () => {
      clearTimeout(timerId); // Clear the timeout when the component is unmounted
    };
  }, []);


  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handlePortfolio = () => {
    navigate("/portfolio");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <div>
      <ToggleButton />
      {windowWidth < 450 ? (
        <div className={` h-screen justify-center items-center  self-center `}>
          <div className='flex flex-col md:flex-row md:p-6 p-3 lg:p-12 gap-6 '>
            <div className={`flex flex-col self-center gap-6 animate-upwards order-2 sm:order-1 transform transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className={`gap-12 text-lg `}>
                <h2 className=''>Hi,</h2>
              </div>
              <div className={`text-black drop-shadow-lg shadow-blue-600 transform lg:text-5xl md:text-3xl text-lg `}>
                <h1>VINITHKUMAR S</h1>
              </div>
              <div className={``}>
                <h2 className={`relative inline-flex gap-1 text-blue-500   `}>
                  <span className='lg:text-3xl md:text-3xl text-lg'>{text}</span>
                  <span className={`absolute top-0 -right-1 rounded-sm h-full w-0.5 bg-blue-500 animate-blink`}></span>
                </h2>
              </div>
              <div className={`flex row gap-6`}>
                <div>
                  <PrimaryBtn
                    title="About Me"
                    onClick={handleAbout}
                  />
                </div>
                <div>
                  <PrimaryBtn
                    title="Portfolio"
                    onClick={handlePortfolio}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-16 order-1 m:order-2">
              <div className={`w-52 h-52 md:w-60 md:h-60 lg:w-96 lg:h-96 pl-3 rounded-full bg-blue-500 border-2 border-blue-200 animate-circle order-1`}></div>
              <div className="animate-slideRight absolute pt-8 pl-4 order-2">
                <img src={developer} className="lg:w-96 md:w-60 w-52 z-10" alt='Developer' />
              </div>
            </div>
          </div>
        </div>


      ) : (
        <div className={`h-screen justify-center items-center self-center `}>
          <div className='flex flex-row justify-between md:p-6 p-3 lg:p-12'>
            <div className={`flex flex-col self-center gap-6 animate-upwards transform transition-transform duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className={`gap-12 text-lg `}>
                <h2 className=''>Hi,</h2>
              </div>
              <div className={`text-black drop-shadow-lg shadow-blue-600 transform lg:text-5xl md:text-3xl text-lg `}>
                <h1>VINITHKUMAR S</h1>
              </div>
              <div className={``}>
                <h2 className={`relative inline-flex gap-1 text-blue-500   `}>
                  <span className='lg:text-3xl md:text-3xl text-lg'>{text}</span>
                  <span className={`absolute top-0 -right-1 rounded-sm h-full w-0.5 bg-blue-500 animate-blink`}></span>
                </h2>
              </div>
              <div className={` flex row gap-6`}>
                <div>
                  <PrimaryBtn
                    title="About Me"
                    onClick={handleAbout}
                  />
                </div>
                <div>
                  <PrimaryBtn
                    title="Portfolio"
                    onClick={handlePortfolio}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-16">
              <div className={`w-28 h-28 md:w-60 md:h-60 lg:w-96 lg:h-96 pl-3 rounded-full bg-blue-500 border-2 border-blue-200 animate-circle order-1`}></div>
              <div className="animate-slideRight absolute pt-8 pl-4 order-2">
                <img src={developer} className="lg:w-96 md:w-60 w-28 z-10" alt='Developer' />
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}
