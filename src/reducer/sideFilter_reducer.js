import {
  SIDEBAR_BACKGROUND,
  SIDEBAR_FILTER,
  SIDEBAR_BACKGROUND_IMAGE,
} from "../action";
const sideFilter_reducer = (state, action) => {
  if (action.type === SIDEBAR_BACKGROUND) {
    return { ...state, backColour: action.payload };
  }
  if (action.type === SIDEBAR_FILTER) {
    return { ...state, activeColour_bg: action.payload };
  }
  if (action.type === SIDEBAR_BACKGROUND_IMAGE) {
    return { ...state, backImage: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sideFilter_reducer;
