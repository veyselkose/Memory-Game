import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { useDispatch } from "react-redux";
import { matchedCard, openCard } from "@/store/gameSlice";
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function Card({ flag }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (flag.matched === false) {
      dispatch(openCard(flag));
      setTimeout(() => {
        dispatch(matchedCard(flag));
      }, 500);
    }
  };
  return (
    <div className={`card ${flag.open ? "rotate-y-180" : ""}`} onClick={handleClick}>
      <div className={`card-front ${roboto_mono.className}`}>?</div>
      <Image
        className={`card-back ${flag.matched ? "matched" : ""}`}
        src={flag.img}
        width={300}
        height={300}
        alt={flag.title}
      />
    </div>
  );
}

export default Card;
