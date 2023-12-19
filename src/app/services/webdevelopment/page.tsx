import Hero from "@/components/Hero";
import React from "react";
import WorkCard from "@/components/WorkCard";
import Process from "@/components/Process";
import Link from "next/link";

function WebDevelopment() {
  return (
    <div className="  w-[100vw]">
      <Hero type="website"></Hero>
      <Process type="website"></Process>
      {/* Latest Works */}
      <div className=" mt-32  w-full flex justify-center  ">
        <div className="light_glass w-[85%] flex flex-col rounded-[50px] items-center pt-0  p-12">
          <h1 className=" text-6xl max-sm:text-[50px] max-[473px]:text-[40px] max-[400px]:text-4xl font-semibold tracking-tighter my-10">
            Our Latest Works
          </h1>
          <div className="w-full  flex max-lg:flex-col max-lg:items-center max-lg:space-y-12 justify-evenly mt-12">
            {/* Content */}
            {/* All Templates Content */}
            <WorkCard
              imgSrc={"/home/latest/rajesh.png"}
              workType="Actor Portfolio"
              workDesc="Rajesh Ganesh Sharma"
              workLink="https://www.rajeshganeshsharma.in"
            ></WorkCard>
            <WorkCard
              imgSrc={"/home/latest/lms.png"}
              workType="Learning Management System"
              workDesc="Orb Academy"
              workLink="https://www.orbacademy.in"
            ></WorkCard>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly max-sm:flex-col max-sm:space-y-10 max-sm:text-center   bg-[#94D5FA]  py-32 w-full mt-20 ">
        {/* <div></div> */}
        <h1 className=" font-semibold  text-6xl max-sm:text-[50px] max-[473px]:text-[40px] max-[400px]:text-4xl w-[367px] max-[800px]:w-[300px]">
          Let&apos;s Work Together
        </h1>
        <Link
          href={"/contactus"}
          className=" h-[340px] w-[340px] max-[800px]:h-[300px] max-[800px]:w-[300px] max-[400px]:w-[200px] max-[400px]:h-[200px] rounded-full  bg-gradient-to-b hover:from-white from-sky-400 hover:to-white to-blue-500 flex items-center justify-center font-semibold text-white hover:text-black text-5xl max-sm:text-[50px] max-[473px]:text-[40px] max-[400px]:text-4xl "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default WebDevelopment;
