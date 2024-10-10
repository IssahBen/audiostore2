import { useNavigate } from "react-router-dom";

export default function Desktopyx1() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center space-x-28 h-[560px] desktophide   ">
      <div className="w-full h-[506px] desktopcyx1 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col w-full items-start justify-center ">
          <p className="tracking-wide manropebh2 text-center font-bold">
            YX1 WIRELESS
          </p>
          <p className="tracking-wide manropebh2 text-center font-bold">
            EARPHONES
          </p>
        </div>
        <div className="w-full pr-5 ">
          <p className="  text-ash manropemed leading-6">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones.Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/earphones/yx1");
          }}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
