import headphonepic from "../../../images/home/mobile/headphone.png";
import earphonepic from "../../../images/home/mobile/earphone.png";
import speakerpic from "../../../images/home/mobile/speaker.png";
export default function DesktopCategory() {
  return (
    <div className=" w-full h-full flex justify-evenly   mt-28 desktophide">
      <Headphones />
      <Speakers />
      <Earphones />
    </div>
  );
}

function Headphones() {
  return (
    <div className=" w-[350px] h-[204px]  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img
        src={headphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        HEADPHONES
      </p>
      <a href="#home" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </a>
    </div>
  );
}
function Speakers() {
  return (
    <div className=" w-[350px] h-[204px]  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img src={speakerpic} alt="" className="h-48 w-48 absolute top-[-80px]" />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        SPEAKERS
      </p>
      <a href="#home" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </a>
    </div>
  );
}
function Earphones() {
  return (
    <div className="  w-[350px] h-[204px]  flex flex-col relative items-center bg-extratintwhite rounded-md space-y-2 ">
      <img
        src={earphonepic}
        alt=""
        className="h-48 w-48 absolute top-[-80px]"
      />
      <p className="text-black manropebh6 font-bold tracking-wide pt-20">
        EARPHONES
      </p>
      <a href="#home" className="flex space-x-2 mt-2 items-center">
        <p className="text-ash font-semibold ">SHOP</p>
        <p className="font-extrabold text-brown">{">"}</p>
      </a>
    </div>
  );
}
