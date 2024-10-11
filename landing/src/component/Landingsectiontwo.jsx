import React from 'react'
import { GrCodeSandbox } from "react-icons/gr";

function Landingsectiontwo() {
  return (
    <div>
      <div className="flex lg:flex-row  lg:gap-x-[100px] xs:flex-col sm:flex-col  ">
        <div>
          <div className="flex flex-col lg:gap-y-9 sm:items-center lg:items-start">
            <h2 className="text-[36px] text-[#091133] lg:text-left font-roboto xs:text-center ">
              Light, Fast & Powerful
            </h2>
            <div className="text-[16px]">
              <p className="text-[#505F98] font-roboto lg:text-left xs:text-center sm:text-center md:text-center md:w-[650px] md:mx-auto">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="text-[#505F98] font-roboto lg:text-left pt-5 xs:text-center sm:text-center md:text-center md:w-[650px] md:mx-auto">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className="flex lg:justify-between pt-14 xs:flex-col xs:items-center xs:gap-y-12 sm:justify-around ">
            <div className="text-left w-[255px] flex flex-col gap-y-3 xs:items-center">
              <GrCodeSandbox />
              <span className="text-[16px] text-[#091133]">
                Title Goes Here
              </span>
              <p className="text-[#5D6970] font-roboto text-[12px] xs:text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
            <div className="text-left w-[255px] flex flex-col gap-y-3 xs:items-center">
              <GrCodeSandbox />
              <span className="text-[16px] text-[#091133]">
                Title Goes Here
              </span>
              <p className="text-[#5D6970] font-roboto text-[12px] xs:text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src="src\assets\image1.png" alt="image" className="w-[850px]" />
        </div>
      </div>
    </div>
  );
}

export default Landingsectiontwo
