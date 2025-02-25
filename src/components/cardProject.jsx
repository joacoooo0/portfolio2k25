import Capsula from "./capsula";

// Imagenes
import htmlLogo from "../assets/social-media/html.svg";
import tailwindLogo from "../assets/social-media/tailwind.svg";
import figmaLogo from "../assets/social-media/figma.svg";
import javascriptLogo from "../assets/social-media/javascript.svg";
import reactLogo from "../assets/social-media/react.svg";
import minProject from "../assets/min-Project.jpg";
import linkVector from "../assets/link.svg";

export default function CardProject() {
  return (
    <div className="bg-[#141414] p-4 rounded-lg shadow-md flex items-center justify-between gap-4 w-[650px]">
      <div className="flex flex-col gap-5 ">
        <div>
          <p className="text-[#696969] text-xs font-medium">Año - 2024</p>
          <h2 className="text-white font-bold text-2xl">Note To-do</h2>
          <div className="flex gap-2 mt-5">
            <div className="flex flex-col gap-2">
              <Capsula imagen={reactLogo} texto="ReactJS" />
              <Capsula imagen={tailwindLogo} texto="TailwindCSS" />
              <Capsula imagen={htmlLogo} texto="HTML" />
            </div>
            <div className="flex flex-col gap-2">
              <Capsula imagen={figmaLogo} texto="Figma" />
              <Capsula imagen={javascriptLogo} texto="JavaScript" />
            </div>
          </div>
        </div>

        <div className="">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1 py-2 bg-[#F8D6FF] text-[#141414] font-bold rounded-lg text-[10px] w-28 h-7"
          >
            <span>
              <img src={linkVector} alt="link-vector-a" className="w-3" />
            </span>
            Visitar página
          </a>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img
          src={minProject}
          alt="Note To-do Project"
          className="w-full h-auto rounded-lg "
        />
      </div>
    </div>
  );
}
