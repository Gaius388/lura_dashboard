import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineTag, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiPieChart } from "react-icons/tfi";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { RiShieldUserFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import logo from "../../public/logo192.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import MenuItems from "./MenuItems";
import { useSideFilterContext } from "../context/sideFilter_context";

const menuItems = [
  { name: "Dashboard", icon: <MdOutlineDashboard />, href: "/" },
  {
    name: "Users",
    icon: <RiShieldUserFill />,
    href: "/users",
    // subMenus: [{ name: "Courses" }, { name: "Videos" }],
  },
  { name: "Statistics", icon: <TfiPieChart />, href: "/statistics" },
  { name: "Team Member", icon: <AiOutlineTeam />, href: "/teams" },
  { name: "Settings", icon: <IoMdSettings />, href: "/settings" },
  { name: "Offer", icon: <AiOutlineTag />, href: "/offers" },
];

const CollapseDashboard = ({ children }) => {
  const { backColour, activeColour_bg, backImage } = useSideFilterContext();
  const [inactive, setInactive] = useState(false);
  const [dropMore, setDropMore] = useState(false);
  const [dropNotify, setDropNotify] = useState(false);
  const toggleInactive = () => {
    setInactive(!inactive);
  };
  const toggleDropMore = () => {
    setDropMore(!dropMore);
  };
  const toggleDropNotify = () => {
    setDropNotify(!dropNotify);
  };
  return (
    <main className="min-h-screen font-manrope relative z-0">
      <section
        className={`side-menu fixed bg-${backColour} h-full text-white py-7 transition-[width] duration-200s ease-in ${
          inactive ? "w-[4.4em]" : "w-[13.5em]"
        }`}
        style={{ backgroundImage: `url(../images/${backImage})` }}
      >
        <div className="top-section relative px-5">
          <div className="logo w-[2.2em] h-[2.2em] overflow-hidden inline-block">
            <Image src={logo} alt="profile" className="max-w-full max-h-full" />
          </div>
          <h3
            className={`user-info absolute inline-block transition-opacity pl-[0.8em] leading-10 text-xl font-bold text-white ${
              inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Lura VPN
          </h3>
          <div
            className={`toggle-menu-btn text-gray-500 absolute top-1/2 cursor-pointer ${
              inactive ? "right-[-2.3em]" : "right-[1em]"
            } -translate-y-1/2`}
            onClick={toggleInactive}
          >
            {inactive ? (
              <BsFillArrowLeftSquareFill />
            ) : (
              <BsFillArrowRightSquareFill />
            )}
          </div>
        </div>
        <div className={`main-menu mb-1.5 mt-12 ${inactive ? 'px-3' :'pl-3'}`}>
          <ul>
            {menuItems.map((item, index) => (
              <MenuItems
                key={index}
                name={item.name}
                href={item.href}
                inactive={inactive}
                subMenus={item.subMenus || []}
                icon={item.icon}
                activeColour_bg={activeColour_bg}
                onClick={() => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>
        <div className="side-menu-footer w-full absolute bg-[#333] bottom-0 left-0 p-4">
          <div className="avatar w-[2.2em] h-[2.2em] overflow-hidden rounded-full inline-block">
            <Image src={logo} alt="profile" className="max-w-full" />
          </div>
          <div
            className={`user-info absolute inline-block transition-opacity pl-3 text-white ${
              inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
            }`}
          >
            <h5 className="text-md font-bold">Emmanuel</h5>
            <p className="text-xs">emmanuel@yahoo.com</p>
          </div>
        </div>
      </section>
      <section
        className={`py-7 transition-[margin-left] duration-200s linear ${
          inactive ? "ml-[5.9em]" : "ml-[14em]"
        }`}
      >
        <div className="flex justify-between items-center mr-10 pl-4">
          <article>
            <h3 className="2xl:text-2xl sm:text-xl font-semibold">User</h3>
            <p className="2xl:text-lg sm:text-md ">30 Users found</p>
          </article>
          <article className="flex items-center gap-12 2xl:text-xl sm:text-lg">
            <div className="flex items-center gap-2 relative">
              <IoNotificationsOutline
                className="cursor-pointer"
                onClick={toggleDropNotify}
              />
              <CiSearch />
              <div
                className={`rounded-md p-2 absolute top-[1em] right-0 z-10 transition-[height] duration-500s linear ${
                  dropNotify
                    ? "min-h-[4em] min-w-[15em] bg-gray-200"
                    : "h-0 m-0 overflow-hidden bg-white"
                } `}
              >
                <ul className="text-center">
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    Emmanuel responded to your mail
                  </li>
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    You have 5 uncompleted task
                  </li>
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    Campaign set
                  </li>
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    New Campaign Due
                  </li>
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    Test Completed
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-2 relative">
              <Image
                src={logo}
                alt="logo"
                className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
              />

              <FiChevronDown
                className="cursor-pointer"
                onClick={toggleDropMore}
              />
              <div
                className={`rounded-md p-2 absolute top-[1em] right-0 z-10 transition-[height] duration-500s linear ${
                  dropMore
                    ? "min-h-[4em] min-w-[6em] bg-gray-200"
                    : "h-0 m-0 overflow-hidden bg-white"
                } `}
              >
                <ul className="text-center">
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    Profile
                  </li>
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    Settings
                  </li>
                  <li className="py-2.5 cursor-pointer text-sm font-bold">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        {children}
      </section>
    </main>
  );
};

export default CollapseDashboard;
