import React, { useContext, useReducer } from "react";
import reducer from "../reducer/campaign_reducer";
import { NEW_CAMPAIGN_ADDITION, UPDATE_CAMPAIGN_DETAILS } from "../action";
const initialState = {
  campaigns: [],
  newCampaign: {
    title: "",
    user: "select",
    message: "",
  },
};

const CampaignContext = React.createContext();

export const CampaignProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewCampaign = () => {
    dispatch({ type: NEW_CAMPAIGN_ADDITION });
  };
  const updateCampaignDetails = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_CAMPAIGN_DETAILS, payload: { name, value } });
  };

  return (
    <CampaignContext.Provider value={{ ...state, addNewCampaign,updateCampaignDetails }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaignContext = () => {
  return useContext(CampaignContext);
};
