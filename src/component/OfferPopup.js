import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { useCampaignContext } from "../context/campaign_context";

const OfferPopup = ({ toggleOfferPopup }) => {
  const {
    newCampaign: { title, user, message },
    updateCampaignDetails,
    addNewCampaign,
  } = useCampaignContext();
  return (
    <div className="absolute w-full h-full top-0 left-0 z-10 rounded-md backdrop-brightness-50">
      <div className="absolute min-w-[35%] min-h-[80%] top-[5%] left-[7%] sm:left-[20%] lg:left-[33%] border rounded-md bg-white rounded-lg capitalize font-bold text-gray-700 pt-4 flex flex-col">
        <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
          <h3>Create Campaign</h3>
          <AiOutlineClose
            className="text-2xl cursor-pointer text-gray-500"
            onClick={toggleOfferPopup}
          />
        </div>
        <p className="text-xs font-semibold mt-6 normal-case px-4">
          Create a Campaign
        </p>
        <form className="mt-3 grid gap-8 px-4">
          <div className="text-sm grid gap-2">
            <label>Campaign title</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={updateCampaignDetails}
              className="w-full outline-none border-2 rounded-md py-2 pl-3 placeholder:text-gray-300"
              placeholder="Campaign Title"
            />
            <p className="text-xs text-gray-400 normal-case italic">
              This will not be shown to customers
            </p>
          </div>
          <div className="text-sm grid gap-2">
            <label>Send to</label>
            <select
              className="outline-none border-2 rounded-md py-2 px-2 font-medium capitalize"
              value={user}
            >
              <option>Select</option>
              <option>All clients</option>
              <option>selected clients</option>
              <option>All team members</option>
              <option>selected team members</option>
              <option>enter number manually</option>
              <option>filtered clients by car make / model</option>
            </select>
          </div>
          <div className="text-sm grid gap-2">
            <label>Message</label>
            <textarea
              name="message"
              type="text"
              value={message}
              onChange={updateCampaignDetails}
              className="w-full outline-none border-2 rounded-md pl-3 py-1 min-h-[6em] placeholder:text-gray-300"
              placeholder="Campaign Title"
            />
            <p className="text-xs text-gray-400 normal-case italic">
              We`ll include your company name Lura Vpn Limited at the end of
              every message.
            </p>
          </div>
        </form>
        <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
          <article
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
            onClick={toggleOfferPopup}
          >
            <MdOutlineCancel />
            <p className="text-xs">cancel</p>
          </article>
          <article
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
            onClick={() => {
              addNewCampaign();
              toggleOfferPopup();
            }}
          >
            <BsShieldCheck />
            <p className="text-xs">send campaign</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
