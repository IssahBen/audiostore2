import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import MobileOptionsYX1 from "./Mobile/MobileOptionsYX1";
import MobileVYX1 from "./Mobile/MobileVYX1";
import YX1features from "./Mobile/YX1features";
import { useNavigate } from "react-router-dom";
import TabletVyx1 from "./Tablet/TabletVyx1";
import Tyx1features from "./Tablet/Tyx1features";
import TabletCategory from "../Home/Tablet/TabletCategory";
import Tabletsummary from "../Home/Tablet/Tabletsummary";

import TabletOptionsyx1 from "./Tablet/TabletOptionsyx1";
import Tabletfooter from "../Home/Tablet/TabletFooter";
import DesktopVyx1 from "./Desktop/DesktopVyx1";
import Dyx1features from "./Desktop/Dyx1features";
import DesktopOptionsyx1 from "./Desktop/DesktopOptionsyx1";
import DesktopCategory from "../Home/Desktop/DesktopCategory";
import Desktopsummary from "../Home/Desktop/Desktopsummary";
import Desktopfooter from "../Home/Desktop/DesktopFooter";
export default function VYX1() {
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
            <MobileVYX1 />
            <TabletVyx1 />
            <DesktopVyx1 />
            <YX1features />
            <Tyx1features />
            <Dyx1features />
            <MobileOptionsYX1 />
            <TabletOptionsyx1 />
            <DesktopOptionsyx1 />
            <div className="w-full">
              <MobileCategory />
              <div className="flex pl-14 pb-14  w-full items-center justify-center">
                <TabletCategory />
              </div>
              <DesktopCategory />
            </div>
            <Mobilesummary />
            <div className="w-full  mediumhide largehide">
              <Tabletsummary />
            </div>
            <div className="w-full  desktophide">
              <Desktopsummary />
            </div>
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
