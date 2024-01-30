import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300   bg-black rounded-lg p-7 lg:p-14 flex gap-2 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        What are you waiting for ? Just fill it up 
      </h1>
      <p className="">
        {/* Tell us more about yourself and what you&apos;re got in mind. */}
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;