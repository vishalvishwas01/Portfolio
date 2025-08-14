import React, { forwardRef } from "react";
import { SignupForm } from "./SignupForm";
import Footer from "../Footer/Footer"

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen w-screen flex flex-col justify-center items-center pt-0 lg:pt-50">
      <SignupForm/>
      <Footer/>
    </div>
  )
});

export default Contact
