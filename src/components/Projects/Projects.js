import React from "react";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen snap-start">
      <h1 className="text-3xl">My Projects</h1>
      <Carousel
        emulateTouch={true}
        swipeable={true}
        autoPlay={false}
        interval={4000000}
        showStatus={false}
        className="w-10/12 lg:w-1/2"
      >
        <ProjectCard
          title="Grim"
          description="A social media application built with React and Firebase. You can signup/login, upload posts send messages and like/comment other people's photos."
          gitLink="https://github.com/odysseaspapadimas/grim-social-media"
          demoLink="https://grim.vercel.app/"
        />
        <ProjectCard
          title="Weather"
          description="Social media app"
          gitLink="https://github.com/odysseaspapadimas/grim-social-media"
          demoLink="https://grim.vercel.app/"
        />
        <ProjectCard
          title="Grim"
          description="Social media app"
          gitLink="https://github.com/odysseaspapadimas/grim-social-media"
          demoLink="https://grim.vercel.app/"
        />
      </Carousel>
    </div>
  );
};

export default Projects;
