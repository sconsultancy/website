import React from "react";

function Process({ type }: any) {
  const dottedLine = () => {
    return (
      <div className="flex space-x-3">
        <div className="h-[2px] w-3 bg-black relative top-4"></div>
        <div className="h-[2px] w-6 bg-black relative top-4"></div>
        <div className="h-[2px] w-6 bg-black relative top-4"></div>
        <div className="h-[2px] w-6 bg-black relative top-4"></div>
        <div className="h-[2px] w-3 bg-black relative top-4"></div>
      </div>
    );
  };

  const processUnit = (num: String, h2: String, text: String) => {
    return (
      <div className=" flex  flex-col items-center max-w-[240px] text-center">
        <span className=" w-8 text-center flex items-center justify-center h-8 rounded-full bg-black bg-opacity-80 text-white">
          {num}
        </span>
        <h2 className=" mt-8 text-xl font-bold tracking-tight">{h2}</h2>
        <div className=" mt-4 text-lg text-black text-opacity-75 font-semibold tracking-tight">
          {text}
        </div>
      </div>
    );
  };
  return (
    <div className=" ">
      <div className=" bg-white text-black flex flex-col items-center  py-10  pb-20">
        <div className="flex space-x-2.5 py-3 ">
          <div className="h-[2px] w-6 bg-black relative top-4"></div>
          <h3 className=" text-xl font-bold tracking-tight">Process</h3>
          <div className="h-[2px] w-6 bg-black relative top-4"></div>
        </div>

        <h1 className=" text-[40px] font-bold -tracking-tighter py-2">
          How it works
        </h1>
        <div className="flex mt-16">
          {processUnit(
            "1",
            "Design",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusdam, veniam."
          )}
          {dottedLine()}
          {processUnit(
            "2",
            "Develop",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusdam, veniam."
          )}

          {dottedLine()}
          {processUnit(
            "3",
            "Enjoy",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusdam, veniam."
          )}
        </div>
      </div>
    </div>
  );
}

export default Process;
