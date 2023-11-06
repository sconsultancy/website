import Link from "next/link";
import React, { useEffect } from "react";

function NavbarDrawer({ isOpen, handleLogin, handleSignup, closeDrawer }) {
  const linkList = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contactus" },
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);
  const handleBlurClick = (e) => {
    closeDrawer();
  };
  return (
    <div className={`w-screen absolute  top-0 ${isOpen ? "hidden" : ""}`}>
      <div
        className={` h-screen w-screen light_glass absolute top-0 left-0  `}
        onClick={handleBlurClick}
      ></div>
      <div className="absolute right-0 top-0 h-screen w-1/2 bg-white pt-16 pl-6">
        {/* <Link href={"/"} className="flex"> */}
        <Link href={"/"} className="font-black text-2xl">
          SCG
        </Link>
        {/* </Link> */}
        <div className=" mt-8 flex flex-col items-start">
          {linkList.map((e, i) => {
            return (
              <Link
                key={i}
                href={e.link}
                className=" mt-3 font-semibold text-lg inline"
              >
                {e.name}
              </Link>
            );
          })}
        </div>

        <div className=" flex flex-col space-y-4 mt-8">
          <button
            className="  h-[51px] w-[143px] rounded-full  border-[1px] border-black font-semibold text-lg"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className=" h-[51px] w-[143px] rounded-full bg-black text-white   font-semibold text-lg"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarDrawer;
