import zx9 from "../../../images/home/mobile/image-speaker-zx9.png";
import { useNavigate } from "react-router-dom";
export default function Mobilezx9() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/speakers/zx9");
  }
  return (
    <div className="w-full h-full smallhide largehide flex flex-col space-y-4 circles items-center bg-cover bg-no-repeat bg-brown py-8 mt-24">
      <img src={zx9} alt="" className="w-44 h-52" />
      <div className="flex flex-col space-y-0 font-extrabold text-white tracking-widest">
        <p className="manropebh4 text-center">ZX9</p>
        <p className="manropebh4 text-center">SPEAKER</p>
      </div>
      <p className="font-thin tracking-wide text-center text-extratintwhite">
        Upgrade to premium speakers that are phoenomenally built to deliver
        truly remarkable sound
      </p>
      <button
        onClick={HandleClick}
        class="bg-black text-white font-normal py-4 px-10 "
      >
        SEE PRODUCT
      </button>
    </div>
  );
}
