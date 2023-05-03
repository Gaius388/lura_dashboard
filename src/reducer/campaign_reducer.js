import { NEW_CAMPAIGN_ADDITION, UPDATE_CAMPAIGN_DETAILS } from "../action";

const campaign_reducer = (state, action) => {
  if (action.type === NEW_CAMPAIGN_ADDITION) {
    const { title, message } = state.newCampaign;
    let addText = {};
    console.log(title, message);
    if (title && message) {
      addText = { campaignTitle: title, campaignMessage: message };
    } else {
      return { ...state, campaigns: [...state.campaigns] };
    }
    return {
      ...state,
      campaigns: [...state.campaigns, addText],
      newCampaign: { ...state.newCampaign, title: "", message: "" },
    };
  }
  if (action.type === UPDATE_CAMPAIGN_DETAILS) {
    const { name, value } = action.payload;
    return { ...state, newCampaign: { ...state.newCampaign, [name]: value } };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default campaign_reducer;
