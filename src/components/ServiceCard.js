import Link from "next/link";
import React from "react";

function ServiceCard({ cardName, cardImg, cardText, cardUrl }) {
  return (
    <Link href={cardUrl}>
      <div className="p-4 py-10 rounded-md border  flex flex-col items-center ">
        <img src={`${cardImg}`} className="w-[121px] h-[121px] mb-7" alt="" />
        <h1 className=" font-semibold  text-2xl w-full">{cardName}</h1>
        <h2 className=" font-semibold text-xl text-black text-opacity-60 mt-7">
          {cardText}
        </h2>
      </div>
    </Link>
  );
}

export default ServiceCard;
