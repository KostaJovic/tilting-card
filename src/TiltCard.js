import { useState } from "react";
import photo from "./ZMBC10.jpg"

function TiltCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    requestAnimationFrame(() => setTilt({ x, y }));
  };  

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-52 h-52 bg-white rounded-md shadow-lg overflow-hidden content-center justify-center"
      style={{
        transform: `rotateY(${tilt.x * 10}deg) rotateX(${tilt.y * 10}deg) translateZ(20px)`,
        perspective: "800px",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

        <div className="relative m-auto z-10 w-52 h-52">
            <img src={photo} className="absolute 
                                        m-auto 
                                        inset-0"/>
        </div> 
    </div>
  );
}

export default TiltCard;
