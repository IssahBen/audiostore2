import MobileNav from "./Mobile/MobileNav";
import Mobilezx7 from "./Mobile/Mobilezx7";
import Mobilezx9 from "./Mobile/Mobilezx9";
import MobileHero from "./Mobile/MobileHero";
import Mobileyx1 from "./Mobile/Mobileyx1";
import MobileCategory from "./Mobile/MobileCategory";
import MobileFooter from "./Mobile/MobileFooter";
import TabletNav from "./Tablet/TabletNav";
import TabletHero from "./Tablet/TabletHero";
import TabletCategory from "./Tablet/TabletCategory";
import Tabletzx9 from "./Tablet/Tabletzx9";
import Tabletzx7 from "./Tablet/Tabletzx7";
import Tabletyx1 from "./Tablet/Tabletyx1";
import Mobilesummary from "./Mobile/Mobilesummary";
import Tabletsummary from "./Tablet/Tabletsummary";
import Tabletfooter from "./Tablet/TabletFooter";
import DesktopNav from "./Desktop/DesktopNav";
import DesktopHero from "./Desktop/DesktopHero";
import DesktopCategory from "./Desktop/DesktopCategory";
import Desktopzx9 from "./Desktop/Desktopzx9";
import Desktopzx7 from "./Desktop/Desktopzx7";
import Desktopyx1 from "./Desktop/Desktopyx1";
import Desktopsummary from "./Desktop/Desktopsummary";
import Desktopfooter from "./Desktop/DesktopFooter";
export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <TabletNav />
        <DesktopNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <div id="body" className="w-full h-full">
          <MobileHero />
          <TabletHero />
          <DesktopHero />
          <div className=" w-full flex flex-col px-12 bg-white ">
            <MobileCategory />
            <TabletCategory />
            <DesktopCategory />
            <Mobilezx9 />
            <Tabletzx9 />
            <Desktopzx9 />

            <Mobilezx7 />
            <Tabletzx7 />
            <Desktopzx7 />
            <Tabletyx1 />
            <Mobileyx1 />
            <Desktopyx1 />
            <Mobilesummary />
            <Tabletsummary />
            <Desktopsummary />
          </div>
          <MobileFooter />
          <Tabletfooter />
          <Desktopfooter />
        </div>
      </main>
    </div>
  );
}
