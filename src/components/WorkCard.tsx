"use client";
import Link from "next/link";
import React, { useState } from "react";

function WorkCard({ imgSrc, workType, workDesc, workLink }: any) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={workLink}>
      <div
        className="  relative "
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img
          src={imgSrc}
          className=" rounded-xl h-[400px] max-[460px]:h-[90vw] "
          alt=""
        />
        <div
          className={` absolute ${
            hover ? "flex" : "hidden"
          } dark_glass rounded-xl h-[105px] w-full flex-col justify-center items-center bottom-0 `}
        >
          <h2 className=" text-white text-xl font-bold">{workType}</h2>
          <h3 className=" text-white text-opacity-70 text-xl font-bold">
            {workDesc}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
