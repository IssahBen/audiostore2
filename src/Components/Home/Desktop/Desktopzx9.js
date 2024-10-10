import zx9 from "../../../images/home/desktop/image-speaker-zx9.png";
import { useNavigate } from "react-router-dom";
export default function Desktopzx9() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/speakers/zx9");
  }
  return (
    <div className="w-full h-[525px]  flex justify-between   circles  bg-cover bg-no-repeat bg-brown py-8 mt-24 px-28 desktophide">
      <img src={zx9} alt="" className="w-[410px] h-[493px]" />
      <div className="flex flex-col items-start space-y-8">
        <div className="flex flex-col  font-extrabold text-white tracking-widest">
          <p className="manropebh1 ">ZX9</p>
          <p className="manropebh1 ">SPEAKER</p>
        </div>
        <p className=" leading-7 font-regular manropemed tracking-wide  text-extratintwhite w-[349px]">
          Upgrade to premium speakers that are phoenomenally built to deliver
          truly remarkable sound
        </p>
        <button
          onClick={HandleClick}
          class="bg-black text-white font-medium w-[160px] h-[48px] hover:bg-slate-900"
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
