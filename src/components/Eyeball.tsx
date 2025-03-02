import { useState, useEffect } from "react";

const Eyeball = () => {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;

      let angleFinder = Math.atan2(deltaY, deltaX);
      setAngle(angleFinder * (180 / Math.PI) + 45);
    });
  }, []);
  return (
    <div className="">
      <div className="relative flex h-34 w-34 items-center justify-center rounded-full bg-green-50">
        <div
          className="eyepup absolute flex h-24 w-24 items-center justify-center rounded-full bg-green-950 p-2"
          style={{ transform: `  rotate(${angle}deg)` }}
        >
          <div className="flex h-12 w-full -rotate-45 items-center justify-end bg-amber-50/0">
            <div className="h-6 w-6 rounded-full bg-stone-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyeball;