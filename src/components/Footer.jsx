import companyLogo from "../assets/footer-assets/logoWhite.svg";
import twitterLogo from "../assets/social-icons/twitter-circle-filled.svg";
import facebookLogo from "../assets/social-icons/facebook-fill.svg";
import instagramLogo from "../assets/social-icons/instagram-filled.svg";
import linkedinLogo from "../assets/social-icons/linkedin-box-fill.svg";
import biGlobe from "../assets/footer-assets/bi_globe.svg";
import arrowRight from "../assets/footer-assets/bi_arrow-right.svg";

function Footer() {
  const socialMedia = [
    {
      name: "twitter",
      logo: twitterLogo,
      link: "https://twitter.com/",
    },
    {
      name: "facebook",
      logo: facebookLogo,
      link: "https://www.facebook.com/",
    },
    {
      name: "instagram",
      logo: instagramLogo,
      link: "https://www.instagram.com/",
    },
    {
      name: "linkedin",
      logo: linkedinLogo,
      link: "https://www.linkedin.com/",
    },
  ];

  const footerColumns = [
    {
      title: "Buy Vehicles",
      links: [
        {
          name: "Find new car",
          link: "/",
        },
        {
          name: "Current vehicle offers",
          link: "/",
        },
        {
          name: "Price lists & brochures",
          link: "/",
        },
      ],
    },
    {
      title: "Purchase advice",
      links: [
        {
          name: "Book a test drive",
          link: "/",
        },
        {
          name: "Find a dealer near you",
          link: "/",
        },
        {
          name: "Find used vehicles",
          link: "/",
        },
      ],
    },
    {
      title: "Customer Service",
      links: [
        {
          name: "Current service offers",
          link: "/",
        },
        {
          name: "Online service campaign VIN-checker",
          link: "/",
        },
        {
          name: "5 Year staf service",
          link: "/",
        },
        {
          name: "24h roadside assitance",
          link: "/",
        },
        {
          name: "New and events",
          link: "/",
        },
        {
          name: "Press relase",
          link: "/",
        },
      ],
    },
  ];

  return (
    <div className=" bg-[#021E35] px-[20px] pb-[50px] pt-[70px] md:px-[140px] ">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-[30px] md:mb-0 md:w-[300px]">
          <a href="/" className="mb-[25px] flex flex-row items-center gap-2">
            <img src={companyLogo} alt="Company logo" />
            <div className="">
              <h1 className="text-xl font-medium text-[#FCFCFD]">Mobiling</h1>
              <p className="text-xs font-light text-[#FCFCFD]">Automobile</p>
            </div>
          </a>
          <p className="mb-[40px] text-[16px] text-[#FCFCFD]">
            As an upscale and exclusive chauffeur and limousine service near
            Indonesia, we have been ensuring for more than 15 years that you get
            to your destination on time and safely.
          </p>

          <div className="flex gap-[25px] ">
            {socialMedia.map((social) => (
              <a href={social.link} key={social.name}>
                <img
                  src={social.logo}
                  alt={`${social.name} logo`}
                  className="h-[32px] w-[32px]"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[50px] md:flex-row">
          {
            // Footer columns
            footerColumns.map((column) => (
              <div className="w-[210px]" key={column.title}>
                <h1 className="mb-[45px] text-[20px] font-semibold text-[#FCFCFD]">
                  {column.title}
                </h1>
                <ul className="">
                  {column.links.map((link) => (
                    <li
                      className="loading-[24px] mb-[30px] text-[18px] text-[#FCFCFD]"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <hr className="h-[1px] w-full border-none bg-[#FCFCFD]" />
      <div className=" mt-[40px] flex flex-col items-center justify-between gap-[50px]  text-[#FCFCFD] md:flex-row md:gap-0">
        <p className="text-[18px] ">Copyright 2023 Mobiling Co.</p>
        <div className="md:items-normal flex flex-col items-center gap-[55px] text-[18px] md:flex-row">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies</a>
        </div>
        <div className="flex items-center gap-[15px]">
          <img src={biGlobe} alt="Globe icon" className="h-[24px] w-[24px]" />
          <a href="/" className="">
            English
          </a>
          <img
            src={arrowRight}
            alt="Arrow right icon"
            className="h-[24px] w-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
