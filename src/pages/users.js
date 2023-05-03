import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../public/logo192.png";
import DatePicker from "../component/DatePicker";
import Image from "next/image";


const Users = () => {
  return (
    <section className="pl-4">
      <div className="flex items-center 2xl:text-sm sm:text-xs font-medium 2xl:mt-6 sm:mt-4 justify-between mr-10">
        <ul className="flex gap-6 text-gray-300">
          <li className="text-black">All Users</li>
          <li>Paid Users</li>
          <li>Trial Users</li>
        </ul>
        <article className="flex items-center gap-1">
          <DatePicker />
          <p>To</p>
          <DatePicker />
        </article>
      </div>
      <div className="grid grid-cols-7 px-3 2xl:py-2 sm:py-1.5 justify-items-center 2xl:text-md sm:text-sm bg-gray-100 rounded-md my-6 mr-10">
        <p>Id</p>
        <p className="capitalize">Name</p>
        <p className="capitalize">address</p>
        <p>Date</p>
        <p>Price</p>
        <p className="capitalize">status</p>
        <p>Action</p>
      </div>
      <div className="grid">
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
        <div
          className="grid grid-cols-7 px-3 2xl:py-3 sm:py-2.5 border border-gray-100 shadow-md justify-items-center items-center sm:text-xs 2xl:text-sm rounded-sm font-semibold mr-10 mb-4 hover:text-white hover:bg-blue-700 
          transition ease-in-out delay-150 hover:translate-x-6 duration-200 hover:scale-y-110 "
        >
          <p>#2734</p>
          <p className="capitalize flex items-center gap-1">
            <Image
              src={logo}
              alt="logo"
              className="w-[1rem] h-[1rem] rounded-full border border-green-300 border-2"
            />
            <h3 className="capitalize">brooklyn Zoe</h3>
          </p>
          <p className="capitalize">danyor</p>
          <p>03/03/23</p>
          <p>$72.0</p>
          <p className="capitalize">pending</p>
          <p className="flex gap-3">
            <IoMdSettings className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
            <FiChevronDown className="p-0.5 text-xl rounded-sm hover:bg-blue-500" />
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center 2xl:text-sm sm:text-xs font-bold my-4 mr-10">
        <main>Showing 06-14 Of 28</main>
        <div className="flex items-center gap-2 cursor-pointer">
          <BiChevronLeft />
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <BiChevronRight />
        </div>
      </div>
    </section>
  );
};

// withAuth(Users);
export default Users;
