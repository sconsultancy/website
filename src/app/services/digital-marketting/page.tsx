import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DigitalMarketting() {
  return (
    <div>
      <Hero type="digital-marketting"></Hero>

      {/* About Section */}

      <div className=" bg-white flex flex-col items-center">
        <h2 className=" text-5xl font-semibold mt-14">About Us</h2>
        <p className=" text-4xl  px-10 text-center mt-7 text-black text-opacity-70">
          We’re not just marketers—we’re strategic partners invested in your
          success. With years of experience and a relentless commitment to
          innovation, our team is dedicated to helping businesses thrive online.
        </p>
        <div className=" flex w-full items-center justify-evenly">
          <span>
            <h3 className=" text-4xl font-bold my-7">Core Values</h3>
            <h4 className=" text-2xl font-semibold my-3">Transparency</h4>
            <p className=" max-w-[500px] text-black text-opacity-70">
              We believe in open communication, providing clear reports and
              insights so you’re always in the loop.
            </p>
            <h4 className=" text-2xl font-semibold my-3 ">Innovation</h4>
            <p className=" max-w-[500px] text-black text-opacity-70">
              Our team constantly adapts to the latest trends and technologies
              to keep your business competitive
            </p>
            <h4 className=" text-2xl font-semibold my-3 ">Results-Focused</h4>
            <p className=" max-w-[500px] text-black text-opacity-70">
              Our success is measured by your success. We prioritize strategies
              that yield measurable outcomes and long-term value.
            </p>
          </span>
          <img
            src="/services-image/digital-marketting/about-us.png"
            alt="digital marketting image for about us section"
            className=" max-w-[670px]"
          />
        </div>
      </div>

      {/* About Sections Ends */}

      <div className=" bg-white flex flex-col justify-center items-center pt-20">
        <h2 className=" text-5xl font-bold">Our Services</h2>

        <div className=" flex items-center justify-evenly w-full my-14">
          <div className=" flex flex-col items-start">
            <h3 className=" text-2xl font-bold my-7 ">
              Pay-Per-Click {"(PPC)"} Advertising
            </h3>
            <p className=" text-black text-opacity-70 max-w-[680px]">
              We design and manage targeted PPC campaigns that drive immediate
              results. Whether you’re looking to boost sales, increase website
              traffic, or improve brand awareness, our pay-per-click services
              deliver highly targeted leads at a controlled budget.
            </p>
            <h4 className="  text-xl font-bold my-3">Features:</h4>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">
                Google Ads & Social Media Campaigns
              </span>{" "}
              – Leverage search and social networks to reach your audience.
            </p>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">A/B Testing</span> – Continuously
              optimise ad creatives and placements for maximum ROI.
            </p>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Detailed Analytics</span> – Track
              every dollar spent with transparent reporting and conversion data.
            </p>
            <button className=" mt-7  h-[58px] mb-3  bg-black text-white rounded-full px-6  py-4 text-sm  font-medium">
              Start Driving Results with PPC
            </button>
          </div>

          <img
            src="/services-image/digital-marketting/ppc.png"
            alt=" image of Pay per click on Digital Marketting"
          />
        </div>
        <div className=" flex items-center justify-evenly w-full">
          <img
            src="/services-image/digital-marketting/social-media.png"
            alt="Image of Scial Media in Digital Marketting"
          />

          <div className=" flex flex-col items-start my-14">
            <h3 className=" text-2xl font-bold my-7 ">
              Social Media Marketing
            </h3>
            <p className=" text-black text-opacity-70 max-w-[680px]">
              With a tailored social media strategy, we help you connect with
              your audience on platforms like Facebook, Instagram, LinkedIn, and
              Twitter. From creative content to targeted ads, we help you build
              a community and drive engagement
            </p>
            <h4 className="  text-xl font-bold my-3">Features:</h4>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Social Media Management</span> –
              Consistent, engaging posts that reflect your brand’s voice.
            </p>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Social Media Ads</span> – Targeted
              campaigns to reach new and existing followers.
            </p>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Influencer Collaborations</span> –
              Connect with influencers who resonate with your target audience.
            </p>
            <button className=" mt-7  h-[58px] mb-3  bg-black text-white rounded-full px-6  py-4 text-sm  font-medium">
              Boost Your Social Presence
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-evenly w-full my-14">
          <div className=" flex flex-col items-start">
            <h3 className=" text-2xl font-bold my-7 ">Content Marketing</h3>
            <p className=" text-black text-opacity-70 max-w-[680px]">
              High-quality, informative content is at the core of every
              successful digital strategy. We develop blog posts, guides,
              videos, and other media to establish your authority and engage
              your customers at every stage of their journey.
            </p>
            <h4 className="  text-xl font-bold my-3">Features:</h4>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Social Media Management</span> –
              Consistent, engaging posts that reflect your brand’s voice.
            </p>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Social Media Ads</span> – Targeted
              campaigns to reach new and existing followers.
            </p>
            <p className=" max-w-[680px] mb-3">
              <span className=" font-bold">Influencer Collaborations</span> –
              Connect with influencers who resonate with your target audience.
            </p>
            <button className=" mt-7  h-[58px] mb-3  bg-black text-white rounded-full px-6  py-4 text-sm  font-medium">
              View Our Content Marketing Solutions
            </button>
          </div>

          <img
            src="/services-image/digital-marketting/content.png"
            alt=" image of Content Marketting on Digital Marketting"
            className=" max-w-[450px]"
          />
        </div>
      </div>

      {/* Process Section */}
      <Process type={"digital-marketting"}></Process>

      {/* Comtact Us Section */}

      <div className="flex items-center justify-evenly max-sm:flex-col max-sm:space-y-10 max-sm:text-center   bg-[#94D5FA]  py-32 w-full  ">
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

export default DigitalMarketting;
