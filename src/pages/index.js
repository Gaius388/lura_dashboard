import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import SideFilter from "../component/SideFilter";
import DashboardSummary from "../component/DashboardSummary";
import DashboardStats from "../component/DashboardStats";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div>
      <main className="min-h-screen relative font-manrope overflow-x-hidden">
        <div
          className="absolute py-1.5 px-4 rounded-l-lg backdrop-opacity-90 bg-gray-400 right-0 top-32"
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          <IoMdSettings className="text-4xl text-white cursor-pointer" />
        </div>
        <SideFilter openSidebar={openSidebar} />
        <section className="pt-4 pl-4 pr-8">
          <DashboardSummary />
          <DashboardStats />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;