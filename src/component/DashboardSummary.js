import React from "react";
import { AiFillWarning, AiOutlineHistory } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdInfoOutline } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiTag } from "react-icons/hi";

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 my-6">
      <article className="px-3 border shadow-lg rounded-lg">
        <div className="grid grid-cols-2 items-center">
          <MdOutlineContentCopy className="text-white text-[5.5rem] p-6 bg-blue-700 rounded-md mt-[-0.2em]" />
          <span className="text-right">
            <h1 className="text-sm font-thin">Used Space</h1>
            <p className="text-xl font-light">
              49/50 <span className="text-lg">GB</span>
            </p>
          </span>
        </div>
        <hr className="mt-3" />
        <div className="flex content-center gap-2 py-3">
          <AiFillWarning className="text-red-600" />
          <p className="text-sm font-thin">Get more space</p>
        </div>
      </article>
      <article className="px-3 border shadow-lg rounded-lg">
        <div className="grid grid-cols-2 items-center">
          <SiHomeassistantcommunitystore className="text-white text-[5.5rem] p-6 bg-blue-700 rounded-md mt-[-0.2em]" />
          <span className="text-right">
            <h1 className="text-sm font-thin">Revenue</h1>
            <p className="text-xl font-light">$34,245</p>
          </span>
        </div>
        <hr className="mt-3" />
        <div className="flex content-center gap-2 py-3">
          <FaRegCalendarAlt className="text-gray-400" />
          <p className="text-sm font-thin">Get more space</p>
        </div>
      </article>
      <article className="px-3 border shadow-lg rounded-lg">
        <div className="grid grid-cols-2 items-center">
          <MdInfoOutline className="text-white text-[5.5rem] p-6 bg-blue-700 rounded-md mt-[-0.2em]" />
          <span className="text-right">
            <h1 className="text-sm font-thin">Fixed Issues</h1>
            <p className="text-xl font-light">75</p>
          </span>
        </div>
        <hr className="mt-3" />
        <div className="flex content-center gap-2 py-3">
          <HiTag className="text-gray-400" />
          <p className="text-sm font-thin">Get more space</p>
        </div>
      </article>
      <article className="px-3 border shadow-lg rounded-lg">
        <div className="grid grid-cols-2 items-center">
          <BsTwitter className="text-white text-[5.5rem] p-6 bg-blue-700 rounded-md mt-[-0.2em]" />
          <span className="text-right">
            <h1 className="text-sm font-thin">Followers</h1>
            <p className="text-xl font-light">+234</p>
          </span>
        </div>
        <hr className="mt-3" />
        <div className="flex content-center gap-2 py-3">
          <AiOutlineHistory className="text-gray-400" />
          <p className="text-sm font-thin">Get more space</p>
        </div>
      </article>
    </div>
  );
};

export default DashboardSummary;
