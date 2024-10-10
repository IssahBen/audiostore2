import { useNavigate } from "react-router-dom";
import DesktopNav from "../Home/Desktop/DesktopNav";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletNav from "../Home/Tablet/TabletNav";
import Mark1features from "./Mobile/Mark1features";
import MobileOptionsMark1 from "./Mobile/MobileOptionsMark1";
import MobileVMark1 from "./Mobile/MobilevMark1";
import TabletVMark1 from "./Tablet/TabletVMark1";
import TMark1features from "./Tablet/TMark1features";
import TabletOptionsMark1 from "./Tablet/TabletOptionsMark1";
import TabletCategory from "../Home/Tablet/TabletCategory";
import Tabletsummary from "../Home/Tablet/Tabletsummary";
import Tabletfooter from "../Home/Tablet/TabletFooter";
import DesktopOptionsMark1 from "./Desktop/DesktopOptionsMark1";
import DesktopVMark1 from "./Desktop/DesktopVMark1";
import DMark1features from "./Desktop/DMark1features";
import DesktopCategory from "../Home/Desktop/DesktopCategory";
import Desktopsummary from "../Home/Desktop/Desktopsummary";
import Desktopfooter from "../Home/Desktop/DesktopFooter";

export default function VMARK1() {
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
            <MobileVMark1 />
            <TabletVMark1 />
            <DesktopVMark1 />
            <Mark1features />
            <TMark1features />
            <DMark1features />
            <MobileOptionsMark1 />
            <TabletOptionsMark1 />
            <DesktopOptionsMark1 />
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
