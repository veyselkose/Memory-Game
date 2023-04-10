import React from "react";
import { useState } from "react";
import Image from "next/image";

function Card({ flag }) {
  const [opacity, setOpacity] = useState(100);
  const handleClick = () => {
    setOpacity(0);
  };
  return (
    <div className={`relative transition duration-500 ${opacity !== 0 ? "rotate-y-180" : ""}`} onClick={handleClick}>
      <div
        className={`w-full h-full bg-zinc-500 absolute transition duration-500 opacity-${opacity} rounded`}
      ></div>
      <Image
        className="w-full object-cover h-full rounded"
        src={flag.img}
        width={300}
        height={300}
        alt={flag.title}
      />
    </div>
  );
}

export default Card;
