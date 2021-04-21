import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center snap-start">
      <div className="flex flex-col justify-center items-center h-screen text-white mx-2">
        <h1 className="font-semibold text-2xl">Odysseas Papadimas</h1>
        <p>I'm a Front-end Developer based in Patras, Greece.</p>

        <div className="links flex m-4">
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
        <p className="text-lg">My skills:</p>
        <div className="flex">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" className="mx-1" alt="html5" width="50px"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" className="mx-1" alt="ccs3" width="50px"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" className="mx-1" alt="javascript" width="50px"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" className="mx-1" alt="react" width="50px"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" className="mx-1" alt="firebase" width="50px"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" className="mx-1" alt="python" width="50px"/>
        </div>
      </div>
    </main>
  );
};

export default Main;
