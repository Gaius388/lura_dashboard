import React from "react";
import { useCampaignContext } from "../context/campaign_context";

const OfferNewCampaign = () => {
  const { campaigns } = useCampaignContext();
  return (
    <>
      {campaigns.map((campaign, index) => {
        const { campaignTitle } = campaign;
        return (
          <div
            className="flex items-center justify-between py-2 px-10 border rounded-sm border-b-gray-300 text-xs mb-2"
            key={index + 1}
          >
            <p>{index}</p>
            <p>{campaignTitle}</p>
            <p>1/4/2023</p>
            <p>Yes</p>
            <p>Success</p>
          </div>
        );
      })}
    </>
  );
};

export default OfferNewCampaign;
