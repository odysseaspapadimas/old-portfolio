import React from "react";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer";
import grimImg from "../../images/grim.png";
import weatherImg from "../../images/weather.jpg";
import chessClockImg from "../../images/chess-clock.png";
import animeImg from "../../images/anime.png";
import whalesImg from "../../images/whales.png";

const Projects = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen snap-start relative">
      <h1 className="text-3xl mb-6">My Projects</h1>
      <Carousel
        emulateTouch={true}
        swipeable={true}
        autoPlay={false}
        interval={4000000}
        showStatus={false}
        className="w-10/12 lg:w-1/2"
      >
        <ProjectCard
          title="Social media app"
          description="A full-stack social media application built with React and Firebase based on Instagram. You can signup/login, upload posts, follow, send messages and like/comment other people's photos."
          image={grimImg}
          gitLink="https://github.com/odysseaspapadimas/grim-social-media"
          demoLink="https://grim.vercel.app/"
        />
        <ProjectCard
          title="Weather app"
          description="A simple responsive React weather application using the OpenWeatherMap API with an asynchronous axios call to check the current weather anywhere you want."
          image={weatherImg}
          gitLink="https://github.com/odysseaspapadimas/weather/"
          demoLink="https://odysseaspapadimas.github.io/weather/"
        />
        <ProjectCard
          title="Anime by image"
          description="Upload a screenshot of an anime and get the anime it's from, the episode and a timestamp using the trace.moe API."
          image={animeImg}
          gitLink="https://github.com/odysseaspapadimas/anime-by-image"
          demoLink="https://odysseaspapadimas.github.io/anime-by-image/"
        />
        <ProjectCard
          title="Whale Sightings"
          description="An application used to track whale sightings by species using a whale sighting API and the Google Cloud Maps JavaScript API"
          image={whalesImg}
          gitLink="https://github.com/odysseaspapadimas/whale-sightings"
          demoLink="https://whale-sightings.vercel.app/"
        />
        <ProjectCard
          title="Chess clock"
          description="A fully functional chess clock, optimized for mobile, with customizable time limit and increment on each turn, a pause function and full-screen capabilities, all in Vanilla JS."
          image={chessClockImg}
          gitLink="https://github.com/odysseaspapadimas/chess-clock"
          demoLink="https://odysseaspapadimas.github.io/chess-clock/"
        />
      </Carousel>
      <Footer />
    </div>
  );
};

export default Projects;
