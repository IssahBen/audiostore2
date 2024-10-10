import { useNavigate } from "react-router-dom";
export default function Mobileyx1() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/earphones/yx1");
  }
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] mt-14 smallhide largehide">
      <div className="w-full h-[352px] mobilecyx1 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">
            YX1 WIRELESS
          </p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            EARPHONES
          </p>
        </div>
        <p className="text-center text-ash manropemed leading-6">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones.Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <button
          onClick={HandleClick}
          className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
