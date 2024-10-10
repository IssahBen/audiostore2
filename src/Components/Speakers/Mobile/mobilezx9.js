import { useNavigate } from "react-router-dom";
export default function Mobilezx9() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/speakers/zx9");
  }
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] mt-14 smallhide largehide">
      <div className="w-full h-[352px] mobileczx9 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">ZX9</p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            SPEAKER
          </p>
        </div>
        <p className="text-center text-ash manropemed leading-6">
          Upgrade your sound system with all new ZX9 active speaker.It's
          bookshelf speaker system that offers truly wireless
          connectivity-creating new possibilites for more pleasing and practical
          audio setups.
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
