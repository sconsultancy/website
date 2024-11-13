import React from "react";

function WhyUsCard({ header, content }) {
  return (
    <div className=" flex  border-r-4 rounded-lg   max-w-sm">
      <div className=" mt-2 h-6 w-6 mx-3 bg-[#E0E0E0] rounded-full flex justify-center items-center">
        <div className=" h-3 w-3 bg-black rounded-full"></div>
      </div>
      <div>
        <h3 className=" text-2xl font-bold ">{header}</h3>
        <p className=" max-w-[260px] mt-1">{content}</p>
      </div>
    </div>
  );
}

export default WhyUsCard;
