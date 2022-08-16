import Language from "./language/language";
import Project from "./project/project";
import Introduction from "./introduction/introduction";
import Contact from "./contact/contact";
import React, { useEffect, useState } from "react";

export default function Body() {
  const [background, setBackground] = useState([
    "bottom-background-xl",
    "url(./img/top-background-xl.png)",
  ]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setBackground(["background", undefined]);
      } else {
        setBackground([
          "bottom-background-xl",
          "url(./img/top-background-xl.png)",
        ]);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <>
      <div className="h-max">
        <div
          style={{
            backgroundImage: background[1],
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
        >
          <Introduction />
        </div>
        <div
          style={{
            backgroundImage: `url("./img/${background[0]}.png")`,
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top center",
          }}
        >
          <div id="language" style={{ height: `calc(100vh * 1/6)` }}></div>
          <Language />
          <div id="project" style={{ height: `calc(100vh * 1/6)` }}></div>
          <Project />
          <div
            style={{ height: `calc(100vh * 1/6)` }}
            // style={{ backgroundImage: `url("./img/Group21.png")` }}
          ></div>
          <Contact />
          <div style={{ height: `calc(100vh * 1/6)` }}></div>
        </div>
      </div>
    </>
  );
}
