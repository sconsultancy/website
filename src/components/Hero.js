"use client";
import Link from "next/link";

import React from "react";
import Image from "next/image";

function Hero({ type }) {
  console.log(type);

  const setHeader = (type) => {
    let content;

    switch (type) {
      case "digital-marketting":
        content = "Digital Marketting";

        break;
      case "website":
        content = "Websites";

        break;
      case "app":
        content = "Apps";

        break;

      default:
        content = "Softwares";
        break;
    }

    return content;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center relative top-[270px] max-[1100px]:top-[170px] pb-[150px] mb-[320px] ">
        <div className="relative">
          <div className="light_glass h-[658px] max-sm:h-auto max-w-[568px] max-md:max-w-[80vw] max-sm:p-12 pt-20 pl-20 pr-7  rounded-xl relative right-10 max-md:right-0 z-30 flex flex-col overflow-hidden ">
            <div className="  py-2 max-w-[137px] max-[473px]:max-w-[100px] rounded-full relative left-5 bg-black bg-opacity-10 max-[473px]:text-xs text-black text-opacity-60  text-center font-semibold ">
              BEST CHOICE
            </div>
            <p className=" max-w-[400px] max-sm:max-w-[300px] pt-4 font-medium text-[64px] max-sm:text-[50px] max-[473px]:text-[40px] max-[400px]:text-4xl tracking-tighter leading-[65px] max-[473px]:leading-[43px] ">
              {type == "digital-marketting"
                ? "Transform Your Brand"
                : "Unleash Your Potential"}{" "}
              with{" "}
              <h1 className=" text-black text-opacity-70  font-semibold">
                SCG {setHeader(type)}
              </h1>
            </p>
            <p className="  pt-5 text-xl max-sm:text-base max-[473px]:text-sm max-[400px]:text-xs tracking-tight leading-6 font-bold text-black text-opacity-40">
              {type == "digital-marketting"
                ? "We help businesses thrive with cutting-edge digital marketing strategies that boost visibility, engagement, and sales."
                : "Scale with interactive websites, custom tools, and growth hacks to supercharge your business"}
            </p>
            <div className="relative flex mb-10 w-full max-[550px]:flex-col items-center">
              <div className=" mt-8 pl-4  pr-3 flex w-full  justify-between  border border-black   rounded-full  ">
                <input
                  type="text"
                  placeholder="Your Work Email"
                  className=" bg-black bg-opacity-0  outline-none  font-semibold text-black text-opacity-50 max-[472px]:text-sm py-4 max-[472px]:py-3 w-[70%] max-[550px]:w-[100%]"
                />
              </div>
              <button className=" absolute max-[550px]:static max-[550px]:mt-3 h-[58px] top-8 -right-4  bg-black text-white rounded-full px-6  py-4 text-sm max-[472px]:text-xs font-medium">
                Get Started
              </button>
            </div>
          </div>
          <img
            src="https://sconsultancy.github.io/website/hero/coffee.png"
            className=" absolute -left-[200px] max-md:-left-28 max-[473px]:w-48 max-[473px]:-top-24  -top-[120px]"
            alt=""
          />
          <img
            src="https://sconsultancy.github.io/website/hero/blue-ball.png"
            className=" absolute top-2 right-[50px] z-10"
            alt=""
          />
          <img
            src="https://sconsultancy.github.io/website/hero/half-blue-ball.png"
            className=" absolute top-[150px] -left-[40px] max-md:left-0 z-10"
            alt=""
          />
          <img
            src="https://sconsultancy.github.io/website/hero/plant.png"
            className=" absolute top-[100px] -right-[80px] z-10 hidden"
            alt=""
          />
          {type == "website" ? (
            <img
              src="https://sconsultancy.github.io/website/hero/website_hero.png"
              className="absolute top-[325px] -left-[320px] max-md:-left-28 z-10 "
              alt=""
            />
          ) : type == "software" ? (
            <img
              src="https://sconsultancy.github.io/website/services/software/software-hero.png"
              className="absolute top-[325px] -left-[275px] max-md:-left-28 z-10 "
              alt=""
            />
          ) : (
            <img
              src="https://sconsultancy.github.io/website/services/app/app-hero.png"
              className="absolute top-[325px] -left-[300px] max-md:-left-28 z-10 "
              alt=""
            />
          )}{" "}
        </div>

        <img
          src="https://sconsultancy.github.io/website/hero/red-ball.png"
          className=" absolute top-[60px] right-[89px]"
          alt=""
        />
        <div className="light_glass h-[180px] w-[180px] rounded-xl absolute top-[100px] right-[139px] z-30 flex  justify-center items-center max-[1200px]:hidden  ">
          {type == "website" ? (
            <img
              src="https://sconsultancy.github.io/website/services/website/html-dev.png"
              alt=""
            />
          ) : (
            <img
              src="https://sconsultancy.github.io/website/hero/graph.png"
              alt=""
            />
          )}
        </div>
        <img
          src="https://sconsultancy.github.io/website/hero/black-ball.png"
          className="absolute bottom-[115px] right-[31.75%]"
          alt=""
        />
        <img
          src="https://sconsultancy.github.io/website/hero/color-ball.png"
          className="absolute top-[140px] right-[199px] z-10  max-[1200px]:hidden"
          alt=""
        />
        <img
          src="https://sconsultancy.github.io/website/  hero/color-ball.png"
          className="absolute bottom-[175px] left-[35%] z-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
