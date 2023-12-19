"use client";
import React from "react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

function Services() {
  const servicesCardList = [
    {
      name: "Web Development",
      text: "Scale with interactive websites, custom tools, and access to our investor",
      icon: "services/webdev.svg",
      url: "/services/webdevelopment",
    },
    {
      name: "App Development",
      text: "Scale with interactive websites, custom tools, and access to our investor",
      icon: "services/appdev.svg",
      url: "/services/appdevelopment",
    },
    {
      name: "Accounting",
      text: "Scale with interactive websites, custom tools, and access to our investor",
      icon: "services/account.svg",
      url: "/services/accounting",
    },
    {
      name: "Tax Consultancy",
      text: "Scale with interactive websites, custom tools, and access to our investor",
      icon: "services/money.svg",
      url: "/services/taxconsultancy",
    },
    {
      name: "Compliance Management",
      text: "Scale with interactive websites, custom tools, and access to our investor",
      icon: "services/law.svg",
      url: "/services/compliancemanagement",
    },
    {
      name: "Startup Consultancy",
      text: "Scale with interactive websites, custom tools, and access to our investor",
      icon: "services/startup.svg",
      url: "/services/startupconsultancy",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center ">
      {/* Services Header */}
      {/* Services Hero */}
      <div className="flex flex-col items-center text-center w-[90%] pt-40 max-[1100px]:pt-28 ">
        <div className="light_glass  rounded-xl py-24 flex justify-center flex-col items-center">
          <h1 className=" font-medium text-6xl max-sm:text-[50px] max-[473px]:text-[40px] max-[400px]:text-4xl tracking-tight mb-8 w-3/5">
            Services
          </h1>
          <h2 className=" font-semibold text-xl max-sm:text-base max-[473px]:text-sm max-[400px]:text-xs tracking-tight leading-tight w-4/5 text-black text-opacity-70">
            Welcome to SCG, where we provide expert guidance and tailored
            solutions to help you navigate the complex challenges of
            today&apos;s business landscape. Our dedicated team of consultants
            brings a wealth of experience and a commitment to excellence to
            every project. Whether you&apos;re a small startup or a global
            corporation, we&apos;re here to support your success.
          </h2>
        </div>

        <div className=" bg-white  mt-24 w-[100vw] flex justify-center py-12">
          <div className="  grid grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1  gap-12 w-4/5 ">
            {servicesCardList.map((e, i) => {
              return (
                <ServiceCard
                  key={`${i}`}
                  cardName={e.name}
                  cardText={e.text}
                  cardImg={e.icon}
                  cardUrl={e.url}
                ></ServiceCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly max-sm:flex-col max-sm:space-y-10 max-sm:text-center   bg-[#94D5FA]  py-32 w-full ">
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

export default Services;
