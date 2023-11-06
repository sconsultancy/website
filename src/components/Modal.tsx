import React, { useEffect, useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Modal(props: any) {
  //   console.log(props.isOpen);

  const [open, setOpen] = useState(false);
  //   setOpen(props.isOpen);
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.isOpen]);

  return (
    <div
      className={` absolute ${
        props.isOpen ? "flex" : "hidden"
      } justify-center items-center h-screen w-screen left-0 top-0 light_glass  z-50 `}
    >
      <div className=" bg-white w-3/12 p-10 rounded-xl relative">
        {/* Close Button */}
        <button
          onClick={() => {
            props.close();
            console.log(props.isOpen);
          }}
          className=" h-8 w-8 text-4xl absolute -top-[20px] right-[10px]   "
        >
          <span className=" absolute  rotate-45">+</span>
        </button>
        {props.isSignup ? (
          //   <div>
          //   </div>
          <SignupForm></SignupForm>
        ) : (
          <LoginForm></LoginForm>
        )}
      </div>
    </div>
  );
}

export default Modal;
