import Language from "../language/language";
import Project from "../project/project";
import Introduction from "../introduction/introduction";
import Contact from "../contact/contact";

export default function Body() {
  return (
    <>
      <Introduction />
      <div className="h-1/6"></div>
      <Language />
      <div className="h-1/6"></div>
      <Project />
      <div className="h-1/6"></div>
      <Contact />
      <div className="h-1/6"></div>
    </>
  );
}
