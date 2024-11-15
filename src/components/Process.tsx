import React from "react";

function Process({ type }: any) {
  const dottedLine = () => {
    return (
      <div className="flex space-x-3">
        <div className="h-[2px] w-3 bg-black relative top-4 max-[890px]:hidden "></div>
        <div className="h-[2px] w-6 bg-black relative top-4 max-lg:hidden"></div>
        <div className="h-[2px] w-6 bg-black relative top-4 max-[945px]:hidden"></div>
        <div className="h-[2px] w-6 bg-black relative top-4"></div>
        <div className="h-[2px] w-3 bg-black relative top-4 max-[890px]:hidden "></div>
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
        <div className="flex mt-16 max-[700px]:flex-col  ">
          <span className=" flex">
            <span className=" min-[700px]:hidden">{dottedLine()}</span>
            {processUnit(
              "1",
              `${type == "digital-marketting" ? "Discover" : "Design"}`,
              `  ${
                type == "website"
                  ? " We design visually stunning, user-friendly websites"
                  : type == "app"
                  ? " We design visually stunning, user-friendly apps"
                  : type == "software"
                  ? "We design visually stunning, user-friendly softwares"
                  : type == "digital-marketting"
                  ? "Understanding your business, target audience, and goals."
                  : "We design the best possible systems"
              }.`
            )}
            <span className=" min-[700px]:hidden">{dottedLine()}</span>{" "}
          </span>

          <span className=" max-[700px]:hidden">{dottedLine()}</span>

          <span className=" flex max-[700px]:mt-12">
            <span className=" min-[700px]:hidden">{dottedLine()}</span>{" "}
            {processUnit(
              "2",
              `${type == "digital-marketting" ? "Implement" : "Develop"}`, //develop
              `We ${
                type == "startup" ? "Achieve" : "Develop"
              } it fast and effective.`
            )}
            <span className=" min-[700px]:hidden">{dottedLine()}</span>{" "}
          </span>

          <span className=" max-[700px]:hidden"> {dottedLine()}</span>

          <span className=" flex max-[700px]:mt-12">
            <span className=" min-[700px]:hidden">{dottedLine()}</span>{" "}
            {processUnit(
              "3",
              "Enjoy",
              "Enjoy the result and maximise your potential."
            )}
            <span className=" min-[700px]:hidden">{dottedLine()}</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Process;

/*


         

            
            
          </div>
        </div>
        <Link href={"/contactus"}>
          <button
            // onClick={handleButtonClick}
            className="  h-[58px] max-w-sm  bg-black text-white rounded-full px-6  py-4 text-sm max-[472px]:text-xs font-medium"
          >
            Request a Callback
          </button>
        </Link>
      </div>









*/
