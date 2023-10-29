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
      <div className="flex flex-col items-center text-center w-[90%] pt-40 ">
        <h1 className=" font-medium text-6xl tracking-tight mb-8">Services</h1>
        <h2 className=" font-semibold text-xl tracking-tight leading-tight text-black text-opacity-70">
          Welcome to SCG, where we provide expert guidance and tailored
          solutions to help you navigate the complex challenges of today's
          business landscape. Our dedicated team of consultants brings a wealth
          of experience and a commitment to excellence to every project. Whether
          you're a small startup or a global corporation, we're here to support
          your success.
        </h2>
        <div className=" grid grid-cols-3 gap-12 w-4/5 mt-24">
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
      <div className="flex items-center justify-evenly bg-[#94D5FA] bg-opacity-[0.35] py-32 w-full mt-24">
        {/* <div></div> */}
        <h1 className=" font-semibold  text-6xl w-[367px]">
          Let{"'"}s Work Together
        </h1>
        <Link
          href={"/contactus"}
          className=" h-[340px] w-[340px] rounded-full  bg-gradient-to-b hover:from-white from-sky-400 hover:to-white to-blue-500 flex items-center justify-center font-semibold text-white hover:text-black text-5xl "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Services;
