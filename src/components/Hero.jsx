import React from "react";
import starIcon from "../assets/hero-assets/Star.png";
import arrowLeft from "../assets/hero-assets/arrowLeft.svg";
import arrowRight from "../assets/hero-assets/arrowRight.svg";
import bmwImg from "../assets/hero-assets/car-bmw.png";
import searchIcon from "../assets/hero-assets/searchIcon.svg";
import circularText from "../assets/hero-assets/circularText.png";
function Hero() {
  const cars = [
    {
      name: "BMW Series 3 BLUE",
      carImg: bmwImg,
      carDetails: [
        {
          title: "Base Price",
          value: "$ 41.87k",
        },
        {
          title: "Power",
          value: "365 HP",
        },
        {
          title: "Engine",
          value: "362 V6",
        },
      ],
    },
  ];
  return (
    <div className="w-full pt-[120px]">
      {/* the blue overlay */}
      <div className="absolute right-[240px] top-0 z-10 hidden h-[1022px] w-[300px] bg-[#1A89EC] opacity-[0.07] md:block"></div>
      <div className="hero_main relative overflow-hidden px-[30px] md:h-[903px] md:pl-[140px] md:pt-[85px]">
        <div className="z-1 absolute left-[248px] top-[134px] h-[392px] w-[392px] shrink-0 rounded-full bg-[#1a89ec] opacity-[0.27] blur-[200px] "></div>

        <div className="z-20 flex flex-col items-center justify-center md:block ">
          <h1 className="text-center text-[30px] font-semibold text-[#344054] md:w-[719px] md:text-left md:text-[80px]">
            Best Car For Your Performance
          </h1>
          <p className="text-center text-[14px] text-[#98A2B3] md:w-[660px] md:text-left md:text-[24px]">
            We will serve you to get dream car here easily and quickly that is
            reliable
          </p>
          <div className="relative mt-[25px] flex h-[47px] w-full items-center justify-between overflow-hidden rounded-[10px] border-[1px] border-[#E4E7EC] md:w-[459px]">
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full border-none
              p-[10px] outline-none"
            />
            <button className="absolute right-0 flex h-full w-[47px] cursor-pointer items-center justify-center bg-[#1A89EC]">
              <img
                src={searchIcon}
                alt="search icon"
                className="cursor-pointer"
              />
            </button>
          </div>

          <div className="right-0 top-[25%] flex w-full flex-col items-center gap-[20px] md:absolute md:z-20 md:hidden md:h-[450px] md:w-[700px]">
            <img
              src={bmwImg}
              alt="car"
              className="h-auto w-full object-contain"
            />
            <div className="flex items-center justify-center gap-[68px] md:mr-[80px]">
              <img src={arrowLeft} alt="arrowLeft" className="cursor-pointer" />
              <img
                src={arrowRight}
                alt="arrowRight"
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="relative w-full pb-[30px] md:pb-0">
            {cars.map((car) => (
              <div className="mb-[16px] w-full pt-[30px] md:pt-[135px]">
                <h1 className=" mb-[20px] text-center text-[20px]  text-[#344054] md:mb-0 md:text-left md:text-[36px]">
                  {car.name}
                </h1>

                <div className="flex w-full items-center justify-between md:w-[374px]">
                  {car.carDetails.map((detail) => (
                    <div>
                      <p className="text-[16px] text-[#98A2B3] ">
                        {detail.title}
                      </p>
                      <p className="text-[24px] font-light text-[#667085]">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="relative mt-[50px]">
              <div className="relative flex w-full items-center justify-center md:w-[560px]">
                <div className=" h-[1px] w-full rounded-[2px] bg-[#98A2B3]"></div>
                <div className=" absolute -right-[7px] h-[8px] w-[8px] rounded-[4px] border-[1px] border-[#98A2B3] "></div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-[25%] hidden h-[450px] w-[700px] flex-col items-center md:z-20 md:flex">
            <div className="absolute top-[15%] -ml-[100px] flex h-[90px] w-[90px] items-center justify-center">
              <img
                src={circularText}
                alt="circular text"
                className="h-full w-full"
              />
              <img src={starIcon} alt="start icon" className="absolute " />
            </div>
            <img
              src={bmwImg}
              alt="car"
              className="h-auto w-full object-contain"
            />
            <div className="mr-[80px] flex items-center justify-center gap-[68px]">
              <img src={arrowLeft} alt="arrowLeft" className="cursor-pointer" />
              <img
                src={arrowRight}
                alt="arrowRight"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
