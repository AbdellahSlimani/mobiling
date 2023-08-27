import companyLogo from "../assets/navbar-assets/logo.svg";
import arrowDown from "../assets/navbar-assets/arrowDown.svg";
import { useState } from "react";

function Navbar() {
  const location = window.location.pathname;

  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "/services",
      subLinks: [
        {
          id: 1,
          title: "Service 1",
          link: "/services/service1",
        },
        {
          id: 2,
          title: "Services 2",
          link: "/services/service2",
        },
        {
          id: 3,
          title: "Services 3",
          link: "/services/service3",
        },
      ],
    },
    {
      id: 3,
      title: "Products",
      link: "/products",
      subLinks: [
        {
          id: 1,
          title: "Products 1",
          link: "/products/product1",
        },
        {
          id: 2,
          title: "Products 2",
          link: "/products/product1",
        },
        {
          id: 3,
          title: "Products 3",
          link: "/products/product3",
        },
      ],
    },
    {
      id: 4,
      title: "Testimonial",
      link: "/testimonial",
    },
  ];

  const isLinkActive = (link) =>
    location === link ||
    (location.startsWith(link) && location[link.length] === "/");

  return (
    <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-[140px] py-[36px]">
      <a href="/" className="flex flex-row items-center gap-2">
        <img src={companyLogo} alt="Company logo" />
        <div className="">
          <h1 className="text-xl font-medium text-[#1A89EC]">Mobiling</h1>
          <p className="text-xs font-light text-[#98A2B3]">Automobile</p>
        </div>
      </a>

      <nav>
        <ul className="flex flex-row">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredLink(item.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item?.subLinks && item?.subLinks.length > 0 ? (
                <p
                  className={`navLink_main ${
                    isLinkActive(item.link) ? "active" : ""
                  }`}
                >
                  {item.title}
                  <img src={arrowDown} alt="arrow down" />
                </p>
              ) : (
                <a
                  href={item.link}
                  className={`navLink_main ${
                    isLinkActive(item.link) ? "active" : ""
                  }`}
                >
                  {item.title}
                </a>
              )}
              {/* Display sublinks when activeLinkId matches the current link's id */}
              {item?.subLinks &&
                item?.subLinks.length > 0 &&
                hoveredLink === item.id && (
                  <ul
                    className={`absolute ${
                      location === item.link ? "top-full" : "-bottom-[5=70px]"
                    }   flex w-full flex-col gap-[5px] rounded-[5px] bg-white px-[10px] py-[10px] text-center shadow-md`}
                  >
                    {item.subLinks.map((subItem) => (
                      <li key={subItem.id}>
                        <a href={subItem.link} className="navLink">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>

      <button className="rounded-[10px] bg-[#1A89EC] px-[40px] py-[12px] text-lg text-white">
        Sign in
      </button>
    </div>
  );
}

export default Navbar;
