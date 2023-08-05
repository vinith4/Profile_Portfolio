import styles from "./about.module.css";
import PrimaryBtn from '../../components/atom/button';
import { saveAs } from 'file-saver';
import vinith from "../../assets/Vinithkumar_S.pdf";
import { useNavigate } from 'react-router-dom';
import developer from "../../assets/developer.png";
import java from "../../assets/programing_language/java.png";
import javascript from "../../assets/programing_language/js.png";
import python from "../../assets/programing_language/python.png";
import firebase from "../../assets/programing_language/firebase.png";
import spring from "../../assets/programing_language/spring.png";
import html from "../../assets/programing_language/html.png";
import css from "../../assets/programing_language/css.png";
import react from "../../assets/programing_language/react.png";




export default function About() {
  const navigate = useNavigate();
  const handleDownload = () => {
    const documentUrl = vinith;
    const fileName = 'Vinithkumar_S.pdf';

    saveAs(documentUrl, fileName);
  };

  const hangleContact = () => {
    navigate("/contact")
  }

  const skills = [
    { name: "Java", image: java },
    { name: "JavaScript", image: javascript },
    { name: "Python", image: python },
    { name: "Firebase", image: firebase },
    { name: "Spring", image: spring },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "React", image: react },
  ];

  const educationDetails = [
    {
      title: "B.E in Electronics and Communication Engineering",
      location: "KPR Institute of Engineering and Technology, Coimbatore",
      duration: "2019 - 2023",

    },
    {
      title: "12th Tamilnadu State Board",
      location: "Veveaham Higher Secondary School, Dharapuram",
      duration: "2018 - 2019",

    },
    {
      title: "10th Tamilnadu State Board",
      location: "Veveaham Higher Secondary School, Dharapuram",
      duration: "2016 - 2017",
    }
  ];


  return (
    <div className='p-8 sm:fixed '>
      <div className='pb-12'>
        <h1 className='text-center text-2xl md:text-4xl'>About Me</h1>
      </div>
      <div className='flex flex-col sm:flex-row gap-12'>
        <div className=''>
          <div className="flex justify-center snap-center">
            <div className={`w-52 h-64 md:w-60 md:h-72 lg:w-72 lg:h- pt-9 pl-3 rounded-lg bg-blue-500 border-2 border-blue-200`}></div>
            <div className=" absolute pt-9  pr-1 md:pr-0 md:rounded-lg order-2 md:bg-blue-500 ">
              <img src={developer} className="lg:w-72 md:w-60 w-52 z-10" alt='Developer' />
            </div>
          </div>
        </div>
        {/* Add the scrollable div with a fixed height */}
        <div className={`flex  flex-col sm:flex-row sm:flex-wrap sm:overflow-y-auto sm:max-h-[400px] ${styles.hide_scrollbar}`}>
          <div className="">
            <p>
              I'm Vinithkumar S, a passionate Java Full-Stack Developer with a background in Electronics and Communication Engineering. I enjoy coding on web pages, combining logic and creative design to craft eye-catching, accessible, and user-friendly websites and applications.
            </p>
            <br />
            <p>
              I believe in promoting inclusivity and diversity in the industry through representation. During my college days, I worked on exciting IoT projects, deepening my understanding of technology's potential to shape the world.
            </p>
            <br />
            <p>
              Now, I'm eager to take the next leap in my career and contribute to the success of the right company. If you're looking for a dedicated and innovative developer to add to your team, I'd be thrilled to hear from you. Let's create remarkable solutions together!
            </p>
          </div>

          <div>
            {/* <hr className="mt-4 " /> */}
            <div>
              <p className="primary_txt fs-1 mt-4">
                <strong>Professional Skills</strong>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-col-4 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="">
                    <div className={`${styles.skill_box}`}>
                      <img src={skill.image} alt={skill.name} />
                      <div className={`${styles.tooltip}`}>
                        <span><b>{skill.name}</b></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="primary_txt fs-1 mt-4">
              <strong>Education Details</strong>
            </p>
            <div className={`${styles.timeline} pl-2`}>
              {educationDetails.map((education, index) => (
                <div key={index} className={styles.timeline_item}>
                  <div className={styles.timeline_content}>
                    <h4 className="fs-3 primary_txt">{education.title}</h4>
                    <p className="primary_txt">{education.location}</p>
                    <p className="secondary_txt">{education.duration}</p>

                  </div>
                </div>
              ))}
            </div>

            <div className="ml-[15%] sm:ml-[30%]">
              <div>
                <PrimaryBtn
                  title="Resume"
                  onClick={handleDownload}
                />
                <PrimaryBtn
                  title="Contact"
                  onClick={hangleContact}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
