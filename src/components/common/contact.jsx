/** @format */

// import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import "../Contact.css";
import Footer from "./Footer";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="absolute top-[222px] left-[135px]">
        <span className="main ">Home</span>
        <span className="active"> / Contact</span>
      </div>
      <div className="h-[457px] w-[340px] absolute top-[323px] left-[135px] rounded-[4px] flex flex-col">
        <div className="outside-container">
          <div className="contact-details">
            <div className="header">
              <div className="img-container"></div>

              <div className="header-details flex flex-row w-[135px] items-center gap-2">
                <IoCallOutline className="text-[40px] bg-[#DB4444] text-[white] p-2 rounded-[50%]  " />
                <p className="flex items-center"> Call To Us</p>
              </div>
            </div>
            <p className="availability">
              We are available 24/7, 7 days a week.
            </p>
            <p className="">Phone: +254700505443</p>
            <hr className="line-break" />
            <div className="header">
              <div className="img-container"></div>
              <div className="header-details flex flex-row w-[135px] items-center gap-1 ">
                <MdOutlineEmail className="text-[40px] bg-[#DB4444] text-[white] p-2 rounded-[50%]   " />
                Write To Us
              </div>
            </div>
            <p className="availability">
              Fill out our form and we will contact you within 24 hours
            </p>
            <p className="phone-number w-[300px]">
              Emails: customer@Bloombeauty.com
            </p>
            <p className="phone-number w-[300px]">
              Emails: support@Bloombeauty.com
            </p>
          </div>

          <div className="inputs-field mt-20 bg-[#FFFFFF]">
            <form>
              <div className="inputs">
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder="Your Email *" />
                <input type="tel" placeholder="Your Phone *" />
              </div>
              <textarea
                name="message"
                className="message"
                placeholder="Your Message"
              />
              <input
                type="submit"
                className="btn bg-[#DB4444] w-[215px] h-[56px] rounded text-[16px]"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
      <footer className=" mt-[900px]">
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
