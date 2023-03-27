import { useEffect, useState } from "react";
import TiltCard from "./TiltCard";
import background from "./bg.jpg"

function Content() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  return (
    <div className="CONTENT">
      <div className="relative">
        <img
          className="w-full h-full object-cover z-0 opacity-50"
          src={background}
          alt="Background"
          
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          
        >
          <div className="GALERY flex w-full h-full flex-wrap justify-around content-center z-10">
            <TiltCard />
            <TiltCard />
            <TiltCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;