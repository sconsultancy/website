import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Link from "next/link";
import React from "react";

function AppDevelopment() {
  return (
    // <div>AppDevelopment</div>
    <div>
      {/* <ComingSoon></ComingSoon> */}
      <Hero type="app"></Hero>
      <Process type="app"></Process>
      <div className="flex items-center justify-evenly max-sm:flex-col max-sm:space-y-10 max-sm:text-center   bg-[#94D5FA] bg-opacity-60  py-32 w-full ">
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

export default AppDevelopment;
