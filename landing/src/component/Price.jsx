import React from 'react'

const Price = () => {
    return (
      <div className="bg-price-pattern bg-cover">
        <div className="w-[600px] mx-auto py-[200px]  text-center xs:w-auto">
          <div className="flex flex-col gap-y-8 ">
            <div>
              <span className="text-[30px] text-[#091133] font-roboto text-center">
                A Price To Suit Everyone
              </span>
              <p className="text-[16px] font-roboto text-center text-[#6F7CB2] pt-6 xs:px-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
              </p>
            </div>

            <div>
              <span className="text-[#222F65] text-[40px]">$40</span>
              <p className="text-[16px] text-[#37447E]">UI Design Kit</p>
            </div>

            <div className="flex flex-col items-center gap-y-2">
              <span className="text-[#5D6970] text-[14px] ">
                See, One price. Simple
              </span>
              <button className="w-[160px]  bg-[#111B47] text-white p-2 rounded-none">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Price