import grimImg from "../../images/grim.png";

const ProjectCard = ({ title, description, gitLink, demoLink }) => {
  return (
      <div className="flex flex-col h-full pb-10 justify-between items-stretch">
        <img src={grimImg} alt="" className="" />
        <div className="justify-self-stretch">
          <h1 className="text-2xl">{title}</h1>
          <p className="mb-4">{description}</p>
          <div>
            <button className="text-white pr-4">
              <a
                href={gitLink}
                className="py-2 px-4 rounded-sm"
                style={{ backgroundColor: "#365ed9" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </button>
            <button className="text-white">
              <a
                href={demoLink}
                className="py-2 px-4 rounded-sm"
                style={{ backgroundColor: "#365ed9" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
