import CollapseDashboard from "@/component/CollapseDashboard";
import "@/styles/globals.css";
import { SideFilterProvider } from "../context/sideFilter_context";
import { CampaignProvider } from "../context/campaign_context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CampaignProvider>
        <SideFilterProvider>
          <CollapseDashboard>
            <Component {...pageProps} />;
          </CollapseDashboard>
        </SideFilterProvider>
      </CampaignProvider>
    </>
  );
}
