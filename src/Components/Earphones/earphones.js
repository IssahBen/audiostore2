import DesktopCategory from "../Home/Desktop/DesktopCategory";
import Desktopfooter from "../Home/Desktop/DesktopFooter";
import DesktopNav from "../Home/Desktop/DesktopNav";
import Desktopsummary from "../Home/Desktop/Desktopsummary";
import MobileCategory from "../Home/Mobile/MobileCategory";
import Mobilefooter from "../Home/Mobile/MobileFooter";
import MobileNav from "../Home/Mobile/MobileNav";
import Mobilesummary from "../Home/Mobile/Mobilesummary";
import TabletCategory from "../Home/Tablet/TabletCategory";
import Tabletfooter from "../Home/Tablet/TabletFooter";
import TabletNav from "../Home/Tablet/TabletNav";
import Tabletsummary from "../Home/Tablet/Tabletsummary";
import Desktopyx1 from "./Desktop/desktopyx1";

import Mobileyx1 from "./Mobile/mobileyx1";
import Tabletyx1 from "./Tablet/tabletyx1";

export default function Earphones() {
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
        <div id="body" className="w-full h-full">
          <div className="w-full h-24 mb-10 flex justify-center items-center bg-black text-white manropebh4 font-semibold tracking-widest">
            EARPHONES
          </div>
          <div className=" w-full flex flex-col px-12 bg-white ">
            <Mobileyx1 />
            <Tabletyx1 />
            <Desktopyx1 />
            <MobileCategory />
            <TabletCategory />
            <DesktopCategory />
            <div className="w-full">
              <Mobilesummary />
              <Tabletsummary />
              <Desktopsummary />
            </div>
          </div>
          <div className="w-full h-[654px] mb-10 smallhide largehide">
            <Mobilefooter />
          </div>
          <div className="w-full h-[400px] mediumhide largehide">
            <Tabletfooter />
          </div>
          <div className="w-full h-[365px] desktophide">
            <Desktopfooter />
          </div>
        </div>
      </main>
    </div>
  );
}
