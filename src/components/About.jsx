import carIcon from "../assets/features-icons/car.svg";
import clock from "../assets/features-icons/clock.svg";
import locationPin from "../assets/features-icons/locationPin.svg";
import touchscreen from "../assets/features-icons/Touchscreen.svg";

function About() {
  const features = [
    {
      icon: carIcon,
      title: "From business to Luxuryclass",
    },
    {
      icon: locationPin,
      title: "125 Location in Indonesia",
    },
    {
      icon: touchscreen,
      title: "Convenient Online Book",
    },
    {
      icon: clock,
      title: "24/7 Exclusive On the road",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[20px] px-[20px] pb-[67px] md:flex-row md:gap-[100px] md:px-[140px]">
      <div className="text-[#344054] md:w-[560px]">
        <h1 className="text-center text-[30px] font-medium md:text-left  md:text-[40px]">
          About Us
        </h1>
        <p className="mb-[36px] text-center text-[18px] md:text-left md:text-[32px]">
          Find out briefly but informatively
        </p>
        <p className="text-center text-[14px] md:text-left md:text-[20px]">
          As an upscale and exclusive chauffeur and limousine service near
          Indonesia, we have been ensuring for more than 15 years that you get
          to your destination on time and safely. We sell in around Indonesia ,
          as well as beyond to destinations throughout World. From the Indonesia
          to shuttle service, you can look forward to a professional team and
          comfort of our car service.
        </p>
      </div>
      <div className="flex flex-wrap justify-center rounded-[30px] bg-[#E3E6E9] px-[90px] py-[38px] md:h-[300px] md:w-[500px] md:justify-between">
        {features.map((feature) => (
          <div className="mb-[50px] flex flex-col items-center justify-center last:mb-0 md:last:mb-[50px]">
            <img
              src={feature.icon}
              alt="feature icon"
              className="h-[48px] w-[48px]"
            />
            <p className="w-[114px] text-center text-[16px] text-[#344054]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
