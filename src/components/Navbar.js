"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import NavbarDrawer from "./NavbarDrawer";

function Navbar() {
  const linkList = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contactus" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [isSignup, setIsSignup] = useState(true);
  const handleLogin = async (e) => {
    setIsOpen(true);
    setIsSignup(false);
  };

  const handleSignup = async (e) => {
    setIsOpen(true);
    setIsSignup(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const switchType = () => {
    // setIsOpen(false);
    setIsSignup(!isSignup);
  };
  const closeDrawer = () => {
    // console.log("triggered CloseDrawer");
    setNavOpen(true);
  };
  const handleNavBurgerClick = (e) => {
    setNavOpen(!navOpen);
  };
  return (
    // <div className="fixed  w-full flex justify-center">
    <div className="flex justify-center pt-3  w-full  self-center fixed z-50   ">
      <div className="flex bg-white py-5  w-5/6   self-center justify-between px-5 rounded-full max-[1100px]:hidden">
        <div className="flex items-center">
          <Link href={"/"}>
            <h1 className=" font-black text-2xl">SCG</h1>
          </Link>
        </div>
        <div className="flex">
          <div className="flex items-center pr-12">
            {linkList.map((e, i) => {
              return (
                <Link
                  className=" px-2 font-semibold text-lg"
                  key={i}
                  href={e.link}
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center">
            <button
              className=" mx-3 h-[51px] w-[143px] rounded-full  border-[1px] border-black font-semibold text-lg"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className=" mx-3 h-[51px] w-[143px] rounded-full bg-black text-white   font-semibold text-lg"
              onClick={handleSignup}
            >
              Signup
            </button>
            <Modal
              isOpen={isOpen}
              close={closeModal}
              isSignup={isSignup}
              switchType={switchType}
            ></Modal>
          </div>
        </div>
      </div>
      <NavbarDrawer
        isOpen={navOpen}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        closeDrawer={closeDrawer}
      ></NavbarDrawer>
      <div className=" bg-white h-20 w-20 rounded-full min-[1101px]:hidden absolute right-10 flex items-center justify-center  ">
        <button onClick={handleNavBurgerClick} className="z-50">
          <div className=" flex flex-col ">
            <div
              className={`bg-black h-1 w-8 rounded-full mb-1 ${
                navOpen ? "" : "rotate-45 relative top-1"
              } `}
            ></div>
            <div
              className={`bg-black h-1 w-8 rounded-full  mb-1 ${
                navOpen ? "" : "hidden"
              }`}
            ></div>
            <div
              className={`bg-black h-1 w-8 rounded-full mb-1 ${
                navOpen ? "" : "-rotate-45 relative bottom-1"
              }`}
            ></div>
          </div>
        </button>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
