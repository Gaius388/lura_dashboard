import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar,Line } from "react-chartjs-2";
import { dataChart1,dataChart2,dataChart3 } from "../utils";
import { BsArrowUpShort } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { RxClock } from "react-icons/rx";
import { IoReload } from "react-icons/io5";

Chart.register(CategoryScale);

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pt-7 gap-y-12 ">
      <article className="border rounded-lg shadow-md px-3 chart_view">
        <main className="h-[11rem] bg-white rounded-md mb-2 mt-[-1.2em] relative z-10 grid justify-center items-center">
          <Bar
            data={dataChart1}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between per week",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </main>
        <div className="absolute flex items-center justify-center gap-4 bottom-[45%] left-[45%] z-0">
          <IoReload className="text-cyan-400 cursor-pointer" />
          <HiPencil />
        </div>
        <h1 className="text-xl font-light">Daily Sales</h1>
        <p className="font-light text-sm flex items-center">
          <BsArrowUpShort className="text-green-500 text-lg" />
          <span>55% increase in today sales</span>
        </p>
        <hr className="mt-3" />
        <div className="flex items-center gap-1 py-3">
          <RxClock className="text-gray-400" />
          <p className="text-[0.8rem] font-light">updated 4 mins ago</p>
        </div>
      </article>
      <article className="border rounded-lg shadow-md px-3 chart_view">
        <main className="h-[11rem] bg-white rounded-md mb-2 mt-[-1.2em] relative z-10 grid justify-center items-center">
          <Line
            data={dataChart2}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Bi-monthly email subscriptions",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </main>
        <div className="absolute flex items-center justify-center gap-4 bottom-[45%] left-[45%] z-0">
          <IoReload className="text-cyan-400 cursor-pointer" />
          <HiPencil />
        </div>
        <h1 className="text-xl font-light">Email Subscriptions</h1>
        <p className="font-light text-sm flex items-center">
          Last Campaign Performance
        </p>
        <hr className="mt-3" />
        <div className="flex items-center gap-1 py-3">
          <RxClock className="text-gray-400" />
          <p className="text-[0.8rem] font-light">campaign sent 2 days ago</p>
        </div>
      </article>
      <article className="border rounded-lg shadow-md px-3 chart_view">
        <main className="h-[11rem] bg-white rounded-md mb-2 mt-[-1.2em] relative z-10 grid justify-center items-center">
          <Line
            data={dataChart3}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Number of tasks during daily",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </main>
        <div className="absolute flex items-center justify-center gap-4 bottom-[45%] left-[45%] z-0">
          <IoReload className="text-cyan-400 cursor-pointer" />
          <HiPencil />
        </div>
        <h1 className="text-xl font-light">Completed Tasks</h1>
        <p className="font-light text-sm flex items-center">
          Last Campaign Performance
        </p>
        <hr className="mt-3" />
        <div className="flex items-center gap-1 py-3">
          <RxClock className="text-gray-400" />
          <p className="text-[0.8rem] font-light">campaign sent 2 days ago</p>
        </div>
      </article>
    </div>
  );
};

export default DashboardStats;
