import zx9 from "../../../images/home/tablet/image-speaker-zx9.png";
import { useNavigate } from "react-router-dom";
export default function Tabletzx9() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/speakers/zx9");
  }
  return (
    <div className="w-full h-[720px] mediumhide  largehide flex flex-col space-y-4 circles items-center bg-cover bg-no-repeat bg-brown py-8 mt-24">
      <img src={zx9} alt="" className="w-[190px] h-[230px]" />
      <div className="flex flex-col space-y-0 font-extrabold text-white tracking-widest">
        <p className="manropebh1 text-center">ZX9</p>
        <p className="manropebh1 text-center">SPEAKER</p>
      </div>
      <p className=" leading-7 font-regular manropemed tracking-wide text-center text-extratintwhite w-[349px]">
        Upgrade to premium speakers that are phoenomenally built to deliver
        truly remarkable sound
      </p>
      <button
        onClick={HandleClick}
        class="bg-black text-white font-medium w-[160px] h-[48px] "
      >
        SEE PRODUCT
      </button>
    </div>
  );
}
