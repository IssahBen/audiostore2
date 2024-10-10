import { useNavigate } from "react-router-dom";
export default function MobileMark2() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/headphones/mark2");
  }
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] mt-14 smallhide largehide">
      <div className="w-full h-[352px] mobilecmark2 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <p className="tracking-wide manropebh4 text-center font-bold">
          XX99 MARK II HEADPHONES
        </p>
        <p className="text-center text-ash manropemed leading-6">
          The new XX99 Mark II headphones is the pinnacle of pristine audio.It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound
        </p>
        <button
          onClick={HandleClick}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
