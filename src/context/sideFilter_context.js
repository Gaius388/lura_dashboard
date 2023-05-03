import React, { useContext, useReducer } from "react";
import reducer from "../reducer/sideFilter_reducer";
import {
  SIDEBAR_BACKGROUND,
  SIDEBAR_FILTER,
  SIDEBAR_BACKGROUND_IMAGE,
} from "../action";
const initialState = {
  backColour: "blue-700",
  activeColour_bg: "white",
  activeColour_text: "blue",
  backImage: "sidebar-1.jpg",
};

const SideFilterContext = React.createContext();

export const SideFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const backgroundColour = (e) => {
    const { back_colour } = e.target.dataset;
    dispatch({ type: SIDEBAR_BACKGROUND, payload: back_colour });
  };
  const activeFilterColour = (e) => {
    const { colour_filter } = e.target.dataset;
    dispatch({ type: SIDEBAR_FILTER, payload: colour_filter });
  };
  const activeBackImage = (e) => {
    const { back_image } = e.target.dataset;
    dispatch({ type: SIDEBAR_BACKGROUND_IMAGE, payload: back_image });
  };

  return (
    <SideFilterContext.Provider
      value={{
        ...state,
        backgroundColour,
        activeFilterColour,
        activeBackImage,
      }}
    >
      {children}
    </SideFilterContext.Provider>
  );
};

export const useSideFilterContext = () => {
  return useContext(SideFilterContext);
};
