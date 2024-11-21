import React from "react";
import footerlogo from "../../assets/Logo.png";
import emaillogo from "../../assets/email.png";
import calllogo from "../../assets/call.png";
import pinlogo from "../../assets/pin.png";
import facebooklogo from "../../assets/facebook.png";
import twitterlogo from "../../assets/twitter.png";
import linklogo from "../../assets/linkedin.png";

const Footer = () => {
  return (
    
    <footer className="   mt-[200px] ">
      <div className="mx-auto flex justify-between p-20    bg-white text-webcolor ">
        <div>
        <img src={footerlogo} alt="" />

        <div className="flex mt-14 gap-5 items-center " >
          <img className="h-[30px] w-[30px] " src={emaillogo} alt="" />
          <p>hello@skillbridge.com</p>
          
        </div>

        <div className="flex mt-5 gap-5 items-center">
          <img className="h-[20px] w-[20px]" src={calllogo} alt="" />
          <p>+91 91813 23 2309</p>
        </div>

        <div className="flex mt-5 gap-5 items-center">
          <img className="h-[20px] w-[20px]" src={pinlogo} alt="" />
          <p>Somewhere in the World</p>
        </div>
      </div>

      <div className="flex space-x-48  mr-20 ">
        <div>
          <h1 className="font-semibold text-[22px] ">Home</h1>
          
          <a href="/"><p className="mt-5 text-gray-500 ">Benifits</p></a>
          <a href="/"><p className="text-gray-500 mt-2">Our Courses</p></a>
          <a href="/"><p className="text-gray-500 mt-2">Our Testimonial</p></a>
          <a href="/"><p className="text-gray-500 mt-2">Our FAQ</p></a>
        </div>

        <div className="text-gray-500">
        <h1 className="text-webcolor font-semibold text-[22px]">About Us</h1>
        <a href="/"><p className="mt-5">Company</p></a>
        <a href="/"><p className="mt-2">Achivements</p></a>
        <a href="/"><p className="mt-2">Our Goals</p></a>
        </div>

        <div>
          <h1 className="text-[22px] font-semibold">Social Profile</h1>
          <div className="flex gap-6 mt-5">
            <div>
              
              <a href="/">
                <img className="h-[30px] w-[30px]" src={facebooklogo} alt="" />
              </a>
            </div>
            <div>
              <a href="/">
                <img className="h-[30px] w-[30px]" src={linklogo} alt="" />
              </a>
            </div>
            <div>
              <a href="/">
                <img className="h-[30px] w-[30px]" src={twitterlogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      <h2 className="text-center mt-[-35px] text-[18px] text-gray-400 p-3">© 2023 Skillbridge. All rights reserved.</h2>
      </footer>
  );
};

export default Footer;
