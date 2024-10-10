import headphonepic from "../../../images/home/mobile/headphone.png";
import earphonepic from "../../../images/home/mobile/earphone.png";
import speakerpic from "../../../images/home/mobile/speaker.png";
import { NavLink } from "react-router-dom";
export default function MobileCategory() {
  return (
    <div className=" w-full h-full flex flex-col space-y-16 mt-20 smallhide largehide">
      <Headphones />
      <Speakers />
      <Earphones />
    </div>
  );
}

function Headphones() {
  return (
    <div className=" w-full h-44  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img
        src={headphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        HEADPHONES
      </p>
      <NavLink to="/headphones" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </NavLink>
    </div>
  );
}
function Speakers() {
  return (
    <div className=" w-full h-44  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img src={speakerpic} alt="" className="h-48 w-48 absolute top-[-80px]" />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        SPEAKERS
      </p>
      <NavLink to="/speakers" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </NavLink>
    </div>
  );
}
function Earphones() {
  return (
    <div className=" w-full h-44  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img
        src={earphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        EARPHONES
      </p>
      <NavLink to="/earphones" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </NavLink>
    </div>
  );
}
