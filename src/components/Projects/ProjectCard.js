const ProjectCard = ({ title, description, image, gitLink, demoLink }) => {
  return (
      <div className="flex flex-col h-full pb-10 justify-between items-stretch">
        <img src={image} alt="" className="" />
        <div className="justify-self-stretch my-4 flex flex-col justify-between items-stretch h-full">
          <h1 className="text-2xl">{title}</h1>
          <p className="mb-4 mx-auto max-w-2xl">{description}</p>
          <div >
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
