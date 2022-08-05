import pwa from "./pwa.png";
import three from "./three3.png";
import node from "./nodejs.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import TopicTitle from "../topic-title";

FaChevronRight;

export default function Project() {
  const carouselDistances = [-66, -33, 0];
  // const carouselDistances = [0, 0, 0];
  const [carousel, setCarousel] = useState(carouselDistances[2]);

  function next(array, value) {
    const index = array.indexOf(value);
    return array.length - 1 === index ? value : array[index + 1];
  }

  function previous(array, value) {
    const index = array.indexOf(value);
    return index === 0 ? value : array[index - 1];
  }

  return (
    <>
      <button
        className="primary hidden  pl-14 sm:block"
        onClick={() => setCarousel(previous(carouselDistances, carousel))}
      >
        <FaChevronLeft size={32} />
      </button>
      <button
        className="hidden pl-8 text-primary sm:block"
        onClick={() => setCarousel(next(carouselDistances, carousel))}
      >
        <FaChevronRight size={32} />
      </button>

      <div className=" mr-0 flex min-h-[66%] flex-col flex-col-reverse items-center justify-center md:mr-10 lg:mr-20 lg:flex-grow lg:flex-row lg:justify-between xl:mr-40">
        <div className=" flex items-center justify-between  overflow-x-auto">
          <div
            style={{
              transform: `translate(${carousel}%, 0px)`,
              transition: "all 500ms",
            }}
            className={`relative `}
          >
            <div className="flex md:gap-4">
              {/*https://tailwindcss.com/docs/scroll-snap-type   still need to be implemented*/}

              <ProjectCard src={pwa} title="PWA" />
              <ProjectCard src={three} title="ThreeJs" />
              <ProjectCard src={node} title="NodeJs" />
            </div>
          </div>
        </div>
        <TopicTitle title="Projects" />
      </div>
    </>
  );
}

function ProjectCard({ src, title }) {
  return (
    <div className=" min-w-full rounded border border-black border-opacity-5 shadow-lg sm:min-w-0 lg:max-w-sm">
      <img className="w-full border-b p-8" src={src} alt={title} />
      <h2 className="my-3 text-center font-serif text-3xl font-bold text-color-title">
        {title}
      </h2>
    </div>
  );
}
