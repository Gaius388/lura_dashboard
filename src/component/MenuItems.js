import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItems = ({
  name,
  subMenus,
  inactive,
  icon,
  onClick,
  href,
  activeColour_bg,
}) => {
  const [expand, setExpand] = useState(false);
  const toggleDropdown = () => {
    setExpand(!expand);
  };
  console.log(href);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <li onClick={onClick} className="mt-4">
      <Link
        href={href}
        className={
          router.pathname === `${href}`
            ? `menu-item text-blue-700 text-md block font-semibold cursor-pointer ${
                inactive ? "rounded-md" : "rounded-l-2xl"
              } bg-${activeColour_bg} `
            : `menu-item text-white text-md block font-semibold cursor-pointer`
        }
        onClick={toggleDropdown}
      >
        <div className="menu-icon inline-block w-[40px] h-[30px] text-2xl pt-1.5 pl-2">
          {icon}
        </div>
        <span
          className={`absolute inline-block transition-opacity leading-7 pl-2 pt-1 ${
            inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
          } duration-200s ease-in`}
        >
          {name}
        </span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul
          className={`sub-menu text-white ml-[1.1em] pl-7 max-h-0 overflow-hidden transition-[max-height] duration-200s ease-in ${
            expand ? "max-h-[200px]" : ""
          }`}
        >
          {subMenus.map((menu, index) => (
            <li key={index}>
              <button
                className={`block my-1 text-sm font-medium inline-block transition-opacity ${
                  inactive ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"
                } duration-200s ease-in`}
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItems;
