import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { animateScroll as scroll } from "react-scroll";

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <main className="flex flex-col items-center justify-center snap-start">
      <div className="flex flex-col justify-center items-center h-screen text-white mx-2">
        {
          // <h1 id="typer" className="font-semibold text-2xl">Hi, I'm Odysseas Papadimas</h1>
        }
        <Typewriter
          options={{
            cursor: "",
            delay: 80,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="font-size: 1.6rem">Hi, I\'m Odysseas Papadimas.</span>'
              )
              .start();
          }}
        />
        <p data-aos="fade-in" data-aos-duration="800" data-aos-delay="2500">
          I'm a Front-end Developer based in Patras, Greece.
        </p>

        <div
          data-aos="zoom-out"
          data-aos-delay="3000"
          className="links flex m-4"
        >
          <a
            className="mx-2"
            href="https://github.com/odysseaspapadimas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="40" />
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/odysseas-vasileios-papadimas-8ab824148/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="40" />
          </a>
        </div>
        <div
          className="text-center"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="3000"
        >
          <p className="text-lg">My skills:</p>
          <div className="flex">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              className="mx-1"
              alt="html5"
              width="50px"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              className="mx-1"
              alt="ccs3"
              width="50px"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              className="mx-1"
              alt="javascript"
              width="50px"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              className="mx-1"
              alt="react"
              width="50px"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
              className="mx-1"
              alt="firebase"
              width="50px"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              className="mx-1"
              alt="python"
              width="50px"
            />
          </div>
          <button
            onClick={() =>
              scroll.scrollMore(500, {
                duration: 1200,
                delay: 0,
                smooth: 'easeInOutQuart'
              })
            }
            className="py-2 px-4 bg-white text-black font-semibold mt-8 rounded-sm"
          >
            My projects
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
