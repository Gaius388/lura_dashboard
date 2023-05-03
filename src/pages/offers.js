import React, { useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import { AiOutlineHistory } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import OfferPopup from "../component/OfferPopup";
import { useCampaignContext } from "../context/campaign_context";
import OfferNewCampaign from "../component/OfferNewCampaign";
// import OfferEmailCampaign from "../component/OfferEmailCampaign";

const Offer = () => {
  const { campaigns } = useCampaignContext();
  const [popOffer, setPopOffer] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const toggleOfferPopup = () => {
    setPopOffer(!popOffer);
  };
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <main className="pt-6 pr-10 pl-4 bg-gray-100 min-h-screen font-manrope">
      {popOffer ? <OfferPopup toggleOfferPopup={toggleOfferPopup} /> : null}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-500 text-sm">
          Create and manage your campaigns here
        </h3>
        <div className="flex capitalize gap-5">
          <article
            className="flex items-center gap-2 px-5 py-2 bg-blue-200 rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer relative"
            onClick={toggleDropDown}
          >
            <GiTwoCoins />
            <p className="text-xs">balance & history</p>
            <div
              className={`rounded-md p-2 absolute top-[2.2em] right-0 z-10 transition-[height] duration-500s linear ${
                dropDown
                  ? "min-h-[4em] min-w-[10.3em] bg-blue-100"
                  : "h-0 m-0 overflow-hidden bg-transparent"
              } `}
            >
              <ul className="text-center">
                <li className="py-2.5 cursor-pointer text-[0.6em] font-bold flex items-center gap-2 justify-center">
                  <AiOutlineHistory />
                  <span>SMS History</span>
                </li>
                <li className="py-2.5 cursor-pointer text-[0.6em] font-bold flex items-center gap-2 justify-center">
                  <GiTwoCoins />
                  <span>SMS Balance</span>
                </li>
              </ul>
            </div>
          </article>
          <article
            className="flex items-center gap-2 px-5 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer "
            onClick={toggleOfferPopup}
          >
            <BsPlusLg />
            <p className="text-xs">create campaign</p>
          </article>
        </div>
      </div>
      <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 mx-auto px-6 text-gray-500 font-bold text-md pb-4">
        <section className="flex items-center justify-between pt-6 pb-4 px-10 text-xs">
          <p>#</p>
          <p>Campaign</p>
          <p>Date</p>
          <p>Sent SMS</p>
          <p>Status</p>
        </section>
        <hr className="mb-3" />
        {campaigns && campaigns.length < 1 ? (
          <p className="text-center font-light text-sm">It`s empty here</p>
        ) : (
          <OfferNewCampaign />
        )}
      </div>
    </main>
  );
};

export default Offer;
