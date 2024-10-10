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
import Desktop59 from "./Desktop/Desktop59";
import DesktopMark1 from "./Desktop/DesktopMark1";
import DesktopMark2 from "./Desktop/DesktopMark2";
import Mobile59 from "./Mobile/Mobile59";
import MobileMark1 from "./Mobile/MobileMark1";
import MobileMark2 from "./Mobile/MobileMark2";
import Tablet59 from "./Tablet/Tablet59";
import TabletMark1 from "./Tablet/TabletMark1";
import TabletMark2 from "./Tablet/TabletMark2";

export default function Headphones() {
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
            HEADPHONES
          </div>
          <div className=" w-full flex flex-col px-5 bg-white space-y-8 ">
            <MobileMark2 />
            <TabletMark2 />
            <DesktopMark2 />
            <MobileMark1 />
            <TabletMark1 />
            <DesktopMark1 />
            <Mobile59 />
            <Tablet59 />
            <Desktop59 />
            <MobileCategory />
            <TabletCategory />
            <div className="w-full desktophide pb-10">
              <DesktopCategory />
            </div>
            <Mobilesummary />
            <Tabletsummary />
            <Desktopsummary />
          </div>
          <div className="w-full h-[654px] mt-10 smallhide largehide">
            <Mobilefooter />
          </div>
          <div className="w-full h-[400px]  mt-10 mediumhide largehide">
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
