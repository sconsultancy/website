"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

function Footer() {
  const [input, setInput] = useState("");
  const handleButtonClick = async () => {
    const res = await axios.post(
      "https://render-test-p5hr.onrender.com/api/email",
      {
        email: input,
      }
    );
    console.log(res);
    document.getElementById("footer_input").value = "";
    toast.success("Thankyou For Contacting Us !!");
  };
  return (
    <div className=" bg-[#232526]    flex-col p-10 pb-5 w-full ">
      <Toaster position="top-center" richColors />

      <div className="flex max-[581px]:grid max-[581px]:gap-6 w-full  justify-around items-center  mt-8 ">
        <p className=" text-2xl text-white tracking-wide  mb-3">
          {`"`}Unleash Your Potential{`"`}
        </p>
        <div className="flex bottom-14 space-x-8 justify-center">
          <Link href={"https://www.facebook.com/profile.php?id=61566453275005"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-[#fff]  hover:fill-slate-400"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link href={"https://youtube.com/@sconsultancy?si=-skADh8ppJY3Kq-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-[#ffffff] hover:fill-slate-400"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </Link>
          <Link href={"https://x.com/Sconsultancy_"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-[#ffffff] hover:fill-slate-400"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>

          <Link href={"https://www.instagram.com/sconsultancy_/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-white hover:fill-slate-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className=" flex justify-evenly max-lg:flex-col max-lg:items-center max-lg:space-y-12  mt-10">
        <div className="flex flex-col justify-center">
          <p className=" font-medium text-white text-2xl pl-1 inline">SCG</p>
          <div className=" mt-3 pl-4 flex w-[500px]  max-sm:w-[80vw]   justify-between bg-[#2A2F39] rounded-full   ">
            <input
              type="text"
              id="footer_input"
              placeholder="Your Work Email"
              onChange={(e) => setInput(e.target.value)}
              className=" bg-black bg-opacity-0 w-full  outline-none  font-semibold text-white text-opacity-40 py-4"
            />
            <button
              onClick={handleButtonClick}
              className="  bg-[#615FEB] text-white rounded-full w-[149px]  h-14 text-sm "
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="flex max-sm:flex-col min-[640px]:space-x-8   max-sm:space-y-8 text-center text-white ">
          <div className="flex flex-col space-y-3 ">
            <h3 className=" text-xl  font-normal">DESIGN</h3>
            <p className="pt-2 opacity-60 text-md">Digital Branding</p>
            <p className="opacity-60 text-md">E-commerce Design</p>
            <p className="opacity-60 text-md">UI/UX Design</p>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className=" text-xl  font-normal">DEVELOP</h3>
            <p className="pt-2 opacity-60 text-md">E-commerce Development</p>
            <p className="opacity-60 text-md">Web Development</p>
            <p className="opacity-60 text-md">App Development</p>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className=" text-xl  font-normal">GROW</h3>
            <p className="pt-2 opacity-60 text-md">Digital Marketting</p>
            <p className="opacity-60 text-md">SEO</p>
            <p className="opacity-60 text-md">A-B Testing</p>
          </div>
        </div>
      </div>
      <div className="flex w-3/4 justify-between mt-16 text-white opacity-80">
        <div className=" ">SCG</div>
        <div className="flex space-x-5">
          <Link href={"/terms"}>
            <p>Terms</p>
          </Link>
          <Link href={"/credits"}>
            <p>Credits</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
