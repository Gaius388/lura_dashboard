import sideBar1 from "../../public/sidebar-1.jpg";
import sideBar2 from "../../public/sidebar-2.jpg";
import sideBar3 from "../../public/sidebar-3.jpg";
import sideBar4 from "../../public/sidebar-4.jpg";
import { useSideFilterContext } from "../context/sideFilter_context";
import Image from "next/image";

const SideFilter = ({ openSidebar }) => {
  const { backgroundColour, activeFilterColour, activeBackImage } =
    useSideFilterContext();
  return (
    <div
      className={`min-h-[75vh] absolute right-0 top-24 z-30 bg-white border w-[16.5rem] transition ease-in duration-1000s ${
        openSidebar ? "translate-x-[21.5rem]" : "-translate-x-20"
      } ease-in-out rounded-lg drop-shadow-lg p-2 text-center font-bold text-xs`}
    >
      <h3 className="uppercase">sidebar filters</h3>
      <div className="flex items-center justify-center gap-2 my-3">
        <div
          className="w-[1em] h-[1em] rounded-full bg-cyan-400"
          data-colour_filter="cyan-400"
          onClick={activeFilterColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-orange-400"
          data-colour_filter="orange-400"
          onClick={activeFilterColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-blue-400"
          data-colour_filter="blue-400"
          onClick={activeFilterColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-purple-400"
          data-colour_filter="purple-400"
          onClick={activeFilterColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-gray-400"
          data-colour_filter="gray-400"
          onClick={activeFilterColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-yellow-400"
          data-colour_filter="yellow-400"
          onClick={activeFilterColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-red-600"
          data-colour_filter="red-500"
          onClick={activeFilterColour}
        />
      </div>
      <hr />
      <h3 className="uppercase mt-2">sidebar background</h3>
      <div className="flex items-center justify-center gap-2 my-3">
        <div
          className="w-[1em] h-[1em] rounded-full bg-cyan-400"
          data-back_colour="cyan-400"
          onClick={backgroundColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-gray-300"
          data-back_colour="gray-400"
          onClick={backgroundColour}
        />
        <div
          className="w-[1em] h-[1em] rounded-full bg-black"
          data-back_colour="black"
          onClick={backgroundColour}
        />
      </div>
      <hr />
      <div className="py-4 text-[0.9rem] font-light flex items-center justify-between">
        <h3>Sidebar Mini</h3>
        <div className="w-[3.5rem] h-[1.5em] rounded-full border bg-gray-400 relative">
          <div className="absolute w-[1.5rem] h-[1.7em] top-[-0.2em] rounded-full bg-white border drop-shadow-xl"></div>
        </div>
      </div>
      <hr />
      <div className="py-4 text-[0.9rem] font-light flex items-center justify-between">
        <h3>Sidebar Image</h3>
        <div className="w-[3.5rem] h-[1.5em] rounded-full border bg-gray-400 relative">
          <div className="absolute w-[1.5rem] h-[1.7em] top-[-0.2em] rounded-full bg-white border drop-shadow-xl"></div>
        </div>
      </div>
      <hr />
      <div className="py-2 mb-3">
        <h2 className="uppercase">Images</h2>
        <span className="pt-3 flex items-center justify-evenly">
          <Image src={sideBar1} alt="sidebar" className="w-[3.5em] rounded-md" onClick={activeBackImage} data-back_image='sidebar-1.jpg'/>
          <Image src={sideBar2} alt="sidebar" className="w-[3.5em] rounded-md" onClick={activeBackImage} data-back_image='sidebar-2.jpg'/>
          <Image src={sideBar3} alt="sidebar" className="w-[3.5em] rounded-md" onClick={activeBackImage} data-back_image='sidebar-3.jpg'/>
          <Image src={sideBar4} alt="sidebar" className="w-[3.5em] rounded-md" onClick={activeBackImage} data-back_image='sidebar-4.jpg'/>
        </span>
      </div>
      <button className="bg-orange-400 text-white text-[1em] py-3 w-full rounded-md shadow-lg mb-2">
        BUY NOW
      </button>
      <button className="bg-cyan-400 text-white text-[1em] py-3 w-full rounded-md shadow-lg mb-2">
        DOCUMENTATION
      </button>
      <p className="mt-1 uppercase">thank you for sharing</p>
    </div>
  );
};

export default SideFilter;
