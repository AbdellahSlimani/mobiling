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
    <div className="flex items-center gap-[100px] px-[140px] pb-[67px]">
      <div className="w-[560px]">
        <h1 className="text-[40px] font-medium text-[#344054]">About Us</h1>
        <p className="mb-[36px] text-[32px] text-[#344054]">
          Find out briefly but informatively
        </p>
        <p className="text-[20px] text-[#344054]">
          As an upscale and exclusive chauffeur and limousine service near
          Indonesia, we have been ensuring for more than 15 years that you get
          to your destination on time and safely. We sell in around Indonesia ,
          as well as beyond to destinations throughout World. From the Indonesia
          to shuttle service, you can look forward to a professional team and
          comfort of our car service.
        </p>
      </div>
      <div className="flex h-[300px] w-[500px] flex-wrap justify-between rounded-[30px] bg-[#E3E6E9] px-[90px] py-[38px]">
        {features.map((feature) => (
          <div className="mb-[50px] flex flex-col items-center justify-center">
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
