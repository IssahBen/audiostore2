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
import Desktopzx7 from "./Desktop/desktopzx7";
import Desktopzx9 from "./Desktop/desktopzx9";
import Mobilezx7 from "./Mobile/mobilezx7";
import Mobilezx9 from "./Mobile/mobilezx9";
import Tabletzx7 from "./Tablet/tabletzx7";
import Tabletzx9 from "./Tablet/tabletzx9";

export default function Speakers() {
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
            SPEAKERS
          </div>

          <div className=" w-full flex flex-col px-12 bg-white space-y-8 ">
            <Mobilezx9 />
            <Tabletzx9 />
            <Desktopzx9 />
            <Mobilezx7 />
            <Tabletzx7 />
            <Desktopzx7 />
            <MobileCategory />
            <TabletCategory />
            <div className="w-full desktophide pb-10">
              <DesktopCategory />
            </div>
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
