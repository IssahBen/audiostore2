import { useNavigate } from "react-router-dom";
import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";

import M59features from "./Mobile/M59features";
import MobileVXX59 from "./Mobile/MobileVXX59";
import MobileOptions59 from "./Mobile/MobileOptions59";
import TabletVxx59 from "./Tablet/TabletVxx59";
import Txx59features from "./Tablet/Txx59features";
import TabletOptionsxx59 from "./Tablet/TabletOptionsxx59";
import Tabletsummary from "../Home/Tablet/Tabletsummary";
import Tabletfooter from "../Home/Tablet/TabletFooter";
import TabletCategory from "../Home/Tablet/TabletCategory";
import DesktopVxx59 from "./Desktop/DesktopVxx59";
import Dxx59features from "./Desktop/Dxx59features";
import DesktopOptionsxx59 from "./Desktop/DesktopOptionsxx59";
import DesktopCategory from "../Home/Desktop/DesktopCategory";
import Desktopsummary from "../Home/Desktop/Desktopsummary";
import Desktopfooter from "../Home/Desktop/DesktopFooter";

export default function VXX59() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <DesktopNav />
        <TabletNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mt-5 text-ash manropemed pl-4 font-bold"
        >
          Go Back
        </button>
        <div id="body" className="w-full h-full">
          <div className=" w-full flex flex-col px-5 bg-white space-y-8 ">
            <MobileVXX59 />
            <TabletVxx59 />
            <DesktopVxx59 />
            <M59features />
            <Txx59features />
            <Dxx59features />
            <MobileOptions59 />
            <TabletOptionsxx59 />
            <DesktopOptionsxx59 />
            <div className="w-full">
              <MobileCategory />
              <div className="flex pl-14 pb-14  w-full items-center justify-center">
                <TabletCategory />
              </div>
              <DesktopCategory />
            </div>
            <div className="w-full  mediumhide largehide">
              <Tabletsummary />
            </div>
            <div className="w-full  desktophide">
              <Desktopsummary />
            </div>
            <Mobilesummary />
          </div>
          <div className="w-full h-[654px] mt-10 smallhide largehide">
            <Mobilefooter />
          </div>
          <div className="w-full h-[400px] mt-10 mediumhide largehide">
            <Tabletfooter />
          </div>
          <div className="w-full h-[365px] mt-10 desktophide">
            <Desktopfooter />
          </div>
        </div>
      </main>
    </div>
  );
}
