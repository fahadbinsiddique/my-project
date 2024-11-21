import React from "react";
import vector from '../../assets/Vector.png'

const LoginBanner = () => {
  return (
    <div className="bg-white h-[997px] w-[660px] rounded-[12px] ml-[1070px] shadow-md mt-[120px]">
      <div className="items-center text-center  p-10 space-y-4 ">
        <h1 className="text-[48px] font-semibold">Login</h1>
        <p className="text-[18px] text-gray-500">
        Welcome back! Please log in to access your account.
        </p>
      </div>

      <div className="p-14 text-[18px] font-medium space-y-6 ">
      
        <h5>Email</h5>
        <input
          className="placeholder:text-gray-400 bg-gray-100 p-5  w-[560px] rounded-[10px] "
          type="text"
          placeholder="Enter Your Email"
        />
        <h5>Passwoed</h5>
        <input
          className="placeholder:text-gray-400 bg-gray-100 p-5  w-[560px] rounded-[10px] "
          type="password"
          placeholder="Enter Your Password"
        />

        <div className="flex gap-3">
          <input type="checkbox" />
          <p>
            I agree with{" "}
            <a href="" className="underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>

        <button className="bg-common p-5  w-[560px] rounded-[10px] text-white  ">
          Sign Up
        </button>
        <h2 className="text-center  text-gray-500 text-[18px] font-thin">OR</h2>

        <button className="bg-gray-200 text-[18px] font-medium p-5 gap-3 py-3  w-[560px] rounded-[10px] flex items-center justify-center hover:bg-gray-300 transition">
          <img
            className=""
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
          Login With Google
        </button>

        <h4 className="text-[18px] text-gray-800 space-x-2 justify-center text-center gap-1 flex">Don’t have an account? <a href="/sign-up" className="underline" >Sign Up </a><img className="w-[13px] h-[13px] mt-[9px] " src={vector} alt="" /></h4>
      </div>
    </div>
  );
};

export default LoginBanner;
