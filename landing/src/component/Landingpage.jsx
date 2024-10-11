import React from "react";
import Landingsectiontwo from "./Landingsectiontwo";
import Landingsectionthree from "./Landingsectionthree";
import Price from "./Price";
import Navbar from "./Navbar";

const Landingpage = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="bg-hero-pattern bg-contain bg-no-repeat pt-8 bg-right ">
        {/* navbar */}
        <Navbar />
        {/* banner */}
        <div className="pt-[100px] w-auto xs:pt-14">
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-x-96  xs:flex-col sm:flex-col sm:gap-y-20">
            <div className=" flex flex-col gap-y-10 xs:w-auto sm:w-[600px] sm:mx-auto ">
              <h1 className="text-[40px] text-[#091133] text-left font-roboto xs:text-center">
                Introduce Your Product Quickly & Effectively
              </h1>
              <div>
                <p className="text-[#505F98] font-roboto lg:text-left xs:text-center">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
                <p className="text-[#505F98] font-roboto text-left pt-5 xs:text-center">
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>

              <div className="flex gap-10 sm:justify-between">
                <button className="w-[160px]  bg-[#111B47] text-white p-2 rounded-none">
                  Purchase UI Kit
                </button>
                <button className="w-[160px]  border border-[#111B47] text-[#111B47] p-2 rounded-none">
                  Learn More
                </button>
              </div>
            </div>
            <div className="">
              <img
                src="src\assets\Group.svg"
                alt="iamge"
                className="h-[550px] w-[770px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="pt-[150px] xs:pt-3 ">
        <Landingsectiontwo />
      </div>
      <div className="pt-[30px] xs:pt-3 ">
        <Landingsectionthree />
      </div>
    </div>
  );
};

export default Landingpage;
