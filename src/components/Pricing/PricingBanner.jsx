import React from "react";

const PricingBanner = () => {
  return (
    <>
      <div className="shadow">
        <div className="flex mx-auto items-center gap-[95px] mt-[150px] ml-[170px] text-start  py-8  ">
          <div className="text-webcolor font-semibold text-[50px] w-[750px]  ">
            <h3>Our Pricings</h3>
          </div>

          <div className="text-[18px] text-gray-600  w-[730px] ">
            <p>
              Welcome to SkillBridge's Pricing Plan page, where we offer two
              comprehensive options to cater to your needs: Free and Pro. We
              believe in providing flexible and affordable pricing options for
              our services. Whether you're an individual looking to enhance your
              skills or a business seeking professional development solutions,
              we have a plan that suits you. Explore our pricing options below
              and choose the one that best fits your requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="font-[20px] bg-white space-x-6 text-center rounded-[8px] w-[350px] ml-[800px] mt-[200px] p-3">
        <button className="py-5 px-10 rounded-[8px] text-[20px] text-white bg-common">Monthly</button>
        <button className="py-5 px-10 bg-gray-100 rounded-[8px] text-[20px] text-gray-900">Yearly</button>
      </div>
    </>
  );
};

export default PricingBanner;
