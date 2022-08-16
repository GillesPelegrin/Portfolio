import pwa from "./pwa.png";
import three from "./three3.png";
import node from "./nodejs.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import TopicTitle from "../../topic-title";

FaChevronRight;

export default function Project() {
  const carouselDistances = [-66, -33, 0];
  //const carouselDistances = [-58, -25, 4];
  const [carousel, setCarousel] = useState(carouselDistances[2]);

  function next(array, value) {
    const index = array.indexOf(value);
    return array.length - 1 === index ? value : array[index + 1];
  }

  function previous(array, value) {
    const index = array.indexOf(value);
    return index === 0 ? value : array[index - 1];
  }

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      if (window.innerWidth <= 768) {
        setCarousel(carouselDistances[2]);
      } else {
        setCarousel(carouselDistances[1]);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <>
      <div
        className=" mr-0 lg:mr-20 xl:mr-40"
        style={{ height: `calc(100vh * 4/6)` }}
      >
        <button
          className="primary   hidden  pl-14 lg:block"
          onClick={() => setCarousel(previous(carouselDistances, carousel))}
        >
          <FaChevronLeft size={32} />
        </button>
        <button
          className=" hidden pl-8  text-primary lg:block"
          onClick={() => setCarousel(next(carouselDistances, carousel))}
        >
          <FaChevronRight size={32} />
        </button>
        <br />
        <br />
        <div className="flex flex-col flex-col-reverse items-center justify-center gap-8 lg:flex-grow lg:flex-row lg:justify-between ">
          <div className=" flex items-center justify-between  overflow-x-auto xl:overflow-hidden">
            <div
              style={{
                transform: `translate(${carousel}%, 0px)`,
                transition: "all 500ms",
              }}
              className={`relative px-8`}
            >
              <div className="flex  snap-x snap-mandatory gap-4 overflow-x-auto md:gap-4 xl:overflow-hidden ">
                {/*https://tailwindcss.com/docs/scroll-snap-type   still need to be implemented*/}

                <ProjectCard src={pwa} title="PWA" />
                <ProjectCard src={three} title="ThreeJs" />
                <ProjectCard src={node} title="NodeJs" />
              </div>
            </div>
          </div>
          <TopicTitle title="Projects" />
        </div>
      </div>
    </>
  );
}

function ProjectCard({ src, title }) {
  return (
    <div className=" min-w-[80%] snap-center rounded  border border-black border-opacity-5 bg-white shadow-lg  md:min-w-[30%]  xl:min-w-[25%]">
      <img className="w-full border-b p-8" src={src} alt={title} />
      <h2 className="my-3 text-center font-serif text-3xl font-bold text-color-title">
        {title}
      </h2>
    </div>
  );
}
