import React from "react";
import icon from "../../assets/icon container.png";

const Banner = () => {
  return (
    <div className="mx-auto">
      <div className="flex items-center justify-center mx-auto  text-[50px] font-semibold space-x-5  rounded-[5px] mt-[120px] bg-white shadow-md w-[900px]">
        <img className="" src={icon} alt="" />
        <h2 className="text-webcolor  py-4 ">
          <span className="text-span">Unlock</span> Your Creative Potential
        </h2>
      </div>
      <div className=" text-center">
        <h3 className="text-[40px] mt-[50px] text-webcolor font-medium ">
          with Online Design and Development Courses.
        </h3>
        <p className="text-[20px] mt-3 text-webcolor">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex space-x-10  justify-center text-[20px] mt-[90px]">
          <button className="bg-common py-6 px-10 rounded-[12px] font-semibold text-white">Explore Courses</button>
          <button className="text-webcolor px-6 rounded-[10px] bg-white shadow-md font-medium">View Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
